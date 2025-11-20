import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FAQ() {
  const faqs: { q: string; a: string }[] = [
    {
      q: 'Who can apply to join the program?',
      a: 'Open to youth and young professionals (typically ages 17–30) from any country and background who are passionate about leadership, collaboration, and cultural exchange.',
    },
    {
      q: 'Do I need prior leadership experience?',
      a: 'No. We welcome both emerging and experienced leaders. The program is designed to develop leadership skills through workshops, discussions, and collaborative activities.',
    },
    {
      q: 'What costs are included in the program?',
      a: 'Program access, sessions, workshops, materials, and certificate of participation. Travel, visa, and accommodation are typically participant responsibilities unless stated otherwise.',
    },
    {
      q: 'Will I receive a certificate?',
      a: 'Yes. All participants who complete the program receive an official certificate of participation.',
    },
    {
      q: 'How competitive is the selection process?',
      a: 'We evaluate motivation, alignment with program values, and potential impact. Some tracks may be more competitive depending on the number of applicants.',
    },
  ];

  return (
    <section className="relative w-full bg-[#edf5ff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <p className="mx-auto -mt-6 mb-8 max-w-2xl text-center text-sm text-slate-600">
          Answers to common questions about the program, eligibility, and process.
        </p>

        <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200">
          {faqs.map((item, idx) => (
            <details key={idx} className="group" {...(idx === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <span className="font-semibold text-blue-950/90 sm:text-lg">{item.q}</span>
                <span className="shrink-0 rounded-full bg-pink-50 p-2 text-pink-600 ring-1 ring-pink-200 transition group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm leading-6 text-slate-700 sm:px-6">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
