'use client';

import Image from 'next/image';
import { Mail as MailIcon } from 'lucide-react';

export default function Footer() {
  // navigasi footer disamakan dengan navbar biar konsisten
  const nav = [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Partners & Sponsors', href: '/partners' },
    { label: 'Announcements', href: '/announcements' },
  ];
  // sublink programs sama seperti di navbar
  const pages = [
    { label: 'Program Overview', href: '/programs' },
    { label: 'Insight & Analytics', href: '/programs/insights' },
    { label: 'Photo Gallery', href: '/programs/gallery' },
    { label: 'Testimonials', href: '/programs/testimonials' },
  ];
  const speakers = [
    { name: 'Mas Aldi', role: 'COO YBB', avatar: '/img/jys.png' },
    { name: 'Mas Hendra', role: 'Lead Programmer', avatar: '/img/jys.png' },
    { name: 'Hilmi Farrel Firjatullah', role: 'Web Dev Intern', avatar: '/img/jys.png' },
  ];

  return (
    <>
      <footer className="relative w-full bg-[#e9f2ff] py-12 text-blue-950 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-4 lg:gap-12 lg:px-8">
          {/* Kalimat Khusus program ( deskripsi program ) */}
          <div>
            <div className="flex items-center">
              <Image
                src="/img/jysfooter.png"
                alt="Japan Youth Summit"
                width={700}
                height={700}
                className="h-12 w-auto sm:h-16 md:h-20"
              />
            </div>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Empowering young leaders to innovate sustainably and celebrate culture.
            </p>
            <form className="mt-5">
              <div className="flex overflow-hidden rounded-xl ring-1 ring-blue-900/15">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button
                  type="button"
                  className="bg-pink-600 px-4 text-sm font-semibold text-white transition hover:bg-pink-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-blue-900">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {nav.map(n => (
                <li key={n.label}>
                  <a className="transition hover:text-pink-600" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Program links (sama kayak submenu Programs di navbar) */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-blue-900">
              Programs
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {pages.map(p => (
                <li key={p.label}>
                  <a className="transition hover:text-pink-600" href={p.href}>
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pamer Kontributor */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-blue-900">
              Contributors
            </h4>
            <ul className="mt-4 space-y-3">
              {speakers.map(s => (
                <li
                  key={s.name}
                  className="flex items-center justify-between rounded-xl bg-white p-3 ring-1 ring-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-blue-950">{s.name}</p>
                      <p className="text-xs text-slate-500">{s.role}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-pink-600/10 px-2 py-1 text-[10px] font-semibold text-pink-700 ring-1 ring-pink-200">
                    JYS
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bar / Garis yang di bawah */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className="h-px w-full bg-blue-900/10" />
          <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              {/* Email */}
              <a
                aria-label="Email"
                href="mailto:info@jys.org"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 transition hover:text-pink-600"
              >
                <MailIcon className="h-4 w-4" />
              </a>
              {/* YouTube */}
              <a
                aria-label="YouTube"
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 transition hover:text-pink-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M21.8 8.001a3.002 3.002 0 00-2.115-2.122C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.685.379A3.002 3.002 0 002.2 8.001C1.875 9.5 1.875 12 1.875 12s0 2.5.325 3.999a3.002 3.002 0 002.115 2.122C5.8 18.5 12 18.5 12 18.5s6.2 0 7.685-.379A3.002 3.002 0 0021.8 16c.325-1.499.325-3.999.325-3.999s0-2.5-.325-4zM10.5 9.75l4.5 2.25-4.5 2.25v-4.5z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                aria-label="TikTok"
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 transition hover:text-pink-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M14.25 3a.75.75 0 01.75-.75h1.5a4.5 4.5 0 004.5 4.5v1.5a6 6 0 01-4.5-1.95v7.95a5.25 5.25 0 11-5.25-5.25c.26 0 .51.02.75.06V10.5a3.75 3.75 0 103.5 3.727V3z" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                aria-label="Telegram"
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 transition hover:text-pink-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M21.944 4.667a1.125 1.125 0 00-1.558-.992L3.4 11.007a.937.937 0 00.072 1.743l4.847 1.802 1.861 4.717a.938.938 0 001.7.127l2.756-4.513 4.853-9.807a1.125 1.125 0 00.455-.409zM9.42 12.93l7.359-4.53-5.69 5.7a.937.937 0 00-.238.385l-.68 2.214-.751-1.904a.937.937 0 00-.442-.49l-1.558-.775z" />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 transition hover:text-pink-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.86-3.99 1.12 0 2.29.2 2.29.2v2.52h-1.29c-1.27 0-1.67.79-1.67 1.61V12h2.85l-.46 2.91h-2.39v7.04A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 transition hover:text-pink-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM18 6.5a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-slate-500">
              © Hilmi Farrel Firjatullah x YBB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </>
  );
}
