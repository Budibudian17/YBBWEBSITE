'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Calendar, MapPin, Square } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

function useCountdown(target: Date) {
  const targetMs = useMemo(() => target.getTime(), [target]);
  const [now, setNow] = useState<number>(() => targetMs);
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CurrentProgram() {
  const countdown = useCountdown(new Date('2026-02-09T00:00:00Z'));
  return (
    <section className="bg-[#eef5ff] px-6 py-10 sm:py-12 md:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Active Programs" />
        <p className="-mt-6 mb-6 text-center text-sm text-pink-600 sm:mb-8 sm:text-base">
          Current programs open for registration and participation
        </p>
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
          <div className="grid items-stretch md:grid-cols-2">
            {/* Kiri: konten ringkas */}
            <div className="p-6 sm:p-8 md:p-10">
              {/* Baris countdown */}
              <div className="mx-auto max-w-xl">
                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                  <CountdownPill value={countdown.days} label="Days" />
                  <CountdownPill value={countdown.hours} label="Hours" />
                  <CountdownPill value={countdown.minutes} label="Minutes" />
                  <CountdownPill value={countdown.seconds} label="Seconds" />
                </div>
                <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-wide text-gray-500">
                  Event Starts In
                </p>
              </div>

              {/* Judul & deskripsi */}
              <div className="mt-6">
                <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-pink-700">
                  Registration Open
                </div>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                  Japan Youth Summit 2026
                </h2>
                <p className="mt-1 text-sm font-medium text-pink-700">Collaboration in Diversity</p>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Dive into our world through this exciting showcase of past programs and inspiring
                  success stories! See firsthand the amazing moments and the vibrant community
                  waiting for you.
                </p>
              </div>

              {/* Tombol aksi (CTA) */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700"
                >
                  Register Now
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-pink-200 bg-white px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm transition hover:bg-pink-50"
                >
                  Download Brochure
                </a>
                <a
                  href="/programs/jys-2026"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Kanan: gambar cover */}
            <div className="relative min-h-[220px] md:min-h-full">
              <Image
                src="/img/coverjysbrosur.png"
                alt="Program Cover"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountdownPill({ value, label }: { value: number; label: string }) {
  const v = String(value).padStart(2, '0');
  return (
    <div className="rounded-lg border border-pink-200 bg-pink-50 px-3 py-2 text-center">
      <div className="text-xl font-extrabold text-pink-700 sm:text-2xl">{v}</div>
      <div className="text-[11px] font-semibold uppercase tracking-wide text-pink-600">{label}</div>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: 'calendar' | 'date' | 'pin' | 'format';
  label: string;
  value: string;
}) {
  const Icon = () => {
    switch (icon) {
      case 'calendar':
        return <CalendarDays className="h-5 w-5 text-pink-600" />;
      case 'date':
        return <Calendar className="h-5 w-5 text-pink-600" />;
      case 'pin':
        return <MapPin className="h-5 w-5 text-pink-600" />;
      case 'format':
        return <Square className="h-5 w-5 text-pink-600" />;
    }
  };
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-2 text-gray-600">
        <Icon />
        <span className="text-xs">{label}</span>
      </div>
      <div className="mt-1 text-base font-semibold text-gray-900">{value}</div>
    </div>
  );
}
