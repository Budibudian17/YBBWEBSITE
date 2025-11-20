'use client';
import React from 'react';
import { Star, ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';

// Grid testimonial lengkap dengan data dan kartu — dipisah biar rapi

type Testimonial = {
  name: string;
  country: string;
  year: string;
  avatar: string;
  quote: string;
  full: string;
  role: string;
  rating: number;
};

function flagEmojiFromCode(code: string) {
  if (!code || code.length !== 2) return '🏳️';
  const base = 127397;
  const cc = code.toUpperCase();
  return (
    String.fromCodePoint(cc.charCodeAt(0) + base) + String.fromCodePoint(cc.charCodeAt(1) + base)
  );
}

const countryCodeMap: Record<string, string> = {
  Indonesia: 'ID',
  Pakistan: 'PK',
  Egypt: 'EG',
  Turkey: 'TR',
  Malaysia: 'MY',
  Japan: 'JP',
  Nigeria: 'NG',
  Morocco: 'MA',
  Bangladesh: 'BD',
  'Saudi Arabia': 'SA',
  India: 'IN',
};

const data: Testimonial[] = [
  { name: 'Mayana', country: 'Indonesia', year: '2025', avatar: '/img/galeri7.png', quote: 'I hope that through Istanbul Youth Summit, everyone will create many new memories, make great friends, and gain unforgettable experiences just like I…', full: 'I hope that through Istanbul Youth Summit, everyone will create many new memories, make great friends, and gain unforgettable experiences just like I did. The sessions were insightful, the mentors were inspiring, and the community was incredibly supportive.', role: 'Participant of Japan Youth Summit 2025', rating: 5 },
  { name: 'Ahmad', country: 'Pakistan', year: '2024', avatar: '/img/galeri5.png', quote: 'Being part of the summit expanded my network globally and helped me sharpen my leadership skills…', full: 'Being part of the summit expanded my network globally and helped me sharpen my leadership skills. I collaborated with incredible peers to craft ideas that can create real impact back home.', role: 'Participant of Japan Youth Summit 2024', rating: 5 },
  { name: 'Amina', country: 'Egypt', year: '2025', avatar: '/img/galeri2.png', quote: 'An empowering experience that boosted my confidence to lead projects around education equity…', full: 'An empowering experience that boosted my confidence to lead projects around education equity. The cultural exchange and mentorship made it truly special.', role: 'Participant of Japan Youth Summit 2025', rating: 4 },
  { name: 'Siti', country: 'Malaysia', year: '2024', avatar: '/img/galeri1.png', quote: 'Great platform to exchange ideas and collaborate with peers from many countries…', full: 'Great platform to exchange ideas and collaborate with peers from many countries. I gained practical skills and long-lasting friendships through projects and workshops.', role: 'Participant of Japan Youth Summit 2024', rating: 5 },
  { name: 'Yuki', country: 'Japan', year: '2025', avatar: '/img/galeri3.png', quote: 'Inspiring speakers and strong community support motivated me to lead local initiatives…', full: 'Inspiring speakers and strong community support motivated me to lead local initiatives focusing on sustainability and youth empowerment.', role: 'Participant of Japan Youth Summit 2025', rating: 4 },
  { name: 'Aisha', country: 'Nigeria', year: '2023', avatar: '/img/galeri4.png', quote: 'IYS broadened my perspective and connected me with mentors who truly care…', full: 'IYS broadened my perspective and connected me with mentors who truly care about youth leadership. I returned home with actionable plans and a wider network.', role: 'Participant of Japan Youth Summit 2023', rating: 5 },
  { name: 'Fatima', country: 'Saudi Arabia', year: '2024', avatar: '/img/galeri8.png', quote: 'The international exposure and teamwork experience were invaluable for my growth…', full: 'The international exposure and teamwork experience were invaluable for my growth. I learned to communicate across cultures and drive projects with confidence.', role: 'Participant of Japan Youth Summit 2024', rating: 5 },
  { name: 'Arjun', country: 'India', year: '2023', avatar: '/img/galeri6.png', quote: 'Workshops helped me translate ideas into concrete proposals we can implement…', full: 'Workshops helped me translate ideas into concrete proposals we can implement with partners back home. The peer feedback was incredibly helpful.', role: 'Participant of Japan Youth Summit 2023', rating: 4 },
  { name: 'Hilmi', country: 'Indonesia', year: '2025', avatar: '/img/galeri7.png', quote: 'Workshops helped me translate ideas into concrete proposals we can implement…', full: 'Workshops helped me translate ideas into concrete proposals we can implement with partners back home. The peer feedback was incredibly helpful.', role: 'Participant of Japan Youth Summit 2025', rating: 4 },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5 text-pink-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? 'fill-pink-500 stroke-pink-600' : 'stroke-pink-300'}`} />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
      <div className="flex items-start gap-4">
        <Image src={t.avatar} alt={t.name} width={48} height={48} sizes="48px" className="h-12 w-12 rounded-full object-cover ring-2 ring-white" />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-extrabold text-blue-900">{t.name}</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-[11px] font-semibold text-pink-700 ring-1 ring-pink-200">
              <span className="text-base leading-none">{flagEmojiFromCode(countryCodeMap[t.country] || '')}</span> {t.country}
            </span>
            <span className="inline-flex items-center rounded-full bg-pink-600 px-2 py-1 text-[11px] font-semibold text-white">{t.year}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700">{open ? t.full : t.quote}</p>
          <button type="button" onClick={() => setOpen(v => !v)} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800">
            Read Full Testimonial <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
          <div className="my-4 h-px w-full bg-slate-200" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">{t.role}</span>
            <Stars n={t.rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsGrid() {
  return (
    <section className="px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Participant Voices" title="What they say" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map(t => (
            <TestimonialCard key={`${t.name}-${t.year}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
