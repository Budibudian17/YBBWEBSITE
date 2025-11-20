import HeroSection from '@/components/ui/HeroSection';
import AnnouncementsGrid from '@/components/announcements/AnnouncementsGrid';
import { announcementsData } from '@/data/announcements';

export default function AnnouncementsPage() {
  return (
    <main className="relative">
      {/* Hero — pakai komponen reusable biar rapi */}
      <HeroSection
        title="Announcements"
        subtitle="Latest updates, deadlines, and official notices from YBB & JYS."
        bgImage="/img/bgprogramoverview.png"
        breadcrumb={[
          { href: '/', label: 'Home' },
          { href: '/announcements', label: 'Announcements' },
        ]}
      />

      {/* Section pengumuman — dipisah ke komponen biar clean */}
      <AnnouncementsGrid items={announcementsData} />
    </main>
  );
}

