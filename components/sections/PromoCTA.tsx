export default function PromoCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[url('/img/bg3strip.png')] bg-no-repeat bg-center bg-cover py-12 text-white sm:py-16 lg:py-20">
      {/* Shape buat background */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-pink-500/20 blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Isi konten sectionnya */}
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Ready to Innovate? Join JYS 2026 Now
          </h2>
          <p className="text-white-200 mt-4 max-w-xl">
            Be part of the Japan Youth Summit and co-create impactful solutions for a sustainable
            future—together with global young leaders.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
            >
              Apply Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right visual - tampilkan hanya di >= sm */}
        <div className="relative hidden sm:block sm:h-[320px] lg:h-[420px]">
          <img
            src="/img/bannerpeople.png"
            alt="JYS Participant"
            className="absolute bottom-1/2 right-0 w-[260px] translate-y-[60%] drop-shadow-2xl lg:w-[420px] xl:w-[520px]"
          />
          <div className="pointer-events-none absolute -bottom-8 right-12 h-24 w-40 rounded-full bg-black/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
