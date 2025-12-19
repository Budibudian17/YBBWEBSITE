import SectionHeader from '@/components/ui/SectionHeader';
import { Check } from 'lucide-react';

export default function FullyFundedRequirementsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Requirements"
            title="Who can apply for Fully Funded?"
            align="left"
          />
          <ul className="mt-4 divide-y divide-slate-200 rounded-2xl bg-white text-sm text-slate-800 ring-1 ring-slate-200">
            {[
              'Submit all required documents and complete the registration form.',
              'Provide strong essays or statements of purpose that reflect impact and leadership.',
              'Be available for potential interviews or additional assessments.',
              'Agree to share post-program impact stories or testimonials if selected.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 px-5 py-3.5">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-600 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeader
            eyebrow="Benefits"
            title="What you receive as a Fully Funded delegate"
            align="left"
          />
          <ul className="mt-4 divide-y divide-slate-200 rounded-2xl bg-white text-sm text-slate-800 ring-1 ring-slate-200">
            {[
              'Full reimbursement of eligible program payments after successful completion.',
              'Same program experience and activities as Self Funded delegates.',
              'Additional recognition as a Fully Funded participant where applicable.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 px-5 py-3.5">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-600 text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 text-center text-xs text-slate-600 sm:text-sm">
        <p>
          For the most up-to-date technical terms and conditions, please always refer to the
          official guidebook and confirmation email from the organizing committee.
        </p>
      </div>
    </section>
  );
}
