import { Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

// Section: Partnership Opportunities — gaya Program Highlights
export default function PartnershipOpportunitiesSection() {
  return (
    <section className="relative w-full py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="Opportunities" title="Partnership Opportunities" />
        <p className="mx-auto -mt-6 mb-8 max-w-2xl text-center text-sm text-slate-600 sm:mb-10">
          Join us in creating lasting impact through strategic partnerships.
        </p>
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Partner Community — termurah, di kiri */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-t from-blue-50 to-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-2 ring-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]">
            <div className="p-5">
              <h3 className="text-xl font-extrabold text-blue-900">Community Partner</h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Ideal for universities, NGOs, and communities contributing services or in-kind
                support.
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Start From:
              </p>
              <p className="text-sm font-semibold text-slate-700">Flexible (in-kind & services)</p>
            </div>
            <ul className="flex flex-1 flex-col p-5 pt-0">
              {[
                'Website recognition',
                'Social media mentions',
                'Networking opportunities',
                'Partnership certificate',
                'Volunteer opportunities',
              ].map((label, idx, arr) => (
                <li
                  key={idx}
                  className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${
                    idx !== arr.length - 1 ? 'border-b border-slate-200' : ''
                  }`}
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-blue-950">{label}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 pt-0">
              <a
                href="#apply"
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                Become a Community Partner
              </a>
            </div>
          </div>

          {/* Partner Silver */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-t from-slate-50 to-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-2 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]">
            <div className="p-5">
              <h3 className="text-xl font-extrabold text-blue-900">Silver Partner</h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Solid visibility and engagement for organizations starting strategic collaboration.
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Start From:
              </p>
              <p className="text-sm font-semibold text-slate-700">$10,000 - $24,999</p>
            </div>
            <ul className="flex flex-1 flex-col p-5 pt-0">
              {[
                'Logo placement on website',
                'Newsletter mentions',
                'Event participation opportunities',
                'Impact reports',
                'Certificate of partnership',
              ].map((label, idx, arr) => (
                <li
                  key={idx}
                  className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${
                    idx !== arr.length - 1 ? 'border-b border-slate-200' : ''
                  }`}
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-blue-950">{label}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 pt-0">
              <a
                href="#apply"
                className="inline-flex w-full items-center justify-center rounded-md bg-slate-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2"
              >
                Become a Silver Partner
              </a>
            </div>
          </div>

          {/* Partner Gold */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-t from-amber-50 to-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-2 ring-amber-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)]">
            <div className="p-5">
              <h3 className="text-xl font-extrabold text-blue-900">Gold Partner</h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Strong brand exposure and collaboration across main program activities.
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Start From:
              </p>
              <p className="text-sm font-semibold text-slate-700">$25,000 - $49,999</p>
            </div>
            <ul className="flex flex-1 flex-col p-5 pt-0">
              {[
                'Prominent logo placement',
                'Workshop sponsorship opportunities',
                'Alumni network access',
                'Quarterly impact reports',
                'Social media recognition',
              ].map((label, idx, arr) => (
                <li
                  key={idx}
                  className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${
                    idx !== arr.length - 1 ? 'border-b border-slate-200' : ''
                  }`}
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-blue-950">{label}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 pt-0">
              <a
                href="#apply"
                className="inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
              >
                Become a Gold Partner
              </a>
            </div>
          </div>

          {/* Partner Diamond — paling premium, di kanan */}
          <div
            className={`${jysSectionTheme.partnersOpportunities.diamondCard} bg-gradient-to-t from-pink-50 to-white`}
          >
            <div className="p-5">
              <h3 className="text-xl font-extrabold text-blue-900">Diamond Partner</h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Maximum exposure, custom activations, and deep, long-term collaboration.
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Start From:
              </p>
              <p className="text-sm font-semibold text-slate-700">$50,000+</p>
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
                <li
                  key={idx}
                  className={`flex items-center gap-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${idx !== 5 ? 'border-b border-slate-200' : ''}`}
                >
                  <span className={jysSectionTheme.partnersOpportunities.checkCircle}>
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-blue-950">{label}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 pt-0">
              <a href="#apply" className={jysSectionTheme.partnersOpportunities.diamondCta}>
                Become a Diamond Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
