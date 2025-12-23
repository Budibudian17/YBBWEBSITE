import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Choose Your Partnership',
    description:
      "Select a partnership package that aligns with your organization's goals and values.",
  },
  {
    number: '02',
    title: 'Align & Confirm',
    description:
      'We discuss objectives, scope, and collaboration details to ensure a shared vision.',
  },
  {
    number: '03',
    title: 'Activate the Partnership',
    description:
      'Partnership activities are implemented through YBB programs, events, and campaigns.',
  },
  {
    number: '04',
    title: 'Track Impact & Growth',
    description:
      'Receive regular updates, impact reports, and insights for long-term collaboration.',
  },
];

export default function PartnershipJourneySection() {
  return (
    <section className="px-6 py-14 sm:py-16 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="How It Works" title="Start Your Partnership Journey with us!" />

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(step => (
            <div key={step.number} className="flex flex-col gap-2">
              <span className="text-4xl font-extrabold tracking-tight text-pink-600 sm:text-5xl">
                {step.number}
              </span>
              <h3 className="text-base font-extrabold text-blue-900 sm:text-lg">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
