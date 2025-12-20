import Image from 'next/image';
import { CreditCard, Globe2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FullyFundedPaymentMethodsSection() {
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            eyebrow="Payment Methods"
            title="Make payment with our supported methods of payment."
          />
          <p className="mx-auto -mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Choose the most convenient option based on your location. Payment details will also be
            provided in your official registration guideline.
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Payment for Indonesia Participants */}
          <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50">
                <CreditCard className="h-4 w-4 text-pink-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-blue-950 sm:text-lg">
                  Payment for Indonesia Participants
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">Transfer via Indonesian banks.</p>
              </div>
            </div>

            {/* Logo/slot bank */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                { name: 'BCA', src: '/img/bca-logo.png' },
                { name: 'BNI', src: '/img/bni-logo.png' },
                { name: 'BRI', src: '/img/bri-logo.png' },
                { name: 'Mandiri', src: '/img/mandiri-logo.png' },
              ].map(bank => (
                <div
                  key={bank.name}
                  className="flex h-16 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200"
                >
                  <Image
                    src={bank.src}
                    alt={`${bank.name} logo`}
                    width={140}
                    height={56}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Payment for International Participants Only */}
          <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                <Globe2 className="h-4 w-4 text-blue-700" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-blue-950 sm:text-lg">
                  Payment for International Participants Only
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">Pay securely via PayPal.</p>
              </div>
            </div>

            <div className="mt-5 space-y-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Image
                      src="/img/paypal-logo.png"
                      alt="PayPal logo"
                      width={48}
                      height={48}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-blue-950 sm:text-base">PayPal</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 sm:text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">PayPal ID</span>
                  <span className="font-semibold text-blue-950">@YBBadmn</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">PayPal Mail</span>
                  <span className="font-semibold text-blue-950">ybb.admn@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notes below cards */}
        <div className="mt-4 grid gap-6 text-xs leading-relaxed text-slate-600 sm:grid-cols-2 sm:text-sm">
          <p>
            Please note that your participation in the Japan Youth Summit will be officially
            confirmed after payment of the registration fee. Please ensure you complete this step
            after submitting the registration form.
          </p>
          <p>
            All payment procedures are explained in the "Paying Registration Fees" section of this
            guide.
          </p>
        </div>
      </div>
    </section>
  );
}
