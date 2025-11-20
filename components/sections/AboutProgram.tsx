import Image from 'next/image';
import { Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutProgram() {
  const summary =
    'Japan Youth Summit (by the Youth Break the Boundaries Foundation) is an international youth summit and innovation competition empowering emerging leaders to drive “Pioneering Innovation for Sustainable Futures.” It brings diverse young talents together to collaborate on SDG-focused solutions across Education, Economy, Innovation & Infrastructure, Sustainable Cities, and Climate Action.';
  const imageSrc = '/img/jysprogram.png';
  const secondImageSrc = '/img/jysprogram1.jpg';
  const leftFeatures = [
    'Education (SDG 4)',
    'Economy (SDG 8)',
    'Industry, Innovation & Infrastructure (SDG 9)',
  ];
  const rightFeatures = ['Sustainable Cities & Communities (SDG 11)', 'Climate Action (SDG 13)'];

  return (
    <section className="relative min-h-[520px] w-full bg-[url('/img/bgourprogram.png')] bg-cover bg-center bg-no-repeat py-20 sm:py-20">
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-pink-400/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 right-6 h-48 w-48 rounded-full bg-white/40 blur-2xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[520px,1fr] lg:gap-14">
          {/* Left: Card Gambar */}
          <div className="relative order-1 rounded-2xl bg-blue-900/5 shadow-[0_8px_30px_rgba(31,41,55,0.12)] ring-1 ring-blue-900/10">
            <div className="aspect-square w-full overflow-hidden rounded-2xl lg:h-[520px] lg:w-[520px]">
              <div className="relative h-full w-full">
                <Image src={imageSrc} alt="Japan Youth Summit" fill sizes="(min-width:1024px) 520px, 100vw" className="object-cover" />
              </div>
            </div>
            {/* Card overlay buat gambar (lebih kecil, kiri bawah) */}
            <div className="absolute bottom-0 left-2 z-10 w-[45%] max-w-[280px] -translate-x-6 translate-y-6 rounded-xl bg-white p-2 shadow-2xl ring-1 ring-slate-200/80 sm:bottom-0 sm:left-4 sm:-translate-x-8 sm:translate-y-8">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                <div className="relative h-full w-full">
                  <Image src={secondImageSrc} alt="Japan Youth Summit Highlight" fill sizes="(min-width:640px) 280px, 45vw" className="object-cover" />
                </div>
              </div>
            </div>
            {/* Bayangan halus dibawah overlaynya */}
            <div className="pointer-events-none absolute -bottom-4 left-10 h-16 w-40 rounded-full bg-black/10 blur-2xl" />
          </div>

          {/* Right: Isi Konten */}
          <div className="order-2 lg:pl-2">
            <SectionHeader align="left" title="About Our Program" />
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{summary}</p>

            {/* 2 Kolom Ceklis */}
            <div className="mt-6 grid gap-x-12 gap-y-3 sm:grid-cols-2">
              <ul className="divide-y divide-slate-200">
                {leftFeatures.map(label => (
                  <li key={label} className="flex items-center gap-3 py-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-blue-950">{label}</span>
                  </li>
                ))}
              </ul>
              <ul className="divide-y divide-slate-200">
                {rightFeatures.map(label => (
                  <li key={label} className="flex items-center gap-3 py-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-blue-950">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Together, participants will innovate and collaborate to create impact-driven solutions
              aligned with these goals.
            </p>

            <div className="mt-6">
              <a
                href="/apply"
                className="inline-flex items-center justify-center rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
              >
                Get Ticket Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
