"use client";
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';
export default function PhotoGallery({ mode = 'page' }: { mode?: 'home' | 'page' }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState<number>(12);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const photos: { src: string; caption: string }[] = [
    { src: '/img/programoverview.png', caption: 'Program overview session' },
    { src: '/img/programhighlight1.jpg', caption: 'Keynote highlight' },
    { src: '/img/osaka.jpg', caption: 'Cultural exposure activity' },
    { src: '/img/jysprogram1.jpg', caption: 'Delegates during forum' },
    { src: '/img/galeri1.png', caption: 'Interactive workshop' },
    { src: '/img/galeri2.png', caption: 'Panel discussion' },
    { src: '/img/galeri3.png', caption: 'Team collaboration' },
    { src: '/img/galeri4.png', caption: 'Awarding moment' },
    { src: '/img/galeri5.png', caption: 'Participant presentation' },
    { src: '/img/galeri6.png', caption: 'Networking session' },
    { src: '/img/galeri7.png', caption: 'Q&A with speakers' },
    { src: '/img/galeri8.png', caption: 'Closing ceremony' },
    // Tambahan contoh biar tombol "Load More" ada isinya
    { src: '/img/programoverview.png', caption: 'Program overview session' },
    { src: '/img/programhighlight1.jpg', caption: 'Keynote highlight' },
    { src: '/img/osaka.jpg', caption: 'Cultural exposure activity' },
    { src: '/img/jysprogram1.jpg', caption: 'Delegates during forum' },
  ];

  return (
    <section className="relative w-full bg-[#eef5ff] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Photo Gallery" />
        <p className="-mt-6 mb-8 text-center text-sm text-pink-600">
          Highlights from the Japan Youth Summit program
        </p>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:grid-cols-4">
          {photos.slice(0, visible).map((p, idx) => (
            <div
              key={`${p.src}-${idx}`}
              className="group overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200"
            >
              <button
                type="button"
                onClick={() => setSelected(idx)}
                className="block aspect-[16/10] w-full overflow-hidden cursor-zoom-in"
                aria-label="Open photo"
              >
                <span className="relative block h-full w-full">
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                    className="origin-center scale-100 transform object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </span>
              </button>
            </div>
          ))}
        </div>

        {selected !== null && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute -right-3 -top-3 z-[61] inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow ring-1 ring-slate-200 hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative w-full">
                <Image
                  src={photos[selected].src}
                  alt={photos[selected].caption}
                  width={1920}
                  height={1080}
                  sizes="100vw"
                  className="max-h-[80vh] w-full rounded-xl object-contain"
                />
              </div>
              <div className="mt-3 text-center text-sm font-medium text-white/90">
                {photos[selected].caption}
              </div>
            </div>
          </div>
        )}

        {mode === 'home' ? (
          <div className="mt-8 flex justify-center">
            <a
              href="/programs/gallery"
              className="inline-flex items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
            >
              See All Photos
            </a>
          </div>
        ) : (
          visible < photos.length && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible(v => Math.min(v + 8, photos.length))}
                className="inline-flex items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
              >
                Load More Photos
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
}
