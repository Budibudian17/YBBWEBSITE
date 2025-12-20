import SectionHeader from '@/components/ui/SectionHeader';

export default function FullyFundedPaymentSection() {
  return (
    <section className="bg-slate-50/60 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader eyebrow="Payment Information" title="Registration & Program Fees" />
          <p className="mx-auto -mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Review the registration and program fees for the Fully Funded scheme. Early stage fees
            offer more affordable options for delegates who complete their registration sooner.
          </p>
        </div>

        {/* Fee cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Registration Fee */}
          <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80">
            <h3 className="text-lg font-semibold text-blue-950 sm:text-xl">Registration Fee</h3>
            <p className="mt-1 text-sm font-semibold text-pink-600 sm:text-base">
              25 USD / IDR 415.000
            </p>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Covers the processing of your application and administrative support.
            </p>

            <div className="mt-5 space-y-3 text-sm text-slate-800 sm:text-base">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-600">
                    Early Stage
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-950 sm:text-base">10 USD</p>
                  <p className="text-xs text-slate-600">Rp 167.500</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                    Last Stage
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-950 sm:text-base">15 USD</p>
                  <p className="text-xs text-slate-600">Rp 247.500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Program Fee */}
          <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80">
            <h3 className="text-lg font-semibold text-blue-950 sm:text-xl">Program Fee</h3>
            <p className="mt-1 text-sm font-semibold text-pink-600 sm:text-base">
              660 USD / IDR 11.500.000
            </p>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Covers participation in the Japan Youth Summit program.
            </p>

            <div className="mt-5 space-y-3 text-sm text-slate-800 sm:text-base">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-600">
                    Early Stage
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-950 sm:text-base">10 USD</p>
                  <p className="text-xs text-slate-600">Rp 167.500</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                    Last Stage
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-950 sm:text-base">15 USD</p>
                  <p className="text-xs text-slate-600">Rp 247.500</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note + CTA */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-600 sm:text-sm">
            <span className="font-semibold">*All fees are non-refundable.</span>
          </p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
