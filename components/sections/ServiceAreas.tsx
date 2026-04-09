'use client';

import { MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { SERVICE_AREAS, SITE } from '@/lib/constants';

export default function ServiceAreas() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="areas"
      className="relative py-24 sm:py-32 bg-transparent"
      aria-labelledby="areas-heading"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,180,216,0.05)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-3">
            Service Areas
          </p>
          <h2
            id="areas-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance"
          >
            Proudly Serving Ballantyne &amp; Beyond
          </h2>
          <p className="mt-4 text-lg text-gray-400 text-balance">
            Based in the heart of South Charlotte, we provide fast leak detection services across
            the greater Ballantyne area and into South Carolina.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SERVICE_AREAS.map((area, i) => (
            <div
              key={area.name}
              className={clsx(
                'group relative flex items-center gap-3 rounded-xl border p-4 transition-all duration-300',
                area.primary
                  ? 'border-brand-teal/30 bg-brand-teal/5'
                  : 'border-white/5 bg-brand-slate/30 hover:border-brand-teal/20 hover:bg-brand-slate/50',
                inView && 'animate-fade-in-up',
                inView && `delay-${Math.min(i * 100, 700)}`
              )}
              style={inView && i > 0 ? { animationDelay: `${Math.min(i * 50, 500)}ms` } : undefined}
            >
              <MapPin
                className={clsx(
                  'h-4 w-4 shrink-0',
                  area.primary ? 'text-brand-teal' : 'text-gray-500 group-hover:text-brand-teal/60'
                )}
              />
              <span
                className={clsx(
                  'text-sm font-medium',
                  area.primary ? 'text-brand-teal font-bold' : 'text-gray-300'
                )}
              >
                {area.name}
                {area.primary && (
                  <span className="ml-2 inline-flex items-center rounded-full bg-brand-teal/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-teal">
                    HQ
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Not sure if we cover your area? Give us a call.</p>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-teal-light transition-colors"
          >
            <MapPin className="h-4 w-4" />
            Call {SITE.phone} to confirm service availability
          </a>
        </div>
      </div>
    </section>
  );
}
