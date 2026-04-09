'use client';

import { useState } from 'react';
import {
  Phone,
  Droplets,
  Waves,
  Camera,
  Siren,
  Wrench,
  Layers,
  Pipette,
  Clock,
  Timer,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
} from 'lucide-react';
import { formatPhoneNumber } from '@/lib/validations';
import { SITE } from '@/lib/constants';

/* ── Service categories (leak detection focused) ── */
const categories = [
  {
    id: 'leak-detection',
    name: 'Leak Detection',
    description: 'Find hidden leaks',
    Icon: Droplets,
    services: [
      { id: 'slab-leak', name: 'Slab Leak Detection', description: 'Under foundation', Icon: Layers },
      { id: 'water-line', name: 'Water Line Detection', description: 'Underground pipes', Icon: Pipette },
      { id: 'pool-spa', name: 'Pool & Spa Leak', description: 'Dye testing', Icon: Waves },
      { id: 'general-leak', name: 'General Leak Locating', description: 'Walls, ceilings, floors', Icon: Droplets },
    ],
  },
  {
    id: 'inspection',
    name: 'Pipe Inspection',
    description: 'Camera & diagnostics',
    Icon: Camera,
    services: [
      { id: 'sewer-camera', name: 'Sewer Camera Inspection', description: 'HD pipe camera', Icon: Camera },
      { id: 'pipe-locating', name: 'Pipe Locating', description: 'Trace underground lines', Icon: Layers },
      { id: 'pressure-test', name: 'Pressure Testing', description: 'Isolate leak segment', Icon: Pipette },
      { id: 'thermal-scan', name: 'Thermal Imaging Scan', description: 'Infrared detection', Icon: Zap },
    ],
  },
  {
    id: 'emergency',
    name: 'Emergency',
    description: 'Urgent leak repair',
    Icon: Siren,
    services: [
      { id: 'burst-pipe', name: 'Burst Pipe', description: 'Immediate response', Icon: AlertTriangle },
      { id: 'active-leak', name: 'Active Water Leak', description: 'Stop the damage', Icon: Droplets },
      { id: 'flooding', name: 'Flooding / Water Damage', description: 'Water mitigation', Icon: Waves },
      { id: 'sewer-backup', name: 'Sewer Backup', description: 'Health hazard', Icon: Siren },
    ],
  },
  {
    id: 'plumbing',
    name: 'Plumbing Repair',
    description: 'Full plumbing services',
    Icon: Wrench,
    services: [
      { id: 'pipe-repair', name: 'Pipe Repair', description: 'Fix damaged pipes', Icon: Wrench },
      { id: 'water-heater', name: 'Water Heater', description: 'Repair or replace', Icon: Zap },
      { id: 'drain-cleaning', name: 'Drain Cleaning', description: 'Clear clogs', Icon: Pipette },
      { id: 'repiping', name: 'Repiping', description: 'Whole-house upgrade', Icon: Layers },
    ],
  },
];

const urgencyOptions = [
  { id: 'routine', label: 'Routine', description: 'Within 1–2 days', Icon: Clock },
  { id: 'priority', label: 'Priority', description: 'Within 24 hours', Icon: Timer },
  { id: 'urgent', label: 'Urgent', description: 'Same day', Icon: Zap },
  { id: 'emergency', label: 'Emergency', description: 'Immediate help', Icon: Siren },
];

type Step = 'category' | 'service' | 'urgency' | 'contact';

interface SelectedCategory { id: string; name: string; services: typeof categories[0]['services'] }
interface SelectedService { id: string; name: string }

