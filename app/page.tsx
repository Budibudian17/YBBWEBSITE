import Hero from '@/components/sections/Hero';
import InfoStrip from '@/components/sections/InfoStrip';
import AboutProgram from '@/components/sections/AboutProgram';
import ProgramHighlights from '@/components/sections/ProgramHighlights';
import VideoSection from '@/components/sections/VideoSection';
import PhotoGallery from '@/components/sections/PhotoGallery';
import RecognitionAwards from '@/components/sections/AwardeeDelegate';
import Recognition from '@/components/sections/Recognition';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoStrip />
      <AboutProgram />
      <ProgramHighlights />
      <VideoSection />
      <PhotoGallery mode="home" />
      <RecognitionAwards />
      <Recognition />
      <Testimonials />
      <FAQ />
    </main>
  );
}
