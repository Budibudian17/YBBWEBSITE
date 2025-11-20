import SectionHeader from '@/components/ui/SectionHeader';
import { Users, Clock, Award } from 'lucide-react';

export default function StatsSummarySection() {
  return (
    <section className="px-6 py-10 sm:py-12 md:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Program Stats" title="Participation at a glance" />
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-600 text-white">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">Total Participants</p>
                <p className="mt-1 text-2xl font-extrabold text-blue-900">1,250+</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-600 text-white">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">Program Status</p>
                <p className="mt-1 text-2xl font-extrabold text-blue-900">Active</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-600 text-white">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">Program Duration</p>
                <p className="mt-1 text-2xl font-extrabold text-blue-900">4 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
