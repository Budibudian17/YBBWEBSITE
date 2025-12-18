import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight } from 'lucide-react';
import { jysSectionTheme } from '@/lib/theme/jys-components';

// Section daftar program JYS terdahulu — style tetep nge-blend sama tema web
export default function PreviousPrograms() {
  // data dummy realistis; nanti gampang diganti kalo ada data beneran
  const items: {
    year: string;
    city: string;
    country: string;
    dates: string;
    cover: string;
    href?: string;
  }[] = [
    {
      year: '2025',
      city: 'Tokyo',
      country: 'Japan',
      dates: 'Aug 14 – Aug 17, 2025',
      cover: '/img/coverjysbrosur.png',
      href: '/programs/jys-2025',
    },
    {
      year: '2024',
      city: 'Osaka',
      country: 'Japan',
      dates: 'Aug 10 – Aug 13, 2024',
      cover: '/img/coverjysbrosur.png',
      href: '/programs/jys-2024',
    },
    {
      year: '2023',
      city: 'Kyoto',
      country: 'Japan',
      dates: 'Aug 12 – Aug 15, 2023',
      cover: '/img/coverjysbrosur.png',
      href: '/programs/jys-2023',
    },
  ];

  return (
    <section className="px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Previous Programs" title="Past editions of Japan Youth Summit" />

        <div className="flex flex-wrap justify-center gap-5">
          {items.map(it => (
            <div
              key={it.year}
              className="group w-[320px] overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 transition hover:shadow-md sm:w-[360px]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={it.cover}
                  alt={`JYS ${it.year} Cover`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                  priority={false}
                />
                {/* badge tahun biar keliatan jelas */}
                <div className={jysSectionTheme.programsPrevious.yearBadge}>JYS {it.year}</div>
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h4 className={jysSectionTheme.programsPrevious.cardTitle}>
                    {it.city}, {it.country}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">{it.dates}</p>
                </div>
                <a href={it.href || '#'} className={jysSectionTheme.programsPrevious.arrowButton}>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
