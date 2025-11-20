import { MapPin, Calendar, Check, CreditCard } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

// Section: Choose Your Registration Type — dipisah biar rapi
export default function RegistrationTypesSection() {
  return (
    <section className="relative w-full bg-[#ffffff72] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Choose Your Registration Type"
          title="Select a registration option"
        />
        <p className="mx-auto -mt-6 mb-8 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
          Pick the path that fits you best. You can switch later during the application process.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Fully Funded */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
            <div className="border-b border-slate-200 bg-gradient-to-b from-blue-50/70 to-transparent p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-blue-900">Fully Funded</h3>
                    <p className="text-sm text-slate-600">Reimbursement System</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-700">
                  Not Available
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-pink-600">$10.00</span>
                <span className="text-xs font-medium text-slate-500">Registration Fee</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                <Calendar className="h-4 w-4 text-pink-600" />
                <span className="font-semibold text-slate-700">Registration Period:</span>
                <span>Aug 01 – Sep 30, 2025</span>
              </div>
            </div>
            <div className="flex-1 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Requirements
              </p>
              <ul className="mt-2 divide-y divide-slate-200 rounded-xl ring-1 ring-slate-200">
                {[
                  'Complete registration form and documentation',
                  'Submit detailed essays and applications',
                  'Participate in interviews and evaluations',
                ].map((label, idx) => (
                  <li key={idx} className="flex items-center gap-3 px-4 py-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-blue-950">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Benefits (If Selected)
              </p>
              <ul className="mt-2 divide-y divide-slate-200 rounded-xl ring-1 ring-slate-200">
                {[
                  'Full reimbursement of all payments',
                  'Enhanced program recognition',
                  'Payment: Pay scheduled batches initially, get full refund if selected',
                ].map((label, idx) => (
                  <li key={idx} className="flex items-center gap-3 px-4 py-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-blue-950">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 pt-0">
              <button
                type="button"
                aria-disabled
                className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-500"
              >
                Registration Closed
              </button>
            </div>
          </div>

          {/* Self Funded */}
          <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(2,6,23,0.12)] hover:ring-pink-200">
            <div className="border-b border-slate-200 bg-gradient-to-b from-blue-50/70 to-transparent p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white">
                    <CreditCard className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-blue-900">Self Funded</h3>
                    <p className="text-sm text-slate-600">Standard Registration</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-2 py-1 text-[11px] font-semibold text-green-700">
                  Registration Open
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-pink-600">$15.00</span>
                <span className="text-xs font-medium text-slate-500">Registration Fee</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                <Calendar className="h-4 w-4 text-pink-600" />
                <span className="font-semibold text-slate-700">Registration Period:</span>
                <span>Sep 01 – Dec 31, 2025</span>
              </div>
            </div>
            <div className="flex-1 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Requirements
              </p>
              <ul className="mt-2 divide-y divide-slate-200 rounded-xl ring-1 ring-slate-200">
                {[
                  'Complete registration form and documentation',
                  'Submit required documents on time',
                  'Pay fees according to scheduled payment batches',
                ].map((label, idx) => (
                  <li key={idx} className="flex items-center gap-3 px-4 py-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-blue-950">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Benefits
              </p>
              <ul className="mt-2 divide-y divide-slate-200 rounded-xl ring-1 ring-slate-200">
                {[
                  'Guaranteed program participation',
                  'Faster application processing',
                  'Payment: You pay all scheduled fee batches yourself',
                ].map((label, idx) => (
                  <li key={idx} className="flex items-center gap-3 px-4 py-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-blue-950">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 pt-0">
              <a
                href="#apply-form"
                className="inline-flex items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700"
              >
                Choose Self Funded
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
