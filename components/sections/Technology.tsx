'use client';

import { Ear, Thermometer, Video, Gauge, type LucideIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { TECHNOLOGIES } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  ear: Ear,
  thermometer: Thermometer,
  video: Video,
  gauge: Gauge,
};

export default function Technology() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="technology"
      className="relative py-24 sm:py-32 bg-brand-dark/93 backdrop-blur-md"
      aria-labelledby="technology-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-3">
              Our Technology
            </p>
            <h2
              id="technology-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance"
            >
              No Digging. <span className="text-gradient-teal">No Damage.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              We use the same detection technology trusted by municipalities and commercial
              facilities — now available for your home. Our non-invasive approach means we find your
              leak without destroying your property.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-extrabold text-brand-teal">98%</p>
                <p className="text-sm text-gray-400 mt-1">Detection Rate</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-brand-teal">0</p>
                <p className="text-sm text-gray-400 mt-1">Unnecessary Holes</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-brand-teal">&lt;2hr</p>
                <p className="text-sm text-gray-400 mt-1">Avg. Detection</p>
              </div>
            </div>
          </div>

          {/* Right: Tech Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TECHNOLOGIES.map((tech, i) => {
              const Icon = ICON_MAP[tech.icon];
              return (
                <div
                  key={tech.title}
                  className={clsx(
                    'card-glow rounded-2xl border border-white/5 bg-brand-slate/50 p-6 transition-all duration-300',
                    inView && 'animate-fade-in-up',
                    inView && i === 1 && 'delay-100',
                    inView && i === 2 && 'delay-200',
                    inView && i === 3 && 'delay-300'
                  )}
                >
                  <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-teal/10 border border-brand-teal/20">
                    {Icon && <Icon className="h-5 w-5 text-brand-teal" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{tech.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
