import { CheckCircle2, CreditCard, Mail, Users, CalendarDays, Flag, Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

interface Step {
  id: number;
  title: string;
  icon:
    | 'registration'
    | 'announcement'
    | 'onboarding'
    | 'payment'
    | 'mentoring'
    | 'funded'
    | 'program';
  lines: string[];
}

const STEPS: Step[] = [
  {
    id: 1,
    title: 'Participant Registration',
    icon: 'registration',
    lines: [
      'Register an account and complete the registration form including payment.',
      'Registration Fee:',
      'Initial Stage: 10 USD / Rp167,500',
      'Final Stage: 15 USD / Rp247,500',
      'Program Fee: 660 USD / Rp11,500,000',
      'First Installment: 330 USD / Rp5,000,000',
      'Second Installment: 400 USD / Rp6,500,000',
    ],
  },
  {
    id: 2,
    title: 'LoA Announcement',
    icon: 'announcement',
    lines: ['Check your email and Instagram for more information.'],
  },
  {
    id: 3,
    title: 'Onboarding Session',
    icon: 'onboarding',
    lines: ['The date of the onboarding session will be confirmed via email.'],
  },
  {
    id: 4,
    title: 'First Payment',
    icon: 'payment',
    lines: [
      'Program fees are available when the payment period begins and after you complete the registration fee.',
      'Program Fee: 660 USD / Rp11,500,000',
      'First Installment: 330 USD / Rp5,000,000',
    ],
  },
  {
    id: 5,
    title: 'Mentoring',
    icon: 'mentoring',
    lines: ['Participants will receive mentoring after the first stage of payment.'],
  },
  {
    id: 6,
    title: 'Second Payment',
    icon: 'payment',
    lines: [
      'Participants must complete the second installment after the mentoring session to proceed.',
      'Program Fee: 660 USD / Rp11,500,000',
      'Second Installment: 400 USD / Rp6,500,000',
    ],
  },
  {
    id: 7,
    title: 'Fully Funded Candidate Interview Announcement',
    icon: 'funded',
    lines: ['Selected fully funded candidates are invited to attend the interview stage.'],
  },
  {
    id: 8,
    title: 'Interview Fully Funded Candidates',
    icon: 'funded',
    lines: ['Interview session for shortlisted fully funded candidates.'],
  },
  {
    id: 9,
    title: 'Final Announcement of Fully Funded Candidates',
    icon: 'funded',
    lines: ['Final results for fully funded candidates who have been selected.'],
  },
  {
    id: 10,
    title: 'Japan Youth Summit Program',
    icon: 'program',
    lines: [
      'The Japan Youth Summit program will take place on February 25, 2026, in Osaka & Kyoto, Japan.',
    ],
  },
];

function StepIcon({ type }: { type: Step['icon'] }) {
  const base = 'h-5 w-5';
  switch (type) {
    case 'registration':
      return <CreditCard className={base} />;
    case 'announcement':
      return <Mail className={base} />;
    case 'onboarding':
      return <Users className={base} />;
    case 'payment':
      return <CreditCard className={base} />;
    case 'mentoring':
      return <Star className={base} />;
    case 'funded':
      return <Flag className={base} />;
    case 'program':
      return <CalendarDays className={base} />;
    default:
      return <CheckCircle2 className={base} />;
  }
}

export default function ProgramSteps() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-pink-50/50 py-10 sm:py-14 lg:py-16">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Program Journey"
          title="What steps will you go through in this program?"
          align="center"
        />

        {/* Timeline wrapper */}
        <div className="mt-8 grid grid-cols-[auto,1fr] gap-x-5 sm:gap-x-7">
          {/* Vertical line */}
          <div className="relative col-span-1 row-span-full">
            <div className="mx-auto h-full w-px bg-gradient-to-b from-pink-400 via-pink-300 to-transparent" />
          </div>

          <div className="space-y-6">
            {STEPS.map(step => (
              <div key={step.id} className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1">
                {/* Dot + icon */}
                <div className="relative col-span-1 flex flex-col items-center">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-pink-600 text-white shadow-[0_10px_25px_rgba(219,39,119,0.6)]">
                    <StepIcon type={step.icon} />
                  </div>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-pink-600">
                    Step {step.id}
                  </span>
                </div>

                {/* Content */}
                <div className="col-span-1 rounded-2xl bg-white/95 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70 sm:px-5 sm:py-5">
                  <h3 className="text-sm font-extrabold text-blue-950 sm:text-base">
                    {step.title}
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-700 sm:text-sm">
                    {step.lines.map(line => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-1 hidden text-emerald-500 sm:inline">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
