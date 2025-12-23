'use client';

import { useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

type FAQItem = { q: string; a: string };

type FAQGroup = {
  label: string;
  faqs: FAQItem[];
};

const PARTNER_FAQ_GROUPS: FAQGroup[] = [
  {
    label: 'Partnership Packages',
    faqs: [
      {
        q: 'What types of partnership packages are available?',
        a: 'We offer flexible partnership tiers for community partners, academic institutions, corporations, and media partners. Each package includes different levels of visibility, branding, and engagement opportunities.',
      },
      {
        q: 'Can we customize a partnership package?',
        a: "Yes. While we provide standard tiers, we are happy to tailor specific benefits, activities, and deliverables based on your organization's objectives and capacity.",
      },
      {
        q: 'Is there a minimum commitment period?',
        a: 'Most partnerships are designed per program cycle (one edition of YBB programs), but we also welcome multi-year collaborations for long-term impact.',
      },
    ],
  },
  {
    label: 'Sponsorship & Benefits',
    faqs: [
      {
        q: 'What visibility will our brand receive as a sponsor?',
        a: 'Depending on the tier, sponsors may receive logo placement on event materials, website, social media campaigns, stage acknowledgements, and dedicated highlight content.',
      },
      {
        q: 'Can sponsors support in-kind instead of financial contributions?',
        a: 'Absolutely. We collaborate with partners providing venues, experts, media coverage, scholarships, or other in-kind resources that directly support program delivery.',
      },
      {
        q: 'Will we receive impact reports after the program?',
        a: 'Yes. Partners receive a post-program summary including participant profiles, key outcomes, media reach, and highlights of collaborative activities.',
      },
    ],
  },
  {
    label: 'Process & Agreement',
    faqs: [
      {
        q: 'How do we start a partnership discussion?',
        a: 'You can fill out the partnership inquiry form or contact our partnership team via email. We will schedule a call to understand your goals and propose a suitable collaboration model.',
      },
      {
        q: 'What does the partnership agreement look like?',
        a: 'We formalize collaborations through a simple Memorandum of Understanding (MoU) or agreement that clearly outlines objectives, roles, timelines, and benefits for both parties.',
      },
      {
        q: 'How early should we confirm our sponsorship?',
        a: 'Ideally, sponsors confirm at least 6–8 weeks before the program date to maximize branding opportunities and integration into our campaigns.',
      },
    ],
  },
];

export default function PartnerFAQSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  const activeGroup = PARTNER_FAQ_GROUPS[activeTab];

  const filteredFaqs = useMemo(() => {
    if (!query.trim()) return activeGroup.faqs;
    const qLower = query.toLowerCase();
    return activeGroup.faqs.filter(
      item => item.q.toLowerCase().includes(qLower) || item.a.toLowerCase().includes(qLower)
    );
  }, [activeGroup, query]);

  return (
    <section className="relative w-full py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="Partner FAQ" title="Questions about Partner & Sponsorship" />
        <p className="mx-auto -mt-6 mb-8 max-w-2xl text-center text-sm text-slate-600">
          Find quick answers about partnership packages, sponsorship benefits, and how to start
          collaborating with YBB.
        </p>

        {/* Search bar */}
        <div className="mx-auto mb-8 max-w-3xl">
          <div className="relative flex items-center overflow-hidden rounded-full bg-white px-4 py-2 shadow-[0_10px_35px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                setOpenIdx(0);
              }}
              placeholder="Search for partnership packages, sponsorship, process, etc."
              className="ml-3 w-full border-none bg-transparent text-sm text-blue-950 placeholder:text-slate-400 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
          {/* Left: Tabs */}
          <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] ring-1 ring-blue-100">
            <nav className="flex flex-col divide-y divide-slate-100">
              {PARTNER_FAQ_GROUPS.map((group, index) => {
                const isActive = index === activeTab;
                return (
                  <button
                    key={group.label}
                    type="button"
                    onClick={() => {
                      setActiveTab(index);
                      setOpenIdx(0);
                    }}
                    className={`relative flex items-center gap-3 px-5 py-4 text-left text-sm font-semibold transition-colors sm:px-6 sm:text-base ${
                      isActive
                        ? 'bg-white text-blue-950'
                        : 'bg-white text-slate-500 hover:bg-pink-50 hover:text-blue-950'
                    }`}
                    aria-current={isActive}
                  >
                    {isActive ? (
                      <span className="h-9 w-0.5 rounded-full bg-pink-600" aria-hidden="true" />
                    ) : (
                      <span className="h-9 w-0.5" aria-hidden="true" />
                    )}
                    <span>{group.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: FAQ list */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="rounded-2xl bg-white px-5 py-6 text-sm text-slate-600 shadow-[0_10px_35px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 sm:px-6">
                No questions match your search. Try a different keyword or category.
              </div>
            ) : null}

            {filteredFaqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(15,23,42,0.1)] ring-1 ring-slate-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-extrabold text-blue-950 sm:text-lg">
                      {item.q}
                    </span>
                    <span className={jysSectionTheme.faq.toggleIcon}>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-5 text-sm leading-6 text-slate-700 sm:px-6">
                      {item.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
