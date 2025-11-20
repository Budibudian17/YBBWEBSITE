import { CalendarDays, MapPin, Clock, Users, FileText, Download, Info, Check } from 'lucide-react';
import Image from 'next/image';
import RegistrationTutorial from '@/components/sections/RegistrationTutorial';
import FeaturedSpeakers from '@/components/programs/FeaturedSpeakers';
import ProgramRundowns from '@/components/programs/ProgramRundowns';
import ProgramFAQ from '@/components/programs/ProgramFAQ';
import SectionHeader from '@/components/ui/SectionHeader';

function getProgramMeta(slug: string): {
  yearText: string;
  title: string;
  tagline: string;
  open: boolean;
} {
  switch (slug) {
    case 'jys-2026':
      return {
        yearText: 'Featured Program',
        title: 'Japan Youth Summit 2026',
        tagline: 'Collaboration in Diversity',
        open: true,
      };
    case 'jys-2025':
      return {
        yearText: 'Featured Program',
        title: 'Japan Youth Summit 2025',
        tagline: 'Innovate for Tomorrow',
        open: false,
      };
    case 'jys-2024':
      return {
        yearText: 'Featured Program',
        title: 'Japan Youth Summit 2024',
        tagline: 'Innovate for Tomorrow',
        open: false,
      };
    case 'jys-2023':
      return {
        yearText: 'Featured Program',
        title: 'Japan Youth Summit 2023',
        tagline: 'Innovate for Tomorrow',
        open: false,
      };
    default:
      return {
        yearText: 'Featured Program',
        title: 'Program Details',
        tagline: 'Innovate for Tomorrow',
        open: false,
      };
  }
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const meta = getProgramMeta(slug);

  const ctaLabel = meta.open ? 'Register Now' : 'Registration Closed';
  const ctaHref = meta.open ? '/apply' : undefined;

  return (
    <main className="relative">
      {/* Custom hero tanpa breadcrumb, sesuai request */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/img/bgprogramoverview.png')` }}
      >
        <div className="mx-auto flex min-h-[360px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center text-white sm:min-h-[420px] sm:py-28 md:py-32 lg:px-8">
          <p className="text-base font-semibold uppercase tracking-wide text-white/90">
            {meta.yearText}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Japan Youth Summit 2026
          </h1>
          <p className="mt-3 text-lg font-semibold text-white/90 sm:text-xl">{meta.tagline}</p>

          <div className="mt-6">
            {ctaHref ? (
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700"
              >
                {ctaLabel}
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/80">
                {ctaLabel}
              </span>
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute -right-24 -top-24 h-[24rem] w-[24rem] rounded-full bg-white/10 blur-3xl md:h-[28rem] md:w-[28rem]" />
        <div className="pointer-events-none absolute -right-40 top-24 h-[16rem] w-[16rem] rounded-full bg-white/5 blur-2xl md:h-[18rem] md:w-[18rem]" />
      </section>

      {/* Info strip section (follow homepage InfoStrip styling) */}
      <section className="relative w-full overflow-hidden bg-[#1c57b3] text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 h-48 w-48 rotate-12 rounded-xl bg-white/10 blur-2xl" />
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <li className="flex items-start gap-6 lg:border-r lg:border-blue-800/60 lg:px-6">
              <div className="flex aspect-square h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-white/5">
                <CalendarDays className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
                  Program Date
                </p>
                <h3 className="mt-1 text-2xl font-extrabold leading-tight">
                  March 12 - March 15, 2026
                </h3>
              </div>
            </li>
            <li className="flex items-start gap-6 lg:border-r lg:border-blue-800/60 lg:px-6">
              <div className="flex aspect-square h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-white/5">
                <MapPin className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
                  Location
                </p>
                <h3 className="mt-1 text-2xl font-extrabold leading-tight">Osaka, Japan</h3>
              </div>
            </li>
            <li className="flex items-start gap-6 lg:border-r lg:border-blue-800/60 lg:px-6">
              <div className="flex aspect-square h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-white/5">
                <Clock className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
                  Duration
                </p>
                <h3 className="mt-1 text-2xl font-extrabold leading-tight">4 Days</h3>
              </div>
            </li>
            <li className="flex items-start gap-6 lg:border-r lg:border-blue-800/60 lg:px-6">
              <div className="flex aspect-square h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-white/5">
                <Users className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
                  Capacity
                </p>
                <h3 className="mt-1 text-2xl font-extrabold leading-tight">200 Slots</h3>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader eyebrow="Guidelines" title="Registration Guidelines" />
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-[url('/img/bgourprogram.png')] bg-cover bg-center bg-blend-multiply ring-1 ring-gray-200">
            <div className="p-6 text-center sm:p-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-pink-500/80 bg-pink-50">
                <FileText className="h-5 w-5 text-pink-600" />
              </div>
              <p className="text-base leading-7 text-gray-600">
                Download our comprehensive registration guide to understand the application process,
                requirements, and important deadlines for this program.
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://drive.google.com/drive/folders/12b2NpJJFpWv5I_HrOHW0Vjiz8xckt5Wt?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700"
                >
                  <Download className="h-4 w-4" />
                  Download Guidelines
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Overview + Program Application (2 cards) */}
      <section className="relative bg-[#eef5ff]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader eyebrow="Overview" title="Overview" />
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Overview card */}
            <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
              <div className="flex items-start gap-4 p-6 sm:p-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-pink-50">
                  <Info className="h-5 w-5 text-pink-600" />
                </div>
                <div className="text-gray-700">
                  <p className="leading-7">
                    Japan Youth Summit, organized by the Youth Break the Boundaries (YBB)
                    Foundation, is an international innovation competition and youth summit designed
                    to inspire emerging leaders and drive real impact.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex aspect-square h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-600 text-white">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="leading-7">
                        Collaborate across diverse fields to implement strategies under the theme
                        <span className="font-semibold">
                          {' '}
                          “Pioneering Innovation for Sustainable Futures.”
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex aspect-square h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-600 text-white">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="leading-7">
                        Elevate leadership through discussions, cultural exchange, and hands-on
                        sessions.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex aspect-square h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-600 text-white">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="leading-7">
                        Advance Sustainable Development Goals (SDGs): Education (SDG 4), Economy
                        (SDG 8), Industry & Innovation (SDG 9), Sustainable Cities (SDG 11), and
                        Climate Action (SDG 13).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Program Application card */}
            <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/img/coverjysbrosur.png"
                  alt="Program Cover"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="p-6 text-center sm:p-8">
                <h3 className="text-xl font-extrabold text-blue-950 sm:text-2xl">
                  Join our Japan Youth Summit 2025
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Secure your spot and be part of an inspiring cohort of young leaders.
                </p>
                <div className="mt-6">
                  {ctaHref ? (
                    <a
                      href={ctaHref}
                      className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700"
                    >
                      {ctaLabel}
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-500">
                      {ctaLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegistrationTutorial />

      <FeaturedSpeakers
        speakers={[
          {
            name: 'Kyoka Sugahara',
            title: 'CEO of BuzzSell',
            org: 'BuzzSell',
            photo: '/img/speaker1.png',
            href: '/speakers/kyoka-sugahara',
          },
          {
            name: 'Fawad Afridi',
            title: 'CEO of Scholarships Corner',
            org: 'Scholarships Corner',
            photo: '/img/speaker2.png',
            href: '/speakers/fawad-afridi',
          },
          {
            name: 'Ayik Abdillah',
            title: 'PhD Student at Kyoto University',
            org: 'Kyoto University',
            photo: '/img/speaker3.png',
            href: '/speakers/ayik-abdillah',
          },
        ]}
      />

      <ProgramRundowns
        days={[
          {
            label: 'Day 1',
            items: [
              {
                dateLabel: 'Oct 12, 2025',
                activitiesCount: 1,
                timeRange: '12:00 PM - 03:00 PM',
                duration: 'Duration: 3h',
                title: 'Airport Assistance, Registration (Hotel Check-in)',
                description:
                  'Airport assistance will be provided exclusively at Kansai International Airport, with an estimated schedule of two pickup sessions at approximately 12:00 PM and 2:00 PM local time.',
              },
            ],
          },
          {
            label: 'Day 2',
            items: [
              {
                dateLabel: 'Oct 13, 2025',
                activitiesCount: 1,
                timeRange: '08:00 AM - 06:00 PM',
                duration: 'Duration: 10h',
                title: 'City Tour Osaka',
                description:
                  'Enjoying a day trip to several destinations in Osaka, including Osaka World Expo 2025',
              },
            ],
          },
          {
            label: 'Day 3',
            items: [
              {
                dateLabel: 'Oct 14, 2025',
                activitiesCount: 1,
                timeRange: '08:00 AM - 06:00 PM',
                duration: 'Duration: 10h',
                title:
                  'International Youth Summit & Panel Discussion, International Innovation Competition, Cultural and Awarding Night',
                description:
                  'On this day, all participants will gather in one main hall to take part in the International Symposium, Panel Discussion, and Innovate Project Competition. Delegates will engage in meaningful dialogue with official speakers, and showcase their innovative projects to a panel of judges. Selected participants may also receive early international recognition from the Japan Youth Summit Committee.',
              },
            ],
          },
          {
            label: 'Day 4',
            items: [
              {
                dateLabel: 'Oct 15, 2025',
                activitiesCount: 1,
                timeRange: '10:00 AM - 12:00 PM',
                duration: 'Duration: 2h',
                title: 'Certificate Claims, Hotel Check-out, Airport Assistance',
                description:
                  'Airport assistance will be provided exclusively at Participants Hotel, with an estimated schedule at approximately 10.00 AM local time',
              },
            ],
          },
        ]}
      />

      <ProgramFAQ
        groups={[
          {
            label: 'Event Details',
            faqs: [
              {
                q: 'Where is the main event location?',
                a: 'The main event takes place in Osaka, Japan. Detailed venue information (hotel and main hall) will be announced closer to the event date.',
              },
              {
                q: 'What is Japan Youth Summit',
                a: 'Japan Youth Summit is an international youth gathering and innovation competition that brings together students and young professionals to learn, discuss, and collaborate to create impactful solutions.',
              },
              {
                q: 'What is the theme of the Japan Youth Summit?',
                a: `This year\'s theme is “${meta.tagline}”. Sub-themes and discussion focus will be shared in the official booklet and agenda.`,
              },
              {
                q: 'What are the agendas at the Japan Youth Summit?',
                a: 'Symposium & panel discussions, International Innovation Competition, networking & mentoring, cultural/awarding night, and an educational city tour.',
              },
              {
                q: 'What are the objectives of the Japan Youth Summit?',
                a: 'To empower global youth, foster cross-cultural collaboration, and spark SDG-aligned innovation through discussions, competition, and networking.',
              },
              {
                q: 'If my parents ask me who is the Project Manager and Public Relations of this event, whose contact I should give?',
                a: 'Official PIC (Project Manager/PR) contact will be shared in the LOA/acceptance email and displayed in your participant Dashboard. For general inquiries, use the Contact page or Support Center.',
              },
              {
                q: 'Why should you join Japan Youth Summit?',
                a: 'Access international speakers, build a global network, gain cross-cultural experience, strengthen your competition portfolio, and get international recognition for your project/research.',
              },
              {
                q: 'How to join the Japan Youth Summit & get the fully funded program?',
                a: 'Apply via the Apply page, complete the documents and motivation essay. Fully-funded slots are very limited and merit/impact-based; eligibility is assessed from your documents and track record.',
              },
            ],
          },
          {
            label: 'Registration',
            faqs: [
              {
                q: 'When will I get the announcement for the selected participants?',
                a: 'Selected participants are scheduled to be announced on September 1–10, 2025 via email and the Dashboard.',
              },
              {
                q: "Why can't I register myself?",
                a: 'Registration may be closed, the quota is full, or you do not meet the age/criteria requirements. Please try in the next batch or contact support.',
              },
              {
                q: 'How to register for the Japan Youth Summit?',
                a: 'Click Apply, create an account, fill out the online form, upload documents, then submit. Track all progress in your Dashboard.',
              },
              {
                q: 'Where should I submit my application?',
                a: 'All documents must be submitted through the Dashboard. Submissions via email are not accepted.',
              },
              {
                q: 'Am I eligible for the fully funded participant?',
                a: 'Candidates are selected based on achievement/impact, motivation essay, and theme fit. Fully-funded slots are highly competitive and limited.',
              },
              {
                q: 'What documents should we prepare for the application?',
                a: 'ID/Passport, CV/Resume, motivation essay (300–500 words), proof of achievement/portfolio (optional), and recommendation letter (optional). See the Registration Guidelines for details.',
              },
              {
                q: 'Is English required for joining the Japan Youth Summit?',
                a: 'Active English skills are recommended as most sessions are in English. The committee will provide basic guidance to support communication.',
              },
              {
                q: 'How can I know if my application & payment is submitted successfully?',
                a: 'Status appears in real time in the Dashboard (Submitted/Paid) and you will receive an email notification. Keep proof of payment for verification if needed.',
              },
              {
                q: 'What are the requirements to join the Japan Youth Summit?',
                a: 'Aged 17–30 at the time of the event, interest in the theme, an active passport (or in process), and willingness to attend the full program.',
              },
            ],
          },
          {
            label: 'Payments',
            faqs: [
              {
                q: 'I made a payment but it is still pending. Why?',
                a: 'Payment verification can take 24–72 hours depending on the method/bank. Ensure the reference number is correct and avoid duplicate payments. If it takes longer than 72 hours, contact support through the Dashboard.',
              },
              {
                q: 'If I can’t attend the Japan Youth Summit, can I get a refund?',
                a: 'Refund follows official policy: partial refund before certain deadline; non-refundable after administrative process/visa/travel arrangement. See Registration Guidelines for complete details.',
              },
            ],
          },
        ]}
      />
    </main>
  );
}
