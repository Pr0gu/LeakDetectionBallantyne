import { Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';
import FooterAreas from './FooterAreas';
import { SITE, SERVICE_AREAS } from '@/lib/constants';

function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area.name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '23:59',
        description: 'Emergency service only',
      },
    ],
    priceRange: '$$',
    image: `${SITE.url}/og-image.jpg`,
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leak Detection & Plumbing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Slab Leak Detection',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Water Line Leak Detection',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sewer Camera Inspection',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Leak Repair',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <LocalBusinessJsonLd />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="sm" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Professional leak detection serving Ballantyne and the greater Charlotte area.
              Advanced technology, honest pricing, fast response.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <FooterAreas />
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-teal transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-teal shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand-teal transition-colors"
                >
                  <Mail className="h-4 w-4 text-brand-teal shrink-0" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="h-4 w-4 text-brand-teal shrink-0" />
                {SITE.hours.weekday}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="h-4 w-4 text-brand-teal shrink-0" />
                {SITE.hours.saturday}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="h-4 w-4 text-brand-teal shrink-0" />
                {SITE.hours.sunday}
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-teal/10 border border-brand-teal/20 px-4 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-teal/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">Licensed &amp; Insured &bull; NC &amp; SC</p>
        </div>
      </div>
    </footer>
  );
}
