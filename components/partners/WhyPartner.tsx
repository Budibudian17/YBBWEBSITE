import { Globe2, Sparkles, Megaphone, HeartHandshake, Network } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

// Section: Why Partner With Us? — dipisah biar rapi & reusable
export default function WhyPartnerSection() {
  return (
    <section className="px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why Partner With Us?" title="Grow impact together with us" />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Kiri: fitur 2x2 */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
                <div className="mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-extrabold text-blue-900">Global Reach</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">Connect with 4,000+ young leaders from 120+ countries</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
                <div className="mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-base font-extrabold text-blue-900">Innovation Focus</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">Support cutting-edge projects and social impact initiatives</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
                <div className="mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white">
                  <Megaphone className="h-5 w-5" />
                </div>
                <h3 className="text-base font-extrabold text-blue-900">Brand Visibility</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">Enhance your brand presence among future leaders</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
                <div className="mb-2 grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h3 className="text-base font-extrabold text-blue-900">Social Impact</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">Make a lasting difference in youth development worldwide</p>
              </div>
            </div>
          </div>
          {/* Kanan: CTA mandiri */}
          <div className="flex items-center justify-center">
            <div className="relative flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl bg-[url('/img/bgourprogram.png')] bg-cover bg-center p-10 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-pink-100 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
              <div className="mb-3 grid h-16 w-16 place-items-center rounded-full bg-pink-600 text-white shadow">
                <Network className="h-8 w-8" />
              </div>
              <h3 className="text-center text-xl font-extrabold text-blue-900">Join Our Network</h3>
              <p className="mt-1 text-center text-sm text-slate-600">Become a partner today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
