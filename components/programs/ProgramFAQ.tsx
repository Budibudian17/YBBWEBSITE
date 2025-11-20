'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { HelpCircle, ChevronDown } from 'lucide-react';

export type FAQ = { q: string; a: string };

export default function ProgramFAQ({ groups }: { groups: { label: string; faqs: FAQ[] }[] }) {
  const [active, setActive] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-[#eef5ff] px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" align="center" />

        {/* Tabs */}
        <div className="mx-auto mt-2 w-full overflow-hidden rounded-2xl border border-blue-100 bg-white">
          <div className="grid grid-cols-3">
            {groups.map((g, i) => (
              <button
                key={g.label}
                type="button"
                onClick={() => {
                  setActive(i);
                  setOpenIdx(0);
                }}
                className={`relative px-4 py-5 text-center text-base font-extrabold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 sm:px-6 sm:text-lg ${
                  i === active
                    ? 'text-blue-950'
                    : 'text-blue-900/70 hover:bg-pink-50 hover:text-blue-950 hover:shadow-sm hover:ring-1 hover:ring-pink-200'
                }`}
                aria-current={i === active}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <HelpCircle className="h-4 w-4 text-pink-600" />
                  <span>{g.label}</span>
                </span>
                {i === active ? (
                  <span className="absolute inset-x-0 bottom-0 block h-0.5 bg-pink-600" />
                ) : (
                  <span className="absolute inset-y-3 right-0 hidden w-px bg-blue-100 last:hidden sm:block" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-6 space-y-3">
          {groups[active]?.faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-extrabold text-blue-950">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm leading-6 text-slate-700">{item.a}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