export default function QuoteCalculator() {
  const [step, setStep] = useState<Step>('category');
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory | null>(null);
  const [selectedService, setSelectedService] = useState<SelectedService | null>(null);
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleBack = () => {
    if (step === 'contact') setStep('urgency');
    else if (step === 'urgency') { setStep('service'); setSelectedService(null); }
    else if (step === 'service') { setStep('category'); setSelectedCategory(null); }
  };

  const handleReset = () => {
    setStep('category');
    setSelectedCategory(null);
    setSelectedService(null);
    setSelectedUrgency('');
    setForm({ name: '', phone: '', email: '', address: '', message: '' });
    setSubmitted(false);
    setError('');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: name === 'phone' ? formatPhoneNumber(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) { setError('Enter a valid 10-digit phone number'); setSubmitting(false); return; }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: selectedService?.name || '', urgency: selectedUrgency }),
      });
      if (res.ok) { setSubmitted(true); }
      else { const d = await res.json(); throw new Error(d.error || 'Failed to send'); }
    } catch (err) {
      setError(`${err instanceof Error ? err.message : 'Failed to send'}. Call us at ${SITE.phone}.`);
    } finally { setSubmitting(false); }
  };

  /* ── Success ── */
  if (submitted) {
    return (
      <div className="flex flex-col justify-center rounded-2xl border border-brand-teal/20 bg-brand-dark-light/80 backdrop-blur-md p-8 min-h-[520px]">
        <div className="text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-400" />
          <h3 className="text-xl font-bold text-white mb-2">Request Sent!</h3>
          <p className="text-sm text-gray-400 mb-4">We&rsquo;ll respond within 2 hours during business hours.</p>
          <div className="rounded-xl bg-brand-dark/60 p-4 mb-4 text-left">
            <p className="text-xs font-semibold text-gray-300 mb-2">Your FREE estimate includes:</p>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {['Full inspection of your leak or plumbing issue', 'Detailed written quote — all costs upfront', 'No obligation — zero pressure to proceed'].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            Need immediate help?{' '}
            <a href={SITE.phoneHref} className="font-bold text-brand-teal hover:underline">{SITE.phone}</a>
          </p>
          <button onClick={handleReset} className="text-sm text-brand-teal hover:underline">Submit another request</button>
        </div>
      </div>
    );
  }

  /* ── Calculator ── */
  const stepNum = step === 'category' ? 1 : step === 'service' ? 2 : step === 'urgency' ? 3 : 4;

  return (
    <div className="flex flex-col rounded-2xl border border-brand-teal/20 bg-brand-dark-light/80 backdrop-blur-md p-6 sm:p-8 min-h-[520px]">
      {/* Header */}
      <div className="mb-1 text-center">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          100% Free
        </div>
        <h3 className="text-xl font-bold text-white">
          {step === 'contact' ? 'Almost Done!' : 'Get Your Free Quote'}
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Step {stepNum} of 4:{' '}
          {step === 'category' && 'Select service category'}
          {step === 'service' && 'Choose specific service'}
          {step === 'urgency' && 'When do you need service?'}
          {step === 'contact' && 'Your contact information'}
        </p>
        {/* Progress bar */}
        <div className="mt-3 h-1 w-full rounded-full bg-brand-dark/60">
          <div
            className="h-1 rounded-full bg-brand-teal transition-all duration-300"
            style={{ width: `${stepNum * 25}%` }}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        {/* Step 1: Categories */}
        {step === 'category' && (
          <div className="grid grid-cols-2 gap-3 flex-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => { setSelectedCategory(cat); setStep('service'); }}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-brand-dark/40 p-4 text-center transition-all hover:border-brand-teal/40 hover:bg-brand-teal/5"
              >
                <cat.Icon className="h-8 w-8 text-brand-teal" />
                <span className="text-sm font-bold text-white">{cat.name}</span>
                <span className="text-xs text-gray-500">{cat.description}</span>
              </button>
            ))}
          </div>
        )}

        {/* Step 2: Services */}
        {step === 'service' && selectedCategory && (
          <>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {selectedCategory.services.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => { setSelectedService(svc); setStep('urgency'); }}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-brand-dark/40 p-4 text-center transition-all hover:border-brand-teal/40 hover:bg-brand-teal/5"
                >
                  <svc.Icon className="h-8 w-8 text-brand-teal" />
                  <span className="text-sm font-bold text-white">{svc.name}</span>
                  <span className="text-xs text-gray-500">{svc.description}</span>
                </button>
              ))}
            </div>
            <button type="button" onClick={handleBack} className="mt-3 flex items-center gap-1 text-sm text-gray-500 hover:text-brand-teal">
              <ArrowLeft className="h-3 w-3" /> Back
            </button>
          </>
        )}

        {/* Step 3: Urgency */}
        {step === 'urgency' && (
          <>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {urgencyOptions.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => { setSelectedUrgency(u.id); setStep('contact'); }}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-brand-dark/40 p-4 text-center transition-all hover:border-brand-teal/40 hover:bg-brand-teal/5"
                >
                  <u.Icon className="h-8 w-8 text-brand-teal" />
                  <span className="text-sm font-bold text-white">{u.label}</span>
                  <span className="text-xs text-gray-500">{u.description}</span>
                </button>
              ))}
            </div>
            <button type="button" onClick={handleBack} className="mt-3 flex items-center gap-1 text-sm text-gray-500 hover:text-brand-teal">
              <ArrowLeft className="h-3 w-3" /> Back
            </button>
          </>
        )}

        {/* Step 4: Contact */}
        {step === 'contact' && (
          <>
            {error && (
              <div className="mb-3 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="calc-name" className="mb-1 block text-xs font-semibold text-gray-400">Full Name *</label>
                <input id="calc-name" name="name" required value={form.name} onChange={handleInput}
                  className="w-full rounded-lg border border-white/10 bg-brand-dark/60 px-3 py-2.5 text-sm text-white placeholder:text-gray-600 focus:border-brand-teal/50 focus:outline-none"
                  placeholder="Your full name" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="calc-phone" className="mb-1 block text-xs font-semibold text-gray-400">Phone *</label>
                  <input id="calc-phone" name="phone" type="tel" required value={form.phone} onChange={handleInput}
                    className="w-full rounded-lg border border-white/10 bg-brand-dark/60 px-3 py-2.5 text-sm text-white placeholder:text-gray-600 focus:border-brand-teal/50 focus:outline-none"
                    placeholder="(980) 555-0123" />
                </div>
                <div>
                  <label htmlFor="calc-email" className="mb-1 block text-xs font-semibold text-gray-400">Email *</label>
                  <input id="calc-email" name="email" type="email" required value={form.email} onChange={handleInput}
                    className="w-full rounded-lg border border-white/10 bg-brand-dark/60 px-3 py-2.5 text-sm text-white placeholder:text-gray-600 focus:border-brand-teal/50 focus:outline-none"
                    placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="calc-address" className="mb-1 block text-xs font-semibold text-gray-400">Service Address *</label>
                <input id="calc-address" name="address" required value={form.address} onChange={handleInput}
                  className="w-full rounded-lg border border-white/10 bg-brand-dark/60 px-3 py-2.5 text-sm text-white placeholder:text-gray-600 focus:border-brand-teal/50 focus:outline-none"
                  placeholder="Street, City, State" />
              </div>
              <div>
                <label htmlFor="calc-message" className="mb-1 block text-xs font-semibold text-gray-400">Describe Your Issue *</label>
                <textarea id="calc-message" name="message" required rows={2} value={form.message} onChange={handleInput}
                  className="w-full rounded-lg border border-white/10 bg-brand-dark/60 px-3 py-2.5 text-sm text-white placeholder:text-gray-600 focus:border-brand-teal/50 focus:outline-none resize-none"
                  placeholder="What are you experiencing?" />
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={handleBack}
                  className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-400 hover:border-brand-teal/30 hover:text-white transition">
                  <ArrowLeft className="inline h-3 w-3 mr-1" />Back
                </button>
                <button type="submit" disabled={submitting}
                  className="flex-1 rounded-lg bg-brand-teal py-2.5 text-sm font-bold text-brand-dark transition hover:bg-brand-teal-light disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? 'Sending...' : 'Get Your Quote'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* Emergency call — steps 1-3 only */}
      {step !== 'contact' && (
        <div className="mt-auto space-y-2 pt-4">
          <a
            href={SITE.phoneHref}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-teal py-3 text-sm font-bold text-brand-dark phone-glow transition hover:bg-brand-teal-light"
          >
            <Phone className="h-4 w-4" />
            Call for Emergencies: {SITE.phone}
          </a>
          <p className="text-center text-xs text-gray-600">
            Or continue for a <strong className="text-gray-400">written quote</strong>
          </p>
        </div>
      )}
    </div>
  );
}
