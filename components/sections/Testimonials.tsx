'use client';

import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { TESTIMONIALS } from '@/lib/constants';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={clsx(
            'h-4 w-4',
            i < rating ? 'fill-brand-teal text-brand-teal' : 'fill-gray-600 text-gray-600'
          )}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="reviews"
      className="relative py-24 sm:py-32 bg-brand-dark/95 backdrop-blur-md"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-3">
            Customer Reviews
          </p>
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance"
          >
            Trusted by Ballantyne Homeowners
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={clsx(
                'relative rounded-2xl border border-white/5 bg-brand-dark/60 p-8 transition-all duration-300 hover:border-brand-teal/20',
                inView && 'animate-fade-in-up',
                inView && i === 1 && 'delay-100',
                inView && i === 2 && 'delay-200'
              )}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-brand-teal/20 mb-4" />

              {/* Stars */}
              <StarRating rating={testimonial.rating} />

              {/* Text */}
              <blockquote className="mt-4 text-gray-300 text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-teal/10 border border-brand-teal/20">
                  <span className="text-sm font-bold text-brand-teal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
