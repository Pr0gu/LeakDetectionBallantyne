'use client';

import { Phone, Search, Wrench } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Describe the Problem',
    description:
      'High water bill? Wet spot on the floor? Tell us what you\u2019re seeing. We\u2019ll ask the right questions and dispatch a technician immediately.',
  },
  {
    num: '02',
    icon: Search,
    title: 'We Detect \u2014 No Digging',
    description:
      'Our team arrives with acoustic sensors, thermal cameras, and pressure testing gear. We locate the exact leak point without touching your floors or walls.',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Targeted Repair',
    description:
      'We fix only what\u2019s broken. A 6-inch repair instead of ripping up 200 sq ft of tile. You approve the price first \u2014 always.',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-brand-dark/93 backdrop-blur-md" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-teal">
            How It Works
          </p>
          <h2
            id="how-heading"
            className="text-3xl font-extrabold text-white sm:text-4xl"
          >
            Three steps. Zero guesswork.
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div
            className="absolute top-14 left-[16.5%] right-[16.5%] hidden h-0.5 bg-gradient-to-r from-brand-teal/10 via-brand-teal/30 to-brand-teal/10 md:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-600 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative z-10 mb-5 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-brand-dark-light ring-2 ring-brand-teal/20">
        <span className="text-xs font-bold tracking-widest text-brand-teal">{step.num}</span>
        <step.icon className="mt-1 h-8 w-8 text-brand-teal-light" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-gray-400">{step.description}</p>
    </div>
  );
}
