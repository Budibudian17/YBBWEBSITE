import { Globe2, Sparkles, Megaphone, HeartHandshake, Network } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

// Section: Why Partner With Us? — dipisah biar rapi & reusable
export default function WhyPartnerSection() {
  return (
    <section className="px-6 py-12 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why Partner With Us?" title="Grow impact together with us" />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Kiri: fitur 2x2 */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
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
          </div>
          {/* Kanan: CTA mandiri */}
          <div className="flex items-center justify-center">
            <div className={jysSectionTheme.partnersWhy.ctaCard}>
              <div className={jysSectionTheme.partnersWhy.ctaIconCircle}>
                <Network className="h-8 w-8" />
              </div>
              <h3 className="text-center text-xl font-extrabold text-blue-900">Join Our Network</h3>
              <p className="mt-1 text-center text-sm text-slate-600">Become a partner today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
