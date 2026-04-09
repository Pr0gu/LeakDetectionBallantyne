'use client';

import { ShieldCheck, Clock, BadgeCheck, DollarSign, type LucideIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { WHY_CHOOSE_US } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  clock: Clock,
  'badge-check': BadgeCheck,
  'dollar-sign': DollarSign,
};

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 bg-brand-slate/90 backdrop-blur-sm"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance"
          >
            The Ballantyne Leak Detection Advantage
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.title}
                className={clsx(
                  'group relative rounded-2xl border border-white/5 bg-brand-dark/60 p-8 text-center transition-all duration-300 hover:border-brand-teal/20',
                  inView && 'animate-fade-in-up',
                  inView && i === 1 && 'delay-100',
                  inView && i === 2 && 'delay-200',
                  inView && i === 3 && 'delay-300'
                )}
              >
                {/* Icon */}
                <div className="mx-auto mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-teal/10 border border-brand-teal/20 group-hover:bg-brand-teal/20 transition-colors duration-300">
                  {Icon && <Icon className="h-7 w-7 text-brand-teal" />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
