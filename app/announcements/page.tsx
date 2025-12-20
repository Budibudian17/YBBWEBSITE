import AnnouncementsHero from '@/components/announcements/AnnouncementsHero';
import AnnouncementsGrid from '@/components/announcements/AnnouncementsGrid';
import { announcementsData } from '@/data/announcements';

export default function AnnouncementsPage() {
  return (
    <main className="relative">
      {/* Hero slider — highlight beberapa berita terbaru */}
      <AnnouncementsHero />

      {/* Section pengumuman — dipisah ke komponen biar clean */}
      <section id="announcements">
        <AnnouncementsGrid items={announcementsData} />
      </section>
    </main>
  );
}
