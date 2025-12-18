'use client';

import Image from 'next/image';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { jysSectionTheme } from '@/lib/theme/jys-components';

export default function AboutProgram() {
  const [activeTab, setActiveTab] = useState<'about' | 'vision'>('about');

  const imageMain = '/img/jysprogram.png';
  const imageSecondary = '/img/jysprogram1.jpg';
  const imageThird = '/img/programoverview.png';

  return (
    <section className={jysSectionTheme.aboutProgram.sectionWrapper}>
      <div className={jysSectionTheme.aboutProgram.blurTop} />
      <div className={jysSectionTheme.aboutProgram.blurBottom} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:gap-14">
          {/* Left: Konten dengan Tabs */}
          <div className="order-2 lg:order-1 lg:pr-4">
            <SectionHeader align="left" eyebrow="Program Overview" title="About Our Program" />

            {/* Tabs */}
            <div className={jysSectionTheme.aboutProgram.tabContainer}>
              <button
                type="button"
                onClick={() => setActiveTab('about')}
                className={`${jysSectionTheme.aboutProgram.tabButtonBase} ${
                  activeTab === 'about'
                    ? jysSectionTheme.aboutProgram.tabButtonActive
                    : jysSectionTheme.aboutProgram.tabButtonInactive
                }`}
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('vision')}
                className={`${jysSectionTheme.aboutProgram.tabButtonBase} ${
                  activeTab === 'vision'
                    ? jysSectionTheme.aboutProgram.tabButtonActive
                    : jysSectionTheme.aboutProgram.tabButtonInactive
                }`}
              >
                Vision &amp; Mission
              </button>
            </div>

            <div className={jysSectionTheme.aboutProgram.contentWrapper}>
              {activeTab === 'about' ? (
                <>
                  <p>
                    Japan Youth Summit (by the Youth Break the Boundaries Foundation) is an
                    international youth summit and innovation competition that brings together
                    emerging leaders from around the world. Participants collaborate on real impact
                    projects and share ideas across culture and disciplines.
                  </p>
                  <p>
                    The program is designed for young people who want to sharpen their leadership,
                    expand their global network, and contribute to solutions for the Sustainable
                    Development Goals (SDGs). Throughout the summit, delegates join keynote
                    sessions, workshops, and collaborative activities in Japan.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <span className={jysSectionTheme.aboutProgram.visionLabel}>Vision.</span> To
                    empower a generation of young leaders who are ready to champion innovation,
                    collaboration, and sustainable impact on a global scale.
                  </p>
                  <p>
                    <span className={jysSectionTheme.aboutProgram.visionLabel}>Mission.</span> Japan
                    Youth Summit creates a space where youth can explore global issues through the
                    SDGs, design concrete initiatives in education, economy, infrastructure, cities,
                    and climate, and grow long-term collaboration with mentors and institutions from
                    different countries. Together, these pillars invite every delegate to align
                    their personal journey with a bigger global impact story.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6">
              <a
                href="/apply"
                className={`${jysSectionTheme.aboutProgram.ctaButton} w-full justify-center`}
              >
                I Want To Join
              </a>
            </div>
          </div>

          {/* Right: Kolase Gambar */}
          <div className="order-1 lg:order-2">
            <div className="relative h-full w-full">
              <div className="grid h-full gap-4 sm:grid-cols-2">
                {/* Gambar besar kiri */}
                <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl bg-blue-900/5 shadow-[0_8px_30px_rgba(31,41,55,0.12)] ring-1 ring-blue-900/10">
                  <Image
                    src={imageMain}
                    alt="Japan Youth Summit main program"
                    fill
                    sizes="(min-width:1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* Dua gambar kecil kanan */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/40 shadow-[0_8px_30px_rgba(31,41,55,0.12)] ring-1 ring-slate-200/80">
                  <Image
                    src={imageSecondary}
                    alt="Japan Youth Summit activity"
                    fill
                    sizes="(min-width:1024px) 260px, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/40 shadow-[0_8px_30px_rgba(31,41,55,0.12)] ring-1 ring-slate-200/80">
                  <Image
                    src={imageThird}
                    alt="Japan Youth Summit highlight"
                    fill
                    sizes="(min-width:1024px) 260px, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
