'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/lib/constants';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#technology', label: 'Technology' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#areas', label: 'Service Areas' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative z-50"
          >
            <Logo size="sm" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-brand-teal transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Phone CTA */}
          <a
            href={SITE.phoneHref}
            className="hidden lg:flex items-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-sm font-bold text-brand-dark phone-glow hover:bg-brand-teal-light transition-all duration-200"
          >
            <Phone className="h-4 w-4" />
            <span>{SITE.phone}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 lg:hidden p-2 text-white"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-dark/98 backdrop-blur-lg"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Content */}
        <nav
          className="relative z-10 flex flex-col items-center justify-center h-full gap-6"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-2xl font-semibold text-white hover:text-brand-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <a
            href={SITE.phoneHref}
            className="mt-6 flex items-center gap-3 rounded-full bg-brand-teal px-8 py-4 text-lg font-bold text-brand-dark phone-glow"
          >
            <Phone className="h-5 w-5" />
            <span>{SITE.phone}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
