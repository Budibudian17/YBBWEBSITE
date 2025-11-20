"use client";
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

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
        {subtitle ? (
          <p className="-mt-6 mb-8 text-center text-sm text-pink-600">{subtitle}</p>
        ) : null}

        {/* grid berita — komponen ini reusable biar gampang dipakai di halaman lain */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, visible).map(n => {
            const Wrapper: React.ElementType = n.href ? 'a' : 'article';
            return (
              <Wrapper
                key={n.id}
                {...(n.href ? { href: n.href } : {})}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200"
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
              className="inline-flex items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
