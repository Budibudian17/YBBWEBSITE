import { Check, X } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProgramHighlights() {
  const check = (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
      <Check className="h-4 w-4" />
    </span>
  );
  const cross = (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-200 text-slate-600">
      <X className="h-4 w-4" />
    </span>
  );

  const cards: Array<{
    key: string;
    title: string;
    accent?: 'primary' | 'left' | 'right';
    image: string;
    intro?: string;
    items: Array<{ label: string; type: 'check' | 'cross' }>;
  }> = [
    {
      key: 'values',
      title: 'Program Values',
      accent: 'left',
      image: '/img/programoverview.png',
      intro:
        'Vision: Inspiring young leaders to create innovative solutions that harmonize sustainability with cultural heritage. Mission: Elevate professionalism, empower youth, cultivate leadership, and foster agility.',
      items: [
        { label: 'Elevate professionalism and capabilities', type: 'check' },
        { label: 'Empower youth for national development', type: 'check' },
        { label: 'Cultivate leadership and responsibility', type: 'check' },
        { label: 'Foster agility for future challenges', type: 'check' },
      ],
    },
    {
      key: 'objective',
      title: 'Program Objective',
      accent: 'primary',
      image: '/img/programhighlight1.jpg',
      intro: 'The Japan Youth Summit program aims to achieve:',
      items: [
        { label: 'Build strong youth leadership character', type: 'check' },
        { label: 'Boost youth confidence through competition', type: 'check' },
        { label: 'Sharpen ability to seize opportunities', type: 'check' },
        { label: 'Strengthen youth presence internationally', type: 'check' },
        { label: 'Train collaboration to build the nation', type: 'check' },
        { label: 'Create a robust YBB alumni network', type: 'check' },
      ],
    },
    {
      key: 'benefits',
      title: 'Benefits & Opportunities',
      accent: 'right',
      image: '/img/benefits.png',
      intro: 'Delegate Benefits include:',
      items: [
        { label: 'Exclusive Forum with international figures', type: 'check' },
        { label: 'Peer Support and group discussions', type: 'check' },
        { label: 'Collaboration to generate new ideas', type: 'check' },
        { label: 'Valuable networking opportunities', type: 'check' },
        { label: 'Scholarship opportunities', type: 'check' },
        { label: 'Certificates and awards', type: 'check' },
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#ffffff72] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="More reasons why JYS matters" title="Program Highlights" />

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map(card => (
            <div
              key={card.key}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200 ${
                card.accent === 'primary' ? 'lg:scale-[1.02]' : ''
              }`}
            >
              <div className={`h-40 w-full overflow-hidden bg-blue-100/60`}>
                <img
                  src={card.image}
                  alt=""
                  className="h-full w-full origin-center scale-100 transform object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-b border-slate-200 bg-gradient-to-b from-blue-50/70 to-transparent p-5">
                <h3 className="text-xl font-extrabold text-blue-900">{card.title}</h3>
                {card.intro && (
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.intro}</p>
                )}
              </div>

              <ul className="flex flex-1 flex-col p-5">
                {card.items.map((it, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${idx !== card.items.length - 1 ? 'border-b border-slate-200' : ''}`}
                  >
                    {it.type === 'check' ? check : cross}
                    <span className="text-sm font-medium text-blue-950">{it.label}</span>
                  </li>
                ))}
              </ul>

              <div className="p-5 pt-0">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
