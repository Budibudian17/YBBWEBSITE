import { jysSectionTheme } from '@/lib/theme/jys-components';

export default function PromoCTA() {
  return (
    <section className={jysSectionTheme.promoCta.sectionWrapper}>
      {/* Shape buat background */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="bg-accent/20 pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full blur-2xl" />

      <div className={jysSectionTheme.promoCta.innerGrid}>
        {/* Isi konten sectionnya */}
        <div className="relative z-10">
          <h2 className={jysSectionTheme.promoCta.title}>Ready to Innovate? Join Us Now!</h2>
          <p className={jysSectionTheme.promoCta.body}>
            Be part of the Japan Youth Summit and co-create impactful solutions for a sustainable
            future—together with global young leaders.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#apply" className={jysSectionTheme.promoCta.primaryButton}>
              Apply Now
            </a>
          </div>
        </div>

        {/* Right side: video guideline */}
        <div className={jysSectionTheme.promoCta.videoCol}>
          <div className={jysSectionTheme.promoCta.videoCard}>
            <div className={jysSectionTheme.promoCta.videoFrameWrapper}>
              <iframe
                src="https://www.youtube.com/embed/tUR55Fi53rM?si=NEHbcyoMTTsFEVV4"
                title="Japan Youth Summit 2025 Registration Guideline"
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-3">
              <h3 className={jysSectionTheme.promoCta.videoTitle}>
                Japan Youth Summit 2025 Registration Guideline
              </h3>
              <p className={jysSectionTheme.promoCta.videoDesc}>
                Watch this short walkthrough to understand the step-by-step registration flow,
                required documents, and key deadlines before you submit your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
