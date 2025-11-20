import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AdditionalPrograms() {
  const items: { title: string; dates: string; cover: string; logo: string; href?: string }[] = [
    {
      title: 'World Youth Fest 2025',
      dates: 'October 06 – October 09, 2025',
      cover: '/img/WYScover.png',
      logo: '/img/WYSlogo.png',
    },
    {
      title: 'Middle East Youth Summit 2025',
      dates: 'December 01 – December 04, 2025',
      cover: '/img/MEYScover.png',
      logo: '/img/MEYSlogo.png',
    },
    {
      title: 'Youth Academic Forum 2025',
      dates: 'December 08 – December 11, 2025',
      cover: '/img/YAFcover.png',
      logo: '/img/YAFlogo.png',
    },
    {
      title: 'Korea Youth Summit 2026',
      dates: 'February 02 – February 05, 2026',
      cover: '/img/KYScover.png',
      logo: '/img/KYSlogo.png',
    },
    {
      title: 'Istanbul Youth Summit 2026',
      dates: 'February 09 – February 12, 2026',
      cover: '/img/IYScover.jpg',
      logo: '/img/IYSlogo.png',
    },
  ];
  return (
    <section className="bg-[#edf5ff] px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Our Additional Programs" />
        <p className="-mt-6 mb-8 text-center text-sm text-pink-600 sm:text-base">
          Explore more programs you can join soon
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {items.map(it => (
            <a
              key={it.title}
              href={it.href || '#'}
              className="group w-[320px] overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 transition hover:shadow-md sm:w-[360px]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={it.cover}
                  alt={`${it.title} Cover`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/60">
                    <Image
                      src={it.logo}
                      alt={`${it.title} Logo`}
                      fill
                      sizes="32px"
                      className="bg-white object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h4 className="text-base font-extrabold text-gray-900 group-hover:text-pink-700 sm:text-lg">
                    {it.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">{it.dates}</p>
                </div>
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-pink-200 bg-pink-50 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
