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
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-slate" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.08)_0%,transparent_70%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Sonar / Radar Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Central droplet icon */}
        <div className="relative">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="relative z-10 animate-float"
          >
            <path
              d="M24 4C24 4 8 22 8 32C8 40.837 15.163 48 24 48C32.837 48 40 40.837 40 32C40 22 24 4 24 4Z"
              fill="url(#heroDroplet)"
              fillOpacity="0.6"
            />
            <defs>
              <linearGradient
                id="heroDroplet"
                x1="24"
                y1="4"
                x2="24"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#48CAE4" />
                <stop offset="100%" stopColor="#00B4D8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Sonar rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-brand-teal/30 animate-sonar-1" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-brand-teal/20 animate-sonar-2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-brand-teal/15 animate-sonar-3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-brand-teal-light/10 animate-sonar-4" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-1.5 text-xs font-medium text-brand-teal-light mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
          Serving Ballantyne &amp; South Charlotte
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight text-balance">
          We find the leak.
          <br />
          <span className="text-gradient-teal">Not your floor.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-200 mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Acoustic sensors and thermal cameras that pinpoint hidden leaks through concrete, soil,
          and walls — so you don&rsquo;t pay for demolition you don&rsquo;t need.
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
