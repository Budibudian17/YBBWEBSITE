import HeroSection from '@/components/ui/HeroSection';
import WhyPartnerSection from '@/components/partners/WhyPartner';
import SponsorTiersSection from '@/components/partners/SponsorTiers';
import CommunityPartnersSection from '@/components/partners/CommunityPartners';
import PartnershipOpportunitiesSection from '@/components/partners/PartnershipOpportunities';
import PartnershipImpactSection from '@/components/partners/PartnershipImpact';

export default function PartnersSponsorsPage() {
  return (
    <main className="relative">
      {/* Hero — pakai komponen reusable */}
      <HeroSection
        title="Partners & Sponsors"
        subtitle="Collaborating to empower youth leadership worldwide."
        bgImage="/img/bgprogramoverview.png"
        breadcrumb={[
          { href: '/', label: 'Home' },
          { href: '/partners', label: 'Partners & Sponsors' },
        ]}
      />

      <WhyPartnerSection />

      <SponsorTiersSection />

      <CommunityPartnersSection />

      <PartnershipOpportunitiesSection />

      <PartnershipImpactSection />
    </main>
  );
}
