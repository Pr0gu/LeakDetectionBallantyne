'use client';

import { Phone, AlertTriangle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SITE } from '@/lib/constants';

export default function EmergencyCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 bg-brand-dark/95 backdrop-blur-md"
      aria-label="Emergency leak repair call to action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0c0f1a] to-brand-dark" />

      {/* Red urgent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.08)_0%,transparent_60%)]" />

      {/* Animated pulse rings */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[500px] rounded-full border border-red-500/10 animate-sonar-1" />
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <div className="h-[350px] w-[350px] rounded-full border border-red-500/5" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {/* Warning icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 ring-2 ring-red-500/20">
          <AlertTriangle className="h-8 w-8 text-red-400" aria-hidden="true" />
        </div>

        <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl text-balance">
          Water Leak Emergency?
          <br />
          <span className="text-red-400">Every Minute Counts.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
          Burst pipes, slab leaks, flooding — water damage escalates fast. Our emergency team arrives
          in under 30 minutes to stop the leak and prevent further damage.
        </p>

        <a
          href={SITE.phoneHref}
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-10 py-5 text-xl font-bold text-white shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30"
          aria-label={`Call emergency leak detection at ${SITE.phone}`}
        >
          <Phone className="h-6 w-6 animate-pulse" aria-hidden="true" />
          {SITE.phone}
        </a>

        <p className="mt-4 text-sm text-gray-500">
          Available 24/7 — including weekends and holidays
        </p>
      </div>
    </section>
  );
}
