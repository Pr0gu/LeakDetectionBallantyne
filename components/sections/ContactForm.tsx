'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { SITE } from '@/lib/constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const SERVICE_OPTIONS = [
  'Slab Leak Detection',
  'Water Line Leak Detection',
  'Pool & Spa Leak Detection',
  'Sewer Camera Inspection',
  'Emergency Leak Repair',
  'Full Plumbing Services',
  'Other / Not Sure',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  const inputClasses =
    'w-full rounded-xl border border-white/10 bg-brand-dark/80 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-brand-teal/50 focus:ring-2 focus:ring-brand-teal/20';

  const labelClasses = 'block text-sm font-medium text-gray-300 mb-1.5';

  const errorClasses = 'mt-1 text-xs text-red-400';

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-brand-dark"
      aria-labelledby="contact-heading"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,180,216,0.05)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-3">
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance"
            >
              Request Your Free Leak Detection Estimate
            </h2>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Describe your situation and we&apos;ll get back to you within the hour during business
              hours. For emergencies, call us directly.
            </p>

            {/* Quick contact */}
            <div className="mt-8 space-y-4">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-4 rounded-xl border border-brand-teal/20 bg-brand-teal/5 p-4 hover:bg-brand-teal/10 transition-colors group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors">
                  <Phone className="h-6 w-6 text-brand-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us now</p>
                  <p className="text-lg font-bold text-white">{SITE.phone}</p>
                </div>
              </a>

              <div className="rounded-xl border border-white/5 bg-brand-slate/30 p-4">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Hours: </span>
                  {SITE.hours.weekday} &bull; {SITE.hours.saturday} &bull; {SITE.hours.sunday}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-white/5 bg-brand-slate/30 p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-16 w-16 text-brand-teal mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-gray-400 mb-6">
                  We&apos;ll get back to you within the hour during business hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-brand-teal font-semibold hover:text-brand-teal-light transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name <span className="text-brand-teal">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    className={clsx(inputClasses, errors.name && 'border-red-500/50')}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number <span className="text-brand-teal">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(980) 555-0123"
                    className={clsx(inputClasses, errors.phone && 'border-red-500/50')}
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\d\s()+-]{7,20}$/,
                        message: 'Please enter a valid phone number',
                      },
                    })}
                  />
                  {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={clsx(inputClasses, errors.email && 'border-red-500/50')}
                    {...register('email', {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />
                  {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className={labelClasses}>
                    Service Needed <span className="text-brand-teal">*</span>
                  </label>
                  <select
                    id="service"
                    className={clsx(
                      inputClasses,
                      "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10",
                      errors.service && 'border-red-500/50'
                    )}
                    defaultValue=""
                    {...register('service', {
                      required: 'Please select a service',
                    })}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className={errorClasses}>{errors.service.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Describe Your Issue
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about the leak or plumbing issue you're experiencing..."
                    className={clsx(inputClasses, 'resize-none')}
                    {...register('message')}
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3">
                    <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={clsx(
                    'w-full flex items-center justify-center gap-2 rounded-xl bg-brand-teal px-6 py-4 text-base font-bold text-brand-dark transition-all duration-200',
                    status === 'loading'
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:bg-brand-teal-light phone-glow'
                  )}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
