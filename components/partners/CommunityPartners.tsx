import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

// Section: Community Partners — kartu list partner komunitas
export default function CommunityPartnersSection() {
  return (
    <section className="px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Community Partners" title="Organizations providing in-kind support and collaboration" />
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/partners/local-youth-council" className="group w-[320px] flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] focus:outline-none focus:ring-2 focus:ring-pink-300">
            <Image src="/img/jyslogosolo.png" alt="Local Youth Council logo" width={48} height={48} sizes="48px" className="h-12 w-12 rounded bg-white object-contain p-1.5 ring-1 ring-slate-200" />
            <div>
              <p className="font-extrabold text-blue-900">Local Youth Council</p>
              <span className="mt-1 inline-block rounded-full bg-pink-50 px-2.5 py-0.5 text-xs font-semibold text-pink-700 ring-1 ring-pink-200">Community Partner</span>
            </div>
          </a>
          <a href="/partners/university-alliance" className="group w-[320px] flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] focus:outline-none focus:ring-2 focus:ring-pink-300">
            <Image src="/img/IYSlogo.png" alt="University Alliance logo" width={48} height={48} sizes="48px" className="h-12 w-12 rounded bg-white object-contain p-1.5 ring-1 ring-slate-200" />
            <div>
              <p className="font-extrabold text-blue-900">University Alliance</p>
              <span className="mt-1 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">Academic Partner</span>
            </div>
          </a>
          <a href="/partners/social-impact-hub" className="group w-[320px] flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] focus:outline-none focus:ring-2 focus:ring-pink-300">
            <Image src="/img/KYSlogo.png" alt="Social Impact Hub logo" width={48} height={48} sizes="48px" className="h-12 w-12 rounded bg-white object-contain p-1.5 ring-1 ring-slate-200" />
            <div>
              <p className="font-extrabold text-blue-900">Social Impact Hub</p>
              <span className="mt-1 inline-block rounded-full bg-fuchsia-50 px-2.5 py-0.5 text-xs font-semibold text-fuchsia-700 ring-1 ring-fuchsia-200">Innovation Partner</span>
            </div>
          </a>
          <a href="/partners/media-partners-network" className="group w-[320px] flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] focus:outline-none focus:ring-2 focus:ring-pink-300">
            <Image src="/img/MEYSlogo.png" alt="Media Partners Network logo" width={48} height={48} sizes="48px" className="h-12 w-12 rounded bg-white object-contain p-1.5 ring-1 ring-slate-200" />
            <div>
              <p className="font-extrabold text-blue-900">Media Partners Network</p>
              <span className="mt-1 inline-block rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">Media Partner</span>
            </div>
          </a>
          <a href="/partners/startup-incubators" className="group w-[320px] flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] focus:outline-none focus:ring-2 focus:ring-pink-300">
            <Image src="/img/WYSlogo.png" alt="Startup Incubators logo" width={48} height={48} sizes="48px" className="h-12 w-12 rounded bg-white object-contain p-1.5 ring-1 ring-slate-200" />
            <div>
              <p className="font-extrabold text-blue-900">Startup Incubators</p>
              <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">Business Partner</span>
            </div>
          </a>
          <a href="/partners/cultural-exchange-foundation" className="group w-[320px] flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] focus:outline-none focus:ring-2 focus:ring-pink-300">
            <Image src="/img/YAFlogo.png" alt="Cultural Exchange Foundation logo" width={48} height={48} sizes="48px" className="h-12 w-12 rounded bg-white object-contain p-1.5 ring-1 ring-slate-200" />
            <div>
              <p className="font-extrabold text-blue-900">Cultural Exchange Foundation</p>
              <span className="mt-1 inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-200">Cultural Partner</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
