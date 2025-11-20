import { Users, Globe2, Smile, Award } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

// Section angka-angka impact di halaman Testimonials
export default function TestimonialsImpact() {
  return (
    <section className="px-6 pb-12 sm:pb-14 md:pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Our Impact" title="Join Our Growing Community" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl bg-white p-5 text-center shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white transition group-hover:bg-pink-700">
              <Users className="h-5 w-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-900">4,000+</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">Alumni Worldwide</p>
          </div>
          <div className="group rounded-2xl bg-white p-5 text-center shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white transition group-hover:bg-pink-700">
              <Globe2 className="h-5 w-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-900">120+</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">Countries Represented</p>
          </div>
          <div className="group rounded-2xl bg-white p-5 text-center shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white transition group-hover:bg-pink-700">
              <Smile className="h-5 w-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-900">95%</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">Satisfaction Rate</p>
          </div>
          <div className="group rounded-2xl bg-white p-5 text-center shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white transition group-hover:bg-pink-700">
              <Award className="h-5 w-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-900">500+</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-600">Social Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
