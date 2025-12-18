'use client';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

export type AnnouncementItem = {
  id: number | string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  href?: string;
};

export default function AnnouncementsGrid({
  items,
  title = 'Information Page',
  subtitle = 'Stay updated with the latest news about our programs.',
}: {
  items: AnnouncementItem[];
  title?: string;
  subtitle?: string;
}) {
  // tombol load more — biar ga numpuk panjang, tampil bertahap
  const [visible, setVisible] = useState(Math.min(6, items.length));
  return (
    <section className="px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Announcements" title={title} />
        {subtitle ? <p className={jysSectionTheme.announcementsGrid.subtitle}>{subtitle}</p> : null}

        {/* grid berita — komponen ini reusable biar gampang dipakai di halaman lain */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, visible).map(n => {
            const Wrapper: React.ElementType = n.href ? 'a' : 'article';
            return (
              <Wrapper
                key={n.id}
                {...(n.href ? { href: n.href } : {})}
                className={jysSectionTheme.announcementsGrid.card}
              >
                <div className="h-44 w-full overflow-hidden sm:h-52">
                  <img
                    src={n.image}
                    alt=""
                    className="h-full w-full origin-center scale-100 transform object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-extrabold text-blue-950">{n.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{n.excerpt}</p>
                  <div className="mt-4 h-px w-full bg-slate-200" />
                  <p className="mt-3 text-xs font-semibold text-blue-900">
                    {n.author} <span className="text-slate-500"> - </span>{' '}
                    <span className="text-blue-900">{n.date}</span>
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {visible < items.length && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible(v => Math.min(v + 6, items.length))}
              className={jysSectionTheme.announcementsGrid.loadMoreButton}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
