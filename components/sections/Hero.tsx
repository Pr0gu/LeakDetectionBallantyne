'use client';

import { Phone, ArrowDown, ShieldCheck, Clock, Award } from 'lucide-react';
import { SITE } from '@/lib/constants';

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Licensed NC & SC' },
  { icon: Clock, label: '30-Min Response' },
  { icon: Award, label: '5-Star Rated' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Dark overlay — video is global fixed background */}
      <div className="absolute inset-0 bg-brand-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
          Find the leak.
          <br />
          <span className="text-gradient-teal">Save the floor.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-200 mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Ballantyne&rsquo;s 24/7 non-invasive leak detection — we pinpoint the exact source through
          concrete, under your yard, behind walls — without tearing anything up. Free estimates,
          always.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.phoneHref}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-8 py-4 text-base font-bold text-brand-dark phone-glow hover:bg-brand-teal-light transition-all duration-200 w-full sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call {SITE.phone}
          </a>
          <a
            href="#contact"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-teal/30 bg-brand-teal/5 px-8 py-4 text-base font-semibold text-white hover:border-brand-teal/60 hover:bg-brand-teal/10 transition-all duration-200 w-full sm:w-auto"
          >
            Request Free Estimate
          </a>
        </div>

        {/* Trust Badges */}
        <div className="animate-fade-in-up delay-500 mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-gray-400">
              <badge.icon className="h-4 w-4 text-brand-teal" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#services"
          aria-label="Scroll to services"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/30 hover:text-brand-teal hover:border-brand-teal/30 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
