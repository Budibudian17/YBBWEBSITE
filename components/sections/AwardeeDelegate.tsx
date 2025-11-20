'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import { Award, Trophy, Medal, Users, Crown, Camera, Star } from 'lucide-react';

export default function RecognitionAwards() {
  const items: {
    title: string;
    icon: JSX.Element;
    highlights: string[];
    desc?: string;
    chips?: string[];
    accent: string;
    ring: string;
  }[] = [
    {
      title: 'Best Innovation Award',
      icon: <Trophy className="h-5 w-5" />,
      highlights: ['1st Place', '2nd Place', '3rd Place'],
      desc: 'Honoring breakthrough ideas with real-world impact',
      accent: 'bg-pink-600 text-white',
      ring: 'ring-pink-200',
    },
    {
      title: 'Best Presenter',
      icon: <Star className="h-5 w-5" />,
      highlights: ['2 Winners'],
      desc: 'Outstanding delivery, clarity, and audience engagement',
      chips: ['Individual', 'Stage'],
      accent: 'bg-amber-500 text-white',
      ring: 'ring-amber-200',
    },
    {
      title: 'Best Participant',
      icon: <Award className="h-5 w-5" />,
      highlights: ['2 Winners'],
      desc: 'Active contributors with exemplary attitude and consistency',
      chips: ['Individual'],
      accent: 'bg-blue-600 text-white',
      ring: 'ring-blue-200',
    },
    {
      title: 'Best Group',
      icon: <Users className="h-5 w-5" />,
      highlights: ['2 Winners'],
      desc: 'Teamwork, synergy, and collaborative problem-solving',
      chips: ['Team', 'Collaboration'],
      accent: 'bg-emerald-600 text-white',
      ring: 'ring-emerald-200',
    },
    {
      title: 'Best Leader',
      icon: <Crown className="h-5 w-5" />,
      highlights: ['1 Winner'],
      desc: 'Inspiring leadership and decision-making under pressure',
      chips: ['Individual', 'Leadership'],
      accent: 'bg-violet-600 text-white',
      ring: 'ring-violet-200',
    },
    {
      title: 'Best Content Creator',
      icon: <Camera className="h-5 w-5" />,
      highlights: ['1 Winner'],
      desc: 'Creative storytelling through engaging digital content',
      chips: ['Individual', 'Digital'],
      accent: 'bg-rose-600 text-white',
      ring: 'ring-rose-200',
    },
  ];

  return (
    <section className="relative w-full bg-[#ffffff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Awards at Japan Youth Summit" />
        <p className="-mt-6 mb-8 text-center text-sm text-pink-600">
          At JYS, we recognize students who lead, speak up, and make an impact. Your teen could be
          one of them!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(it => (
            <div
              key={it.title}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/10 transition hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] ${it.ring}`}
            >
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`inline-grid h-9 w-9 place-items-center rounded-full ${it.accent}`}
                  >
                    {it.icon}
                  </span>
                  <h3 className="text-lg font-extrabold text-blue-900">{it.title}</h3>
                </div>
                {it.desc ? <p className="text-sm leading-6 text-slate-700">{it.desc}</p> : null}
              </div>

              {it.highlights.length > 1 ? (
                <ul className="flex flex-1 flex-col p-5 pt-0">
                  {it.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center justify-between gap-3 py-3 text-sm transition-colors ${
                        idx !== it.highlights.length - 1 ? 'border-b border-slate-200' : ''
                      }`}
                    >
                      <span className="font-medium text-blue-950">{h}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-700 ring-1 ring-slate-200">
                        JYS
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-1 flex-col p-5 pt-0">
                  {(() => {
                    const raw = it.highlights[0] || '';
                    const match = raw.match(/(\d+)\s+(Winner|Winners|Place|Places)/i);
                    const count = match ? parseInt(match[1], 10) : undefined;
                    const unit = match ? match[2] : raw;
                    return (
                      <div className="flex flex-1 items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <div>
                          <div className="text-3xl font-extrabold text-blue-900">
                            {count ?? raw}
                          </div>
                          {count ? (
                            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                              {unit}
                            </div>
                          ) : null}
                        </div>
                        <div className="flex flex-wrap items-center justify-end gap-2">
                          <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700 ring-1 ring-slate-200">
                            JYS
                          </span>
                          {it.chips?.map(c => (
                            <span
                              key={c}
                              className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700 ring-1 ring-slate-200"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
