import { Globe2, Sparkles, Megaphone, HeartHandshake, Network } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

// Section: Why Partner With Us? — dipisah biar rapi & reusable
export default function WhyPartnerSection() {
  return (
    <section className="px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why Partner With Us?" title="Grow impact together with us" />
        {/* Fitur utama: satu baris grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className={jysSectionTheme.partnersWhy.featureCard}>
            <div className={jysSectionTheme.partnersWhy.featureIconCircle}>
              <Globe2 className="h-5 w-5" />
            </div>
            <h3 className="text-base font-extrabold text-blue-900">Global Reach</h3>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              Connect with 4,000+ young leaders from 120+ countries
            </p>
          </div>
          <div className={jysSectionTheme.partnersWhy.featureCard}>
            <div className={jysSectionTheme.partnersWhy.featureIconCircle}>
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-base font-extrabold text-blue-900">Innovation Focus</h3>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              Support cutting-edge projects and social impact initiatives
            </p>
          </div>
          <div className={jysSectionTheme.partnersWhy.featureCard}>
            <div className={jysSectionTheme.partnersWhy.featureIconCircle}>
              <Megaphone className="h-5 w-5" />
            </div>
            <h3 className="text-base font-extrabold text-blue-900">Brand Visibility</h3>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              Enhance your brand presence among future leaders
            </p>
          </div>
          <div className={jysSectionTheme.partnersWhy.featureCard}>
            <div className={jysSectionTheme.partnersWhy.featureIconCircle}>
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="text-base font-extrabold text-blue-900">Social Impact</h3>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              Make a lasting difference in youth development worldwide
            </p>
          </div>
        </div>

        {/* CTA utama di bawah card */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Join Our Network
          </button>
        </div>
      </div>
    </section>
  );
}
