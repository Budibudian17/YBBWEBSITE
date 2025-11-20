'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import {
  Building2,
  University,
  BadgeCheck,
  ShieldCheck,
  FileText,
  Scale,
  Newspaper,
  Trophy,
  ArrowRight,
} from 'lucide-react';

export default function Recognition() {
  const proofs: { icon: JSX.Element; title: string; subtitle: string; bullets?: string[] }[] = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: 'Recognized by Ministry',
      subtitle: 'Endorsements or acknowledgements from relevant government bodies',
      bullets: ['Compliance-ready', 'Letters/acknowledgements'],
    },
    {
      icon: <University className="h-5 w-5" />,
      title: 'Supported by Universities',
      subtitle: 'Backed by reputable higher education institutions',
      bullets: ['Academic support', 'Guest lecturers'],
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      title: 'Official Partners',
      subtitle: 'Formal collaborations with trusted organizations',
      bullets: ['MoU/LoI', 'Program collaboration'],
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Legal Recognition',
      subtitle: 'Meets formal compliance and regulatory standards',
      bullets: ['Policies & SOP', 'Auditable process'],
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: 'Registered Entity',
      subtitle: 'Tax ID, foundation or other legal registration',
      bullets: ['NPWP / Yayasan', 'Valid documents'],
    },
    {
      icon: <Scale className="h-5 w-5" />,
      title: 'IP & Legal Protection',
      subtitle: 'Trademark registered at DJKI (Indonesia)',
    },
    {
      icon: <Newspaper className="h-5 w-5" />,
      title: 'Media Coverage',
      subtitle: 'Featured by national and international outlets',
      bullets: ['Online features', 'TV/Press'],
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: 'Award-Winning',
      subtitle: 'Winners of international recognitions & awards',
      bullets: ['International awards', 'Jury selection'],
    },
  ];

  const haki = {
    href: 'https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    brand: 'JAPAN YOUTH SUMMIT',
    regNo: 'IDM001273026',
    status: '(TM) Registered',
    classText: '41 — Education, seminars, conferences, cultural events, etc.',
    owner: 'MUHAMMAD ALDI SUBAKTI (ID)',
  };

  return (
    <section className="relative w-full bg-[url('/img/bgourprogram.png')] bg-cover bg-center py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Recognition" />
        <p className="-mt-6 mb-8 text-center text-sm text-pink-600">
          Proof that our program and organization are legitimate and credible.
        </p>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Kiri: daftar bukti */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {proofs.map((p, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl bg-white p-3.5 shadow-[0_12px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200"
                >
                  <div className="mb-1 inline-grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
                    {p.icon}
                  </div>
                  <h3 className="text-[14px] font-extrabold text-blue-900">{p.title}</h3>
                  <p className="mt-0.5 text-[11px] leading-5 text-slate-700">{p.subtitle}</p>
                  {p.bullets?.length ? (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {p.bullets.slice(0, 2).map(b => (
                        <span
                          key={b}
                          className="rounded-full bg-pink-600/10 px-2 py-0.5 text-[10px] font-semibold text-pink-700 ring-1 ring-pink-200"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Kanan: panel visual + CTA PDKI */}
          <div className="flex items-center justify-center lg:col-span-5">
            <div className="w-full max-w-md">
              <div className="rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(2,6,23,0.06)] ring-1 ring-slate-200">
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-pink-600 text-white">
                    <Scale className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-blue-900">Trademark Registered</h3>
                    <p className="text-xs font-medium text-slate-600">DJKI • Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/img/jys.png" alt="JYS" className="h-20 w-auto" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900">{haki.brand}</p>
                    <p className="text-xs text-slate-600">{haki.classText}</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
                    <p className="text-slate-500">Registration No.</p>
                    <p className="font-semibold text-blue-950">{haki.regNo}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
                    <p className="text-slate-500">Status</p>
                    <p className="font-semibold text-blue-950">{haki.status}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
                    <p className="text-slate-500">Owner</p>
                    <p className="font-semibold text-blue-950">{haki.owner}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={haki.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700"
                  >
                    View on PDKI <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="rounded-full bg-pink-600/10 px-2 py-1 text-[10px] font-semibold text-pink-700 ring-1 ring-pink-200">
                    HAKI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
