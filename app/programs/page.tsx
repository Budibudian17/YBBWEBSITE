import HeroSection from '@/components/ui/HeroSection';
import CurrentProgram from '@/components/programs/CurrentProgram';
import RegistrationTypePrograms from '@/components/programs/registrationTypes';
import ProgramActivities from '@/components/programs/ProgramActivities';
import ProgramSteps from '@/components/programs/ProgramSteps';
import ProgramSchedules from '@/components/programs/ProgramSchedules';
import PreviousProgramsGrid from '@/components/programs/PreviousProgramsGrid';
import AdditionalPrograms from '@/components/programs/AdditionalPrograms';
import MissionVision from '@/components/programs/MissionVision';
import Objectives from '@/components/programs/Objectives';
import Benefits from '@/components/programs/Benefits';
import ProgramFAQ from '@/components/programs/ProgramFAQ';
import FAQ from '@/components/sections/FAQ';
import ProgramsFurtherInformationSection from '@/components/programs/ProgramsFurtherInformation';

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
      <RegistrationTypePrograms />
      <section className="h-10" />
      <ProgramActivities />
      <ProgramSteps />
      <ProgramSchedules />
      <PreviousProgramsGrid />
      {/* <MissionVision />
      <Objectives />
      <Benefits /> */}
      <AdditionalPrograms />
      <FAQ />
      <ProgramsFurtherInformationSection />
    </main>
  );
}
