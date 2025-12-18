'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Calendar, MapPin, Square } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

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
  return (
    <section className="sm:py-18 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Kiri: deskripsi panjang + theme */}
          <div className="space-y-5 text-blue-950">
            <SectionHeader eyebrow="Active Program" title="Japan Youth Summit 2026" align="left" />
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Japan Youth Summit (JYS) 2026 is an international youth forum that brings together
              passionate young leaders to discuss, design, and drive collaborative solutions for a
              more sustainable and inclusive future in Asia and beyond. Throughout the program,
              participants will engage in panel discussions, cultural exchanges, and hands-on
              workshops guided by experienced mentors and practitioners.
            </p>
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              Beyond the formal sessions, JYS 2026 is also a space to build long-term friendships
              and cross-border collaborations. Delegates will have the opportunity to present their
              ideas, receive constructive feedback, and turn their initiatives into real impact in
              their respective communities after the summit.
            </p>
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              The program also includes field visits, cultural immersion activities, and
              collaborative project sessions that allow participants to directly experience local
              contexts while sharpening their leadership, communication, and problem-solving skills.
              By the end of the summit, every delegate is expected to return home with a clearer
              action plan and a stronger international network to support their initiatives.
            </p>

            <div className="mt-4 space-y-3">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-pink-600">
                  Program Theme
                </h3>
                <p className="mt-1 text-sm font-semibold text-blue-950 sm:text-base">
                  Collaboration in Diversity: Young Leaders Shaping a Sustainable Future
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-pink-600">
                  Subthemes
                </h3>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-blue-950 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
                    Youth Leadership and Community Development
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-blue-950 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
                    Sustainable Tourism and Cultural Preservation
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-blue-950 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
                    Innovation, Digital Economy, and Social Entrepreneurship
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-blue-950 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
                    Global Networking and Cross-Cultural Collaboration
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: kartu program seperti contoh */}
          <div className="mx-auto w-fit">
            <div className="rounded-3xl bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/80 sm:p-5">
              {/* Gambar cover */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/img/jys26posters.png"
                  alt="Japan Youth Summit 2026 cover"
                  width={260}
                  height={360}
                  className="h-auto w-auto object-contain"
                  priority
                />
              </div>

              {/* Info program */}
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-pink-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-blue-950">Osaka &amp; Kyoto, Japan</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CalendarDays className="mt-0.5 h-4 w-4 text-pink-600" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Duration
                      </p>
                      <p className="text-sm font-semibold text-blue-950">5 Days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Square className="mt-0.5 h-4 w-4 text-pink-600" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Program Format
                      </p>
                      <p className="text-sm font-semibold text-blue-950">On-site in Japan</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Calendar className="mt-0.5 h-4 w-4 text-pink-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Event Dates
                    </p>
                    <p className="text-sm font-semibold text-blue-950">02 – 06 February 2026</p>
                  </div>
                </div>
              </div>

              {/* Tombol guidebook */}
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="#guidebook-en"
                  className={`${jysSectionTheme.homeRegistration.guideSecondary} flex w-full items-center justify-center gap-2 text-sm`}
                >
                  <span className="text-lg">🇬🇧</span>
                  <span>Read Guidebook (Eng)</span>
                </a>
                <a
                  href="#guidebook-id"
                  className={`${jysSectionTheme.homeRegistration.guidePrimary} flex w-full items-center justify-center gap-2 text-sm`}
                >
                  <span className="text-lg">🇮🇩</span>
                  <span>Read Guidebook (Ind)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
