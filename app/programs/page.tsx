import HeroSection from '@/components/ui/HeroSection';
import CurrentProgram from '@/components/programs/CurrentProgram';
import PreviousPrograms from '@/components/programs/PreviousPrograms';
import AdditionalPrograms from '@/components/programs/AdditionalPrograms';
import MissionVision from '@/components/programs/MissionVision';
import Objectives from '@/components/programs/Objectives';
import Benefits from '@/components/programs/Benefits';

export default function ProgramOverviewPage() {
  return (
    <main className="relative">
      <HeroSection
        title="Program Overview"
        subtitle="Discover comprehensive business training programs designed to empower young entrepreneurs with essential skills and knowledge."
        bgImage="/img/bgprogramoverview.png"
        breadcrumb={[
          { href: '/', label: 'Home' },
          { href: '/programs', label: 'Program Overview' },
        ]}
      />
      <CurrentProgram />
      <PreviousPrograms />
      <MissionVision />
      <Objectives />
      <Benefits />
      <AdditionalPrograms />
    </main>
  );
}
