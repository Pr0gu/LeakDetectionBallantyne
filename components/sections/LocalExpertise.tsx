'use client';

import { useInView } from 'react-intersection-observer';

const zones = [
  {
    name: 'Ballantyne & Piper Glen',
    challenge: 'Slab leaks + new construction',
    details:
      'Newer slab foundations on Piedmont clay mean slab leaks are common. We pinpoint them with acoustic and thermal detection without touching your finished floors.',
  },
  {
    name: 'Providence & Olde Providence',
    challenge: 'Irrigation line leaks',
    details:
      'Large landscaped lots mean long irrigation runs \u2014 a common source of hidden water bill spikes. We locate underground leaks without digging up your yard.',
  },
  {
    name: 'Weddington & Marvin',
    challenge: 'Well systems + water lines',
    details:
      'Well-water homes and long private water main runs mean specialized detection. We trace lines, pressure-test, and diagnose well pumps.',
  },
  {
    name: 'Pineville & Fort Mill',
    challenge: 'Older homes + sewer lines',
    details:
      'Mature neighborhoods with aging sewer lines means root intrusion and pipe deterioration. HD camera inspection locates the exact failure point.',
  },
];

export default function LocalExpertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding" aria-labelledby="local-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-14 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-teal">
            Local Expertise
          </p>
          <h2
            id="local-heading"
            className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl"
          >
            Every neighborhood has its own leaks.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-silver">
            From Ballantyne slabs to Weddington wells, we know what causes hidden leaks
            in each area \u2014 and how to find them fast.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {zones.map((z, i) => (
            <ZoneCard key={z.name} zone={z} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ZoneCard({ zone, index }: { zone: (typeof zones)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-brand-teal/30 hover:bg-white/[0.05] ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-teal">
        {zone.challenge}
      </p>
      <h3 className="mb-3 text-xl font-bold text-white">{zone.name}</h3>
      <p className="text-sm leading-relaxed text-brand-silver">{zone.details}</p>
    </div>
  );
}
