import { MapPin, Phone, Mail } from 'lucide-react';

export default function InfoStrip() {
  const items = [
    {
      subtitle: 'Location',
      title: 'Programs Held in',
      description: 'Osaka, Japan',
      icon: (<MapPin className="h-5 w-5 text-pink-400" />),
    },
    {
      subtitle: 'Contact',
      title: 'Customer Service',
      description: '+6285173386622',
      icon: (<Phone className="h-5 w-5 text-pink-400" />),
    },
    {
      subtitle: 'Email',
      title: 'Official Email',
      description: 'japanyouthsummit@gmail.com',
      icon: (<Mail className="h-5 w-5 text-pink-400" />),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1c57b3] text-white">
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/3 h-48 w-48 rotate-12 rounded-xl bg-white/10 blur-2xl" />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item.subtitle}
              className={`flex items-start gap-6 lg:px-10 ${index !== items.length - 1 ? 'lg:border-r lg:border-blue-800/60' : ''}`}
            >
              <div className="flex aspect-square h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-pink-500/80 bg-white/5">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
                  {item.subtitle}
                </p>
                <h3 className="mt-1 text-2xl font-extrabold leading-tight">{item.title}</h3>
                <p className="mt-3 max-w-md text-blue-100/90">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
