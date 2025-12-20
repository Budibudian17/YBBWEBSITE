'use client';

import { useEffect, useState } from 'react';
import { Hourglass, Users } from 'lucide-react';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(target: Date): Countdown {
  const total = target.getTime() - new Date().getTime();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function EarlyBidCTA() {
  const targetDate = new Date('2025-12-31T23:59:59Z');
  const [timeLeft, setTimeLeft] = useState<Countdown>(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return (
    <section className="relative w-full overflow-hidden bg-[url('/img/ctabekground.png')] bg-cover bg-center bg-no-repeat py-12 text-[#172554] sm:py-16 lg:py-20">
      {/* Shape buat background */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="bg-accent/20 pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Isi konten sectionnya */}
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Early Bird Deadline
          </h2>
          <p className="text-blue-950-200 mt-4 max-w-xl">Limited! Only Until 27 January 2025</p>

          <div className="text-blue-950-200 mt-7 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Users className="h-5 w-5 text-blue-950" />
              </div>
              <div>
                <p className="text-3xl font-extrabold leading-tight text-blue-950">187</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-950">
                  Registrants
                </p>
              </div>
            </div>

            <div className="h-11 w-px bg-white/60" />

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Hourglass className="h-5 w-5 text-blue-950" />
              </div>
              <div>
                <p className="text-3xl font-extrabold leading-tight text-blue-950">23</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-950">
                  Seats Left Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: countdown timer */}
        <div className="relative z-10 flex flex-col">
          <div className="rounded-2xl bg-white/95 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/70">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
                Early Bird Countdown
              </p>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center rounded-2xl bg-slate-50 px-2 py-3 ring-1 ring-slate-200"
                >
                  <span className="text-lg font-extrabold tracking-tight text-blue-950 sm:text-2xl">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-[11px] text-slate-500 sm:text-xs">
              Once the timer hits zero, early bird benefits and priority consideration may no longer
              be available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
