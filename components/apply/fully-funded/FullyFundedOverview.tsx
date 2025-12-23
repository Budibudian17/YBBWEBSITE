'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Calendar, MapPin, Square, CheckCircle2, Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

export default function FullyFundedOverviewSection() {
  const [tab, setTab] = useState('details');

  return (
    <section className="sm:py-18 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:gap-1">
          {/* Kiri: card dengan tab */}
          <div className="h-full text-blue-950">
            <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/80">
              {/* Tabs header */}
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 text-sm font-semibold text-slate-500">
                <button
                  type="button"
                  className={`relative flex-1 px-3 pb-2 pt-1 text-center transition ${
                    tab === 'details' ? 'text-blue-950' : 'text-slate-500 hover:text-slate-700'
                  }`}
                  onClick={() => setTab('details')}
                >
                  Program Details
                  {tab === 'details' && (
                    <span className="absolute inset-x-0 bottom-0 mx-auto block h-0.5 max-w-[70%] rounded-full bg-pink-500" />
                  )}
                </button>
                <button
                  type="button"
                  className={`relative flex-1 px-3 pb-2 pt-1 text-center transition ${
                    tab === 'benefits' ? 'text-blue-950' : 'text-slate-500 hover:text-slate-700'
                  }`}
                  onClick={() => setTab('benefits')}
                >
                  Benefits
                  {tab === 'benefits' && (
                    <span className="absolute inset-x-0 bottom-0 mx-auto block h-0.5 max-w-[70%] rounded-full bg-pink-500" />
                  )}
                </button>
              </div>

              {/* Tab content */}
              {tab === 'details' && (
                <div className="mt-5 space-y-6 text-[15px] leading-7 text-slate-700 sm:text-base">
                  {/* Description */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-pink-600">
                      Description
                    </h3>
                    <p>
                      Japan Youth Summit (JYS) 2026 is an international youth forum that brings
                      together passionate young leaders to discuss, design, and drive collaborative
                      solutions for a more sustainable and inclusive future in Asia and beyond.
                    </p>
                    <p>
                      Throughout the program, participants will engage in panel discussions,
                      cultural exchanges, and hands-on workshops guided by experienced mentors and
                      practitioners.
                    </p>
                    <p>
                      The summit is also a space to build long-term friendships and cross-border
                      collaborations, with delegates expected to return home with clearer action
                      plans and stronger international networks.
                    </p>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-pink-600">
                      Requirements
                    </h3>
                    <ul className="grid gap-2 text-[15px] text-slate-700 sm:grid-cols-2">
                      <li className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-pink-600" />
                        <span>Complete registration form and documentation</span>
                      </li>
                      <li className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-pink-600" />
                        <span>Submit detailed essays and applications</span>
                      </li>
                      <li className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-pink-600" />
                        <span>Participate in interviews and evaluations</span>
                      </li>
                      <li className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-pink-600" />
                        <span>Agree to follow all program and funding guidelines</span>
                      </li>
                    </ul>
                  </div>

                  {/* Benefits (If Selected) */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-pink-600">
                      Benefits (If Selected)
                    </h3>
                    <ul className="grid gap-2 text-[15px] text-slate-700 sm:grid-cols-2">
                      <li className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
                        <Star className="h-4 w-4 flex-shrink-0 text-pink-600" />
                        <span>Full reimbursement of eligible program payments</span>
                      </li>
                      <li className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
                        <Star className="h-4 w-4 flex-shrink-0 text-pink-600" />
                        <span>Enhanced recognition as a Fully Funded delegate</span>
                      </li>
                      <li className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
                        <Star className="h-4 w-4 flex-shrink-0 text-pink-600" />
                        <span>Same program experience as Self Funded participants</span>
                      </li>
                      <li className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
                        <Star className="h-4 w-4 flex-shrink-0 text-pink-600" />
                        <span>Opportunities for post-program collaboration and features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === 'benefits' && (
                <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-700 sm:text-base">
                  <p>WM HILMI FARREL WKWKKWWKKW</p>
                </div>
              )}
            </div>
          </div>

          {/* Kanan: kartu program seperti contoh */}
          <div className="mx-auto h-full w-fit">
            <div className="flex h-full flex-col rounded-3xl bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/80 sm:p-5">
              {/* Gambar cover */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/img/jys26posters.png"
                  alt="Japan Youth Summit 2026 cover"
                  width={260}
                  height={360}
                  className="h-auto w-auto object-contain"
                  priority
                />
              </div>

              {/* Info program */}
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-pink-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-blue-950">Osaka &amp; Kyoto, Japan</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CalendarDays className="mt-0.5 h-4 w-4 text-pink-600" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Duration
                      </p>
                      <p className="text-sm font-semibold text-blue-950">5 Days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Square className="mt-0.5 h-4 w-4 text-pink-600" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Program Format
                      </p>
                      <p className="text-sm font-semibold text-blue-950">On-site in Japan</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Calendar className="mt-0.5 h-4 w-4 text-pink-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Event Dates
                    </p>
                    <p className="text-sm font-semibold text-blue-950">02 – 06 February 2026</p>
                  </div>
                </div>
              </div>

              {/* Tombol guidebook */}
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="#guidebook-en"
                  className={`${jysSectionTheme.homeRegistration.guideSecondary} flex w-full items-center justify-center gap-2 text-sm`}
                >
                  <span className="text-lg">🇬🇧</span>
                  <span>Read Guidebook (Eng)</span>
                </a>
                <a
                  href="#guidebook-id"
                  className={`${jysSectionTheme.homeRegistration.guidePrimary} flex w-full items-center justify-center gap-2 text-sm`}
                >
                  <span className="text-lg">🇮🇩</span>
                  <span>Read Guidebook (Ind)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
