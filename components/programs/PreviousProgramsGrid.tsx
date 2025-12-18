import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

const PREVIOUS_ITEMS = [
  {
    title: 'Japan Youth Summit 2025',
    dates: 'August 10 – August 13, 2025',
    cover: '/img/coverjysbrosur.png',
    href: '#',
  },
  {
    title: 'Japan Youth Summit 2024',
    dates: 'August 12 – August 15, 2024',
    cover: '/img/coverjysbrosur.png',
    href: '#',
  },
  {
    title: 'Japan Youth Summit 2023',
    dates: 'August 08 – August 11, 2023',
    cover: '/img/coverjysbrosur.png',
    href: '#',
  },
];

export default function PreviousProgramsGrid() {
  return (
    <section className="px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Previous Program" title="Previous Japan Youth Summit Programs" />
        <p className={jysSectionTheme.programsAdditional.subtitle}>
          A look back at past Japan Youth Summit editions
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {PREVIOUS_ITEMS.map(it => (
            <a
              key={it.title}
              href={it.href || '#'}
              className="group w-[320px] overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 transition hover:shadow-md sm:w-[360px]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={it.cover}
                  alt={it.title}
                  fill
                  sizes="(min-width:1024px) 360px, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className={jysSectionTheme.programsAdditional.cardTitle}>{it.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{it.dates}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
