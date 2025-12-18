import SectionHeader from '@/components/ui/SectionHeader';
import {
  Calendar,
  Check,
  CreditCard,
  MapPin,
  Users,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { jysSectionTheme } from '@/lib/theme/jys-components';

export default function RegistrationTypePrograms() {
  return (
    <section className={jysSectionTheme.homeRegistration.sectionWrapper}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="Registration" title="Choose Your Registration Type" />
        <p className={jysSectionTheme.homeRegistration.introText}>
          Select the registration scheme that best matches your needs, then review the important
          information about fees, selection, and guarantees.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]">
          {/* Kiri: kartu tipe registrasi (replikasi dari Registration Types di homepage) */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Self Funded */}
            <div className={jysSectionTheme.applyRegistrationTypes.card}>
              <div className="border-b border-slate-200 bg-gradient-to-b from-blue-50/70 to-transparent p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={jysSectionTheme.applyRegistrationTypes.iconCircle}>
                      <CreditCard className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold text-blue-900">Self Funded</h3>
                      <p className="text-xs font-medium text-slate-600">Registration</p>
                    </div>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">
                    Regist Open
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className={jysSectionTheme.applyRegistrationTypes.priceText}>$15.00</span>
                  <span className="text-xs font-medium text-slate-500">Registration Fee</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                  <Calendar className={jysSectionTheme.applyRegistrationTypes.calendarIcon} />
                  <span className="font-semibold text-slate-700">Registration Period:</span>
                  <span>Sep 01 – Dec 31, 2025</span>
                </div>
              </div>
              <div className="flex-1 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Requirements
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {[
                    'Complete registration form and documentation',
                    'Submit required documents on time',
                    'Pay fees according to scheduled payment batches',
                  ].map((label, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`${jysSectionTheme.applyRegistrationTypes.bulletCircle} shrink-0`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="font-medium text-blue-950">{label}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Benefit
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {[
                    'Guaranteed program participation',
                    'Faster application processing',
                    'You pay all scheduled fee batches yourself',
                  ].map((label, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`${jysSectionTheme.applyRegistrationTypes.bulletCircle} shrink-0`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="font-medium text-blue-950">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 pt-0">
                <div className="flex justify-center">
                  <a
                    href="/apply#self-funded"
                    className={`${jysSectionTheme.applyRegistrationTypes.ctaButton} w-full max-w-xs justify-center py-3 text-sm`}
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>

            {/* Fully Funded */}
            <div className={jysSectionTheme.applyRegistrationTypes.card}>
              <div className="border-b border-slate-200 bg-gradient-to-b from-blue-50/70 to-transparent p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className={jysSectionTheme.applyRegistrationTypes.iconCircle}>
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold text-blue-900">Fully Funded</h3>
                      <p className="text-xs font-medium text-slate-600">Reimbursement System</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-700">
                    Not Available
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className={jysSectionTheme.applyRegistrationTypes.priceText}>$10.00</span>
                  <span className="text-xs font-medium text-slate-500">Registration Fee</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                  <Calendar className={jysSectionTheme.applyRegistrationTypes.calendarIcon} />
                  <span className="font-semibold text-slate-700">Registration Period:</span>
                  <span>Aug 01 – Sep 30, 2025</span>
                </div>
              </div>
              <div className="flex-1 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Requirements
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {[
                    'Complete registration form and documentation',
                    'Submit detailed essays and applications',
                    'Participate in interviews and evaluations',
                  ].map((label, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`${jysSectionTheme.applyRegistrationTypes.bulletCircle} shrink-0`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="font-medium text-blue-950">{label}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Benefit (If Selected)
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  {[
                    'Full reimbursement of all payments',
                    'Enhanced program recognition',
                    'Access to exclusive fully funded activities',
                  ].map((label, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`${jysSectionTheme.applyRegistrationTypes.bulletCircle} shrink-0`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="font-medium text-blue-950">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 pt-0">
                <div className="flex justify-center">
                  <button
                    type="button"
                    aria-disabled
                    className="inline-flex w-full max-w-xs cursor-not-allowed items-center justify-center rounded-md bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-500"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: informasi tambahan seputar registrasi */}
          <div className="flex h-full items-stretch">
            <div className="flex w-full flex-col justify-between rounded-3xl bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80 sm:p-7">
              <div>
                <h3 className="text-lg font-extrabold text-blue-950">Registration Information</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Make sure you understand the key details about payments, selection, and guarantees
                  before choosing your registration type.
                </p>

                <div className="mt-5 space-y-4 text-sm text-slate-800">
                  <div className="flex gap-3">
                    <span className="mt-1 text-pink-600">
                      <Calendar className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-blue-950">Payment Schedule</p>
                      <p className="text-xs text-slate-600">
                        Fees are divided into several batches. Please follow the timeline stated in
                        the official guidebook and payment instructions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 text-pink-600">
                      <Users className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-blue-950">Selection Quota</p>
                      <p className="text-xs text-slate-600">
                        Seats are limited for each registration type. Successful applicants will be
                        contacted via email according to the announced selection timeline.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 text-pink-600">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-blue-950">Self Funded Guarantee</p>
                      <p className="text-xs text-slate-600">
                        Self funded participants who complete all payments on time are guaranteed
                        participation in the program, following the stated terms and conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 text-pink-600">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-blue-950">Fully Funded Process</p>
                      <p className="text-xs text-slate-600">
                        Fully funded slots, if available, use a reimbursement mechanism. Detailed
                        instructions will be shared only with selected participants.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 text-pink-600">
                      <AlertTriangle className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-blue-950">Important Info</p>
                      <p className="text-xs text-slate-600">
                        Please always refer to the latest guidebook and official announcements from
                        the organizing committee for any updates related to the program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
                For detailed terms and conditions, please read the official guidebook and FAQ on the
                Japan Youth Summit website.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
