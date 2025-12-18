import { Users, Globe2, Smile, Award } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

// Section angka-angka impact di halaman Testimonials
export default function TestimonialsImpact() {
  return (
    <section className="px-6 pb-12 sm:pb-14 md:pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Our Impact" title="Join Our Growing Community" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className={jysSectionTheme.programsTestimonialsImpact.card}>
            <div className={jysSectionTheme.programsTestimonialsImpact.iconCircle}>
              <Users className="h-5 w-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-900">4,000+</p>
            <p className={jysSectionTheme.programsTestimonialsImpact.label}>Alumni Worldwide</p>
          </div>
          <div className={jysSectionTheme.programsTestimonialsImpact.card}>
            <div className={jysSectionTheme.programsTestimonialsImpact.iconCircle}>
              <Globe2 className="h-5 w-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-900">120+</p>
            <p className={jysSectionTheme.programsTestimonialsImpact.label}>
              Countries Represented
            </p>
          </div>
          <div className={jysSectionTheme.programsTestimonialsImpact.card}>
            <div className={jysSectionTheme.programsTestimonialsImpact.iconCircle}>
              <Smile className="h-5 w-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-900">95%</p>
            <p className={jysSectionTheme.programsTestimonialsImpact.label}>Satisfaction Rate</p>
          </div>
          <div className={jysSectionTheme.programsTestimonialsImpact.card}>
            <div className={jysSectionTheme.programsTestimonialsImpact.iconCircle}>
              <Award className="h-5 w-5" />
            </div>
            <p className="text-2xl font-extrabold text-blue-900">500+</p>
            <p className={jysSectionTheme.programsTestimonialsImpact.label}>Social Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
