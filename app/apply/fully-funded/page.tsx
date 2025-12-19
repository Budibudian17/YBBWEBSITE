import HeroSection from '@/components/ui/HeroSection';
import FullyFundedOverviewSection from '@/components/apply/FullyFundedOverview';
import FullyFundedRequirementsSection from '@/components/apply/FullyFundedRequirements';

export default function FullyFundedPage() {
  return (
    <main className="relative">
      <HeroSection
        title="Fully Funded Registration"
        subtitle="Osaka, Japan 2026 | 11 May - 15 May"
        bgImage="/img/bgprogramoverview.png"
        breadcrumb={[
          { href: '/', label: 'Home' },
          { href: '/apply', label: 'Apply' },
          { href: '/apply/fully-funded', label: 'Fully Funded' },
        ]}
      />
      <FullyFundedOverviewSection />
      <FullyFundedRequirementsSection />
    </main>
  );
}
