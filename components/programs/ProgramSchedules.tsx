import SectionHeader from '@/components/ui/SectionHeader';

interface ScheduleItem {
  dateRange: string;
  status: 'active' | 'upcoming' | 'closed';
  name: string;
  description: string;
}

const SCHEDULES: ScheduleItem[] = [
  {
    dateRange: 'Aug 01, 2025 – Sep 30, 2025',
    status: 'closed',
    name: 'Participant Registration (Fully Funded)',
    description: 'Registration period for fully funded applicants.',
  },
  {
    dateRange: 'Oct 26, 2025 – Jan 02, 2026',
    status: 'active',
    name: 'Participant Registration (Self Funded)',
    description: 'Self funded registration period for delegates.',
  },
  {
    dateRange: 'Early Jan 2026',
    status: 'upcoming',
    name: 'LoA Announcement',
    description:
      'Letters of Acceptance (LoA) sent to selected participants via email and social media.',
  },
  {
    dateRange: 'Mid Jan 2026',
    status: 'upcoming',
    name: 'Onboarding Session',
    description: 'Online onboarding and briefing session for all confirmed delegates.',
  },
  {
    dateRange: 'Mid Jan 2026',
    status: 'upcoming',
    name: 'First Program Payment',
    description: 'First installment payment window after registration fee is completed.',
  },
  {
    dateRange: 'Late Jan 2026',
    status: 'upcoming',
    name: 'Mentoring Session',
    description: 'Mentoring sessions for participants after the first installment is paid.',
  },
  {
    dateRange: 'Late Jan 2026',
    status: 'upcoming',
    name: 'Second Program Payment',
    description: 'Second installment payment window to complete the total program fee.',
  },
  {
    dateRange: 'Late Jan 2026',
    status: 'upcoming',
    name: 'Fully Funded Candidate Interview Announcement',
    description:
      'Announcement of shortlisted fully funded candidates invited to the interview stage.',
  },
  {
    dateRange: 'Late Jan 2026',
    status: 'upcoming',
    name: 'Interview for Fully Funded Candidates',
    description: 'Interview sessions for shortlisted fully funded applicants.',
  },
  {
    dateRange: 'Late Jan 2026',
    status: 'upcoming',
    name: 'Final Announcement of Fully Funded Candidates',
    description: 'Final results of fully funded candidates published by the organizing committee.',
  },
  {
    dateRange: 'Feb 02, 2026 – Feb 05, 2026',
    status: 'upcoming',
    name: 'Japan Youth Summit 2026 Program Days',
    description: 'On-site program activities in Osaka & Kyoto, Japan.',
  },
];

function StatusBadge({ status }: { status: ScheduleItem['status'] }) {
  if (status === 'active') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Active
      </span>
    );
  }
  if (status === 'upcoming') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Upcoming
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Closed
    </span>
  );
}

export default function ProgramSchedules() {
  return (
    <section className="relative w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Program Schedules"
          title="Key dates and important deadlines"
          align="center"
        />

        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/80">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-pink-50">
                <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th scope="col" className="px-5 py-3 sm:px-6">
                    Date Range
                  </th>
                  <th scope="col" className="px-5 py-3 sm:px-6">
                    Status
                  </th>
                  <th scope="col" className="px-5 py-3 sm:px-6">
                    Schedule Name
                  </th>
                  <th scope="col" className="px-5 py-3 sm:px-6">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {SCHEDULES.map(row => (
                  <tr key={row.name} className="align-top text-[13px] text-slate-800">
                    <td className="whitespace-nowrap px-5 py-4 text-slate-700 sm:px-6">
                      {row.dateRange}
                    </td>
                    <td className="px-5 py-4 sm:px-6">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-5 py-4 font-semibold text-blue-950 sm:px-6">{row.name}</td>
                    <td className="px-5 py-4 text-slate-600 sm:px-6">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-slate-600 sm:mt-5 sm:text-sm">
          <span className="font-semibold text-pink-700">Important:</span> All dates and deadlines
          are subject to change. Please check this page regularly for the most up-to-date
          information.
        </p>
      </div>
    </section>
  );
}
