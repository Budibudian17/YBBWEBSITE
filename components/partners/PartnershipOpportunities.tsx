import { Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

// Section: Partnership Opportunities — gaya Program Highlights
export default function PartnershipOpportunitiesSection() {
  return (
    <section className="relative w-full bg-[#eef5ff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="Opportunities" title="Partnership Opportunities" />
        <p className="mx-auto -mt-6 mb-8 max-w-2xl text-center text-sm text-slate-600 sm:mb-10">Join us in creating lasting impact through strategic partnerships.</p>
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Partner Diamond */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-2 ring-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]">
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-blue-900">Diamond Partner</h3>
                <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-pink-700 ring-1 ring-pink-200">Most Premium</span>
              </div>
              <p className="text-xs font-semibold text-slate-600">$50,000+</p>
            </div>
            <ul className="flex flex-1 flex-col p-5 pt-0">
              {[
                'Premier logo placement on all materials',
                'Speaking opportunities at main events',
                'Dedicated networking sessions',
                'Annual partnership report',
                'Direct access to alumni network',
                'Custom partnership activities',
              ].map((label, idx) => (
                <li key={idx} className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${idx !== 5 ? 'border-b border-slate-200' : ''}`}>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-blue-950">{label}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 pt-0">
              <a href="#apply" className="inline-flex w-full items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Become a Diamond Partner</a>
            </div>
          </div>
          {/* Partner Gold */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-2 ring-amber-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]">
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-blue-900">Gold Partner</h3>
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700 ring-1 ring-amber-200">Popular</span>
              </div>
              <p className="text-xs font-semibold text-slate-600">$25,000 - $49,999</p>
            </div>
            <ul className="flex flex-1 flex-col p-5 pt-0">
              {[
                'Prominent logo placement',
                'Workshop sponsorship opportunities',
                'Alumni network access',
                'Quarterly impact reports',
                'Social media recognition',
              ].map((label, idx, arr) => (
                <li key={idx} className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${idx !== arr.length - 1 ? 'border-b border-slate-200' : ''}`}>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-blue-950">{label}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 pt-0">
              <a href="#apply" className="inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2">Become a Gold Partner</a>
            </div>
          </div>
          {/* Partner Silver */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-2 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]">
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-blue-900">Silver Partner</h3>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700 ring-1 ring-slate-300">Essentials</span>
              </div>
              <p className="text-xs font-semibold text-slate-600">$10,000 - $24,999</p>
            </div>
            <ul className="flex flex-1 flex-col p-5 pt-0">
              {[
                'Logo placement on website',
                'Newsletter mentions',
                'Event participation opportunities',
                'Impact reports',
                'Certificate of partnership',
              ].map((label, idx, arr) => (
                <li key={idx} className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${idx !== arr.length - 1 ? 'border-b border-slate-200' : ''}`}>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-blue-950">{label}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 pt-0">
              <a href="#apply" className="inline-flex w-full items-center justify-center rounded-md bg-slate-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2">Become a Silver Partner</a>
            </div>
          </div>
          {/* Partner Komunitas */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-2 ring-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]">
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-blue-900">Community Partner</h3>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-blue-200">Services</span>
              </div>
              <p className="text-xs font-semibold text-slate-600">Flexible</p>
            </div>
            <ul className="flex flex-1 flex-col p-5 pt-0">
              {[
                'Website recognition',
                'Social media mentions',
                'Networking opportunities',
                'Partnership certificate',
                'Volunteer opportunities',
              ].map((label, idx, arr) => (
                <li key={idx} className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${idx !== arr.length - 1 ? 'border-b border-slate-200' : ''}`}>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-blue-950">{label}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 pt-0">
              <a href="#apply" className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">Become a Community Partner</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
