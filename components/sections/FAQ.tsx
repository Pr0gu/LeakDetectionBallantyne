'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { SITE } from '@/lib/constants';

const faqs = [
  {
    q: 'How do I know if I have a slab leak?',
    a: 'Common signs include an unexplained water bill spike, warm spots on your floor, the sound of running water when nothing is on, or cracks forming in your foundation. If you notice any of these, call us for a free assessment.',
  },
  {
    q: 'Will you need to dig up my floor or yard?',
    a: 'No. We use non-invasive detection — acoustic sensors, thermal cameras, and pressure testing — to pinpoint the exact leak location. We only dig or cut where the leak actually is, which is typically a small repair area.',
  },
  {
    q: 'How much does leak detection cost in Charlotte?',
    a: 'We provide free estimates. You only pay once you accept the quote. Detection costs vary based on the type and complexity of the leak, but we always give you the price upfront before starting any work.',
  },
  {
    q: 'Is water leak damage covered by homeowner insurance?',
    a: 'In many cases, yes — sudden and accidental water damage is typically covered by standard homeowner policies. We work with insurance adjusters and can provide the documentation they need for your claim.',
  },
  {
    q: 'How long does leak detection take?',
    a: 'Most residential leak detections take 1-3 hours. Simple leaks can be located in under an hour. Complex multi-point leaks in older homes or large properties may take longer.',
  },
  {
    q: 'Do you offer emergency leak detection?',
    a:
      'Yes — 24/7, including weekends and holidays. For active leaks, we typically arrive within 30 minutes in the Ballantyne area. Call ' +
      SITE.phone +
      ' anytime.',
  },
  {
    q: 'Can you detect pool and spa leaks?',
    a: 'Absolutely. We use dye testing, pressure testing, and acoustic detection to find pool and spa leaks in plumbing lines, returns, drains, and shell cracks — without draining the pool.',
  },
  {
    q: 'Do you install leak detection sensors?',
    a: 'Yes. We install and configure smart water monitoring systems like Moen Flo and Phyn that detect leaks in real-time and can automatically shut off your water supply to prevent damage while you\u2019re away.',
  },
];

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" className="section-padding bg-transparent" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-12 text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-teal">FAQ</p>
          <h2 id="faq-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-xl border border-white/5 bg-transparent-light/50 transition-all duration-500 ${
        open ? 'border-brand-teal/20' : ''
      } ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white pr-4">{faq.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-teal transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60 pb-5' : 'max-h-0'
        }`}
      >
        <p className="px-6 text-sm leading-relaxed text-gray-400">{faq.a}</p>
      </div>
    </div>
  );
}
