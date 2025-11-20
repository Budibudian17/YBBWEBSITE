import Image from 'next/image';
import { Gem, Trophy, Medal } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

// Section: Sponsor Tiers — kartu detail
export default function SponsorTiersSection() {
  return (
    <section className="bg-[#eef5ff] px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Our Sponsors" title="Sponsor Tiers" />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Detail Diamond */}
          <a
            href="/partners/global-innovation-foundation"
            className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(2,6,23,0.08)] ring-2 ring-pink-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-pink-600 text-white">
                <Gem className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-pink-600">Diamond Sponsor</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/img/IYSlogo.png" alt="Global Innovation Foundation logo" width={36} height={36} sizes="36px" className="h-9 w-9 rounded bg-white object-contain p-1 ring-1 ring-slate-200" />
              <h3 className="text-lg font-extrabold text-blue-900">Global Innovation Foundation</h3>
            </div>
            <p className="mt-1 text-xs text-slate-600">Partner since 2020</p>
            <p className="mt-2 text-sm text-slate-700">Contribution: Primary Program Funding & Strategic Partnership</p>
            <p className="mt-3 text-sm text-slate-700">Leading global foundation supporting youth innovation and entrepreneurship worldwide through comprehensive funding and mentorship programs.</p>
          </a>

          {/* Detail Gold */}
          <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-amber-200/60">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-amber-500/20 text-amber-600 ring-1 ring-amber-200">
                <Trophy className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">Gold Sponsor</span>
            </div>
            <div className="space-y-4">
              <a href="/partners/future-leaders-institute" className="block rounded-xl border border-amber-200 bg-amber-50/30 p-4 transition hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300">
                <div className="flex items-center gap-3">
                  <Image src="/img/KYSlogo.png" alt="Future Leaders Institute logo" width={32} height={32} sizes="32px" className="h-8 w-8 rounded bg-white object-contain p-1 ring-1 ring-amber-200" />
                  <h3 className="text-base font-extrabold text-blue-900">Future Leaders Institute</h3>
                </div>
                <p className="text-xs text-slate-600">Partner since 2021</p>
                <p className="mt-1 text-sm text-slate-700">Scholarship Fund & Training Programs</p>
              </a>
              <a href="/partners/international-development-bank" className="block rounded-xl border border-amber-200 bg-amber-50/30 p-4 transition hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300">
                <div className="flex items-center gap-3">
                  <Image src="/img/MEYSlogo.png" alt="International Development Bank logo" width={32} height={32} sizes="32px" className="h-8 w-8 rounded bg-white object-contain p-1 ring-1 ring-amber-200" />
                  <h3 className="text-base font-extrabold text-blue-900">International Development Bank</h3>
                </div>
                <p className="text-xs text-slate-600">Partner since 2021</p>
                <p className="mt-1 text-sm text-slate-700">Workshop Facilities & Technology Infrastructure</p>
              </a>
            </div>
          </div>

          {/* Detail Silver */}
          <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200">
                <Medal className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">Silver Sponsors</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="/partners/techcorp-solutions" className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300">
                <div className="flex items-center gap-3">
                  <Image src="/img/WYSlogo.png" alt="TechCorp Solutions logo" width={28} height={28} sizes="28px" className="h-7 w-7 rounded bg-white object-contain p-1 ring-1 ring-slate-200" />
                  <p className="font-semibold text-blue-900">TechCorp Solutions</p>
                </div>
                <p className="text-sm text-slate-700">Technology Support</p>
              </a>
              <a href="/partners/education-partners-ltd" className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300">
                <div className="flex items-center gap-3">
                  <Image src="/img/YAFlogo.png" alt="Education Partners Ltd logo" width={28} height={28} sizes="28px" className="h-7 w-7 rounded bg-white object-contain p-1 ring-1 ring-slate-200" />
                  <p className="font-semibold text-blue-900">Education Partners Ltd</p>
                </div>
                <p className="text-sm text-slate-700">Educational Resources</p>
              </a>
              <a href="/partners/youth-development-network" className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <Image src="/img/jyslogosolo.png" alt="Youth Development Network logo" width={28} height={28} sizes="28px" className="h-7 w-7 rounded bg-white object-contain p-1 ring-1 ring-slate-200" />
                  <p className="font-semibold text-blue-900">Youth Development Network</p>
                </div>
                <p className="text-sm text-slate-700">Networking & Mentorship</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
