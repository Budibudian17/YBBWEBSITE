'use client';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  flag: string;
  country: string;
  year: number;
  photo?: string;
};

export default function Testimonials() {
  const [active, setActive] = useState<Testimonial | null>(null);
  const rows: Array<{
    direction: 'left' | 'right';
    items: Array<Testimonial>;
  }> = [
    {
      direction: 'left',
      items: [
        {
          name: 'Aiko Tanaka',
          role: 'Delegate 2024',
          quote: 'JYS transformed how I collaborate and lead. The network I built is priceless.',
          flag: '🇯🇵',
          country: 'Japan',
          year: 2024,
          photo: '/img/jys.png',
        },
        {
          name: 'Rafi Pratama',
          role: 'Finalist 2023',
          quote: 'Hands-on mentorship and global exposure boosted my confidence tremendously.',
          flag: '🇮🇩',
          country: 'Indonesia',
          year: 2023,
          photo: '/img/jys.png',
        },
        {
          name: 'Mina Park',
          role: 'Participant 2022',
          quote:
            'I learned to turn ideas into action while meeting inspiring people from many fields.',
          flag: '🇰🇷',
          country: 'South Korea',
          year: 2022,
          photo: '/img/jys.png',
        },
        {
          name: 'Samuel Lee',
          role: 'Delegate 2025',
          quote: 'An empowering space to innovate for sustainability and culture.',
          flag: '🇺🇸',
          country: 'United States',
          year: 2025,
          photo: '/img/jys.png',
        },
        {
          name: 'Nadia Putri',
          role: 'Alumni',
          quote: 'Opportunities and friendships that last beyond the program.',
          flag: '🇮🇩',
          country: 'Indonesia',
          year: 2021,
          photo: '/img/jys.png',
        },
      ],
    },
    {
      direction: 'right',
      items: [
        {
          name: 'Akira Watanabe',
          role: 'Volunteer',
          quote: 'Incredible energy and impact. Every session felt meaningful.',
          flag: '🇯🇵',
          country: 'Japan',
          year: 2024,
          photo: '/img/jys.png',
        },
        {
          name: 'Dewi Lestari',
          role: 'Speaker',
          quote: 'Young leaders here are bold and thoughtful—great conversations throughout.',
          flag: '🇮🇩',
          country: 'Indonesia',
          year: 2024,
          photo: '/img/jys.png',
        },
        {
          name: 'Carlos Diaz',
          role: 'Mentor',
          quote: 'Loved the problem-solving spirit. Outcomes were practical and inspiring.',
          flag: '🇪🇸',
          country: 'Spain',
          year: 2023,
          photo: '/img/jys.png',
        },
        {
          name: 'Hana Kim',
          role: 'Delegate',
          quote: 'I gained clarity about my goals and a plan to achieve them.',
          flag: '🇰🇷',
          country: 'South Korea',
          year: 2023,
          photo: '/img/jys.png',
        },
        {
          name: 'Arif Rahman',
          role: 'Alumni',
          quote: 'A catalyst for growth. Highly recommend to any youth leader.',
          flag: '🇮🇩',
          country: 'Indonesia',
          year: 2020,
          photo: '/img/jys.png',
        },
      ],
    },
    {
      direction: 'left',
      items: [
        {
          name: 'Sakura Ito',
          role: 'Participant',
          quote: 'Workshops were top-notch and the culture exchange was unforgettable.',
          flag: '🇯🇵',
          country: 'Japan',
          year: 2022,
          photo: '/img/jys.png',
        },
        {
          name: 'Nurul Azizah',
          role: 'Delegate',
          quote: 'The best platform to build confidence and take initiative.',
          flag: '🇮🇩',
          country: 'Indonesia',
          year: 2025,
          photo: '/img/jys.png',
        },
        {
          name: 'Kenji Sato',
          role: 'Volunteer',
          quote: 'A great community with genuine support and collaboration.',
          flag: '🇯🇵',
          country: 'Japan',
          year: 2024,
          photo: '/img/jys.png',
        },
        {
          name: 'Siti Aisyah',
          role: 'Finalist',
          quote: 'From idea to impact—JYS enabled that journey for me.',
          flag: '🇮🇩',
          country: 'Indonesia',
          year: 2023,
          photo: '/img/jys.png',
        },
        {
          name: 'William Chen',
          role: 'Alumni',
          quote: 'I still collaborate with friends I met here. Powerful network.',
          flag: '🇸🇬',
          country: 'Singapore',
          year: 2021,
          photo: '/img/jys.png',
        },
      ],
    },
  ];

  return (
    <section className="relative w-full overflow-x-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Voices of Success: Our Community Speaks" />
        <p className="-mt-6 mb-10 text-center text-sm text-pink-600">
          Real stories from participants who've experienced transformational results with our
          program
        </p>

        {/* Full card dari ujung kanan ke kiri ( animasi geser ) */}
      </div>
      <div className="space-y-8 px-4 sm:px-6 lg:px-8">
        {rows.map((row, i) => (
          <div key={i} className="relative overflow-hidden py-3">
            {/* fade mask kiri/kanan biar ga keliatan 'mentok' */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
            <div
              className={`flex gap-5 whitespace-nowrap px-4 sm:gap-6 sm:px-6 ${
                row.direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
              }`}
              style={{ ['--duration' as any]: '55s' }}
            >
              {[...row.items, ...row.items].map((t, idx) => (
                <div
                  key={idx}
                  className="my-2 inline-flex w-[260px] shrink-0 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-white p-5 text-left shadow-[0_8px_30px_rgba(2,6,23,0.06)] ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(2,6,23,0.08)] sm:w-[300px] md:w-[340px] lg:w-[360px]"
                  onClick={() => setActive(t)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActive(t);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <p className="whitespace-normal break-words text-sm italic leading-6 text-slate-700">
                    “{t.quote}”
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold text-blue-950">
                        <span className="text-base">{t.flag}</span>
                        <span>{t.name}</span>
                      </p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-pink-600/10 px-2 py-1 text-[10px] font-semibold text-pink-700 ring-1 ring-pink-200">
                      JYS
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Pop Up detail testimoninya */}
      {active && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-4">
              <h3 className="text-lg font-extrabold text-blue-950">Testimonial Detail</h3>
              <button
                onClick={() => setActive(null)}
                className="rounded-md bg-slate-100 px-2 py-1 text-sm font-medium text-slate-700 hover:bg-slate-200"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="grid gap-5 p-5 sm:grid-cols-[96px,1fr]">
              <div className="aspect-square w-24 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
                <div className="relative h-full w-full">
                  <Image
                    src={active.photo || '/img/jys.png'}
                    alt={active.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-blue-950">
                  <span className="text-base">{active.flag}</span>
                  <span>{active.name}</span>
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  {active.country} • {active.role} • {active.year}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm leading-7 text-slate-700">“{active.quote}”</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animasi sekarang pakai util tailwind animate-marquee biar stabil */}
    </section>
  );
}
