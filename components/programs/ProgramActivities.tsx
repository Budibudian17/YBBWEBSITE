import { Calendar, Clock3, Hourglass, Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

interface ActivityDay {
  date: string;
  time: string;
  duration: string;
  dayLabel: string;
  title: string;
  bullets: string[];
  description: string;
}

const DAYS: ActivityDay[] = [
  {
    date: 'Feb 02, 2026',
    time: '12:11 PM - 01:12 PM',
    duration: 'Duration: 1h 1m',
    dayLabel: 'First Day:',
    title: 'Arrival of the Delegates',
    bullets: [
      'Airport assistance',
      'Registration (Hotel Check In)',
      'Opening Ceremony',
      'Gala Dinner',
    ],
    description:
      'Airport Assistance will be provided exclusively at Osaka International Airport, with an estimated pickup session at approximately 12:00 PM local time.',
  },
  {
    date: 'Feb 03, 2026',
    time: '11:15 AM - 05:20 PM',
    duration: 'Duration: 6h 5m',
    dayLabel: 'Day 2:',
    title: 'City Tour and University Visit',
    bullets: ['International Symposium with Global Experts'],
    description:
      'A meaningful opportunity to experience Japanese culture and daily life through city tours and university visits, gaining both cultural insights and academic perspectives.',
  },
  {
    date: 'Feb 04, 2026',
    time: '11:19 AM - 05:22 PM',
    duration: 'Duration: 6h 3m',
    dayLabel: 'Day 3:',
    title: 'Project Presentations, Awards, and Cultural Night',
    bullets: [
      'Project Group Presentations',
      'Awarding Night and Cultural Night',
      'Closing Ceremony',
    ],
    description:
      'Each delegate will be assigned to a distribution group based on the SDGs they have selected. Groups consist of 70 members per project batch.',
  },
  {
    date: 'Feb 05, 2026',
    time: '11:23 AM - 01:24 PM',
    duration: 'Duration: 2h 1m',
    dayLabel: 'Day 4:',
    title: 'Closing Chapter as Delegates Return to Their Countries',
    bullets: ['Certificate claims', 'Hotel Check Out', 'Airport Assistance'],
    description:
      'The Airport Assistance service for departure at Osaka International Airport will be available at 12:00 PM local time.',
  },
];

export default function ProgramActivities() {
  return (
    <section className="relative w-full bg-[url('/img/bgshorts60.jpg')] bg-cover bg-center bg-no-repeat py-10 sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Program Rundown"
          title="Japan Youth Summit 2026 Activity"
          align="center"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {DAYS.map(day => (
            <article
              key={day.title}
              className="flex h-full flex-col rounded-3xl bg-white px-5 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.24)] ring-1 ring-slate-200/80 sm:px-6 sm:py-6"
            >
              {/* Top meta row */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600 sm:text-[13px]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-pink-600" />
                  <span>{day.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-pink-600" />
                  <span>{day.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Hourglass className="h-4 w-4 text-pink-600" />
                  <span>{day.duration}</span>
                </div>
              </div>

              {/* Title + bullets */}
              <div className="mt-3 flex-1">
                <h3 className="text-base font-extrabold text-blue-950 sm:text-lg">
                  <span className="text-pink-600">{day.dayLabel}</span> {day.title}
                </h3>

                <div className="mt-3 grid gap-x-6 gap-y-1 text-sm text-slate-800 sm:grid-cols-2">
                  {day.bullets.map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-emerald-500">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {day.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-slate-600 sm:text-sm">
          <span className="font-semibold text-pink-700">Note:</span> This rundown is an estimation
          only. The final schedule will be updated closer to the program date. Please check back
          regularly for the most accurate information.
        </p>
      </div>
    </section>
  );
}
