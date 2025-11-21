'use client';

import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const videos = [
    { label: 'JYS Program 2025', src: '/video/osaka2025_web.mp4' },
    { label: 'JYS Program 2024', src: '/video/osaka2024_web.mp4' },
  ];

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // biar auto-play pas komponen muncul (kalau muted biasanya auto-play aman)
    v.muted = muted;
    v.play().catch(() => {});
  }, [muted]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  };

  const goTo = (idx: number) => {
    setAnimating(true);
    // jedain dulu videonya yang lagi jalan; nanti src-nya keganti via state di bawah
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.muted = muted;
    }
    // ganti src-nya sekarang; auto-play pas loadeddata biar ga muncul cover/poster
    setCurrentIndex((idx + videos.length) % videos.length);
  };

  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  return (
    <section className="relative w-full bg-[url('/img/bgvideojys2025.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative mx-auto max-w-7xl px-0 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(2,6,23,0.25)] ring-1 ring-slate-900/20">
          <video
            ref={videoRef}
            className={`block h-[46vh] w-full object-cover transition duration-500 ease-out md:h-[56vh] lg:h-[64vh] ${animating ? 'scale-95' : 'scale-100'}`}
            playsInline
            autoPlay
            muted={muted}
            loop
            preload="auto"
            onLoadedData={() => {
              const v = videoRef.current;
              if (!v) return;
              v.currentTime = 0;
              v.play().catch(() => {});
              setAnimating(false);
            }}
            src={videos[currentIndex].src}
          />

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-pink-600/90 px-3 py-1 text-xs font-semibold text-white shadow">
              {videos[currentIndex].label}
            </span>
          </div>

          <button
            type="button"
            onClick={toggleMute}
            className="group absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-slate-800 shadow-md backdrop-blur transition hover:bg-white"
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            <span className="hidden sm:inline">{muted ? 'Sound off' : 'Sound on'}</span>
          </button>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={prev}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-800 shadow hover:bg-white"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-800 shadow hover:bg-white"
              aria-label="Next video"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {videos.map((v, i) => (
              <button
                key={v.src}
                onClick={() => goTo(i)}
                aria-label={`Go to ${v.label}`}
                className={`h-2.5 w-2.5 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'} shadow`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
