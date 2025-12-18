import HeroSection from '@/components/ui/HeroSection';
import { Check, AlertTriangle } from 'lucide-react';
import RegistrationTypesSection from '@/components/apply/RegistrationTypes';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

export default function ApplyPage() {
  return (
    <main className="relative">
      <HeroSection
        title="Apply to Join"
        subtitle="Choose your registration type and start your journey with our international youth programs."
        bgImage="/img/bgprogramoverview.png"
        breadcrumb={[
          { href: '/', label: 'Home' },
          { href: '/apply', label: 'Apply' },
        ]}
      />

      <RegistrationTypesSection />

      {/* Info Penting (Important Information) */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className={jysSectionTheme.applyImportant.card}>
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700 ring-1 ring-amber-200">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold text-blue-950">Important Information</h3>
                <span className={jysSectionTheme.applyImportant.chip}>Please read</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-blue-950/90">
                <li className="flex items-start gap-2">
                  <span className={jysSectionTheme.applyImportant.bulletDot} /> All registration
                  fees are non-refundable
                </li>
                <li className="flex items-start gap-2">
                  <span className={jysSectionTheme.applyImportant.bulletDot} /> Full payment is
                  required upon submission
                </li>
                <li className="flex items-start gap-2">
                  <span className={jysSectionTheme.applyImportant.bulletDot} /> Selected
                  participants will receive confirmation within 2 weeks
                </li>
                <li className="flex items-start gap-2">
                  <span className={jysSectionTheme.applyImportant.bulletDot} /> Additional
                  documentation may be required for verification
                </li>
              </ul>
              <div className="mt-4 text-xs text-pink-800/80">
                By applying, you agree to our{' '}
                <a href="#terms" className={jysSectionTheme.applyImportant.legalLink}>
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" className={jysSectionTheme.applyImportant.legalLink}>
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apa saja yang termasuk (What's Included) */}
      <section className="relative w-full bg-[#ffffff72] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What's Included"
            title="Everything you need for a transformative experience"
          />
          <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              '4-day intensive program in Osaka, Japan',
              'Global networking opportunities',
              'Leadership development workshops',
              'Cultural exchange activities',
              'Certificate of participation',
              'Award opportunities',
            ].map((label, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200"
              >
                <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-pink-600 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-blue-950">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
