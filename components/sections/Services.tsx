'use client';

import { Layers, Pipette, Waves, Camera, Siren, Wrench, type LucideIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { SERVICES } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  layers: Layers,
  pipette: Pipette,
  waves: Waves,
  camera: Camera,
  siren: Siren,
  wrench: Wrench,
};

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-transparent"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance"
          >
            Leak Detection &amp; Plumbing Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-400 text-balance">
            From pinpointing hidden slab leaks to full plumbing repair — we handle it all with
            precision technology and expert craftsmanship.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.id}
                className={clsx(
                  'card-glow group relative rounded-2xl border border-white/5 bg-transparent/60 p-8 transition-all duration-300',
                  inView && 'animate-fade-in-up',
                  inView && i === 1 && 'delay-100',
                  inView && i === 2 && 'delay-200',
                  inView && i === 3 && 'delay-300',
                  inView && i === 4 && 'delay-400',
                  inView && i === 5 && 'delay-500'
                )}
              >
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/20 group-hover:bg-brand-teal/20 transition-colors duration-300">
                  {Icon && <Icon className="h-6 w-6 text-brand-teal" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
