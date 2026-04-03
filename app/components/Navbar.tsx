'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/actualites', label: 'Actualités' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const solidBg = scrolled || !isHome;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: solidBg ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: solidBg ? 'blur(12px)' : 'none',
        boxShadow: solidBg ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
        borderBottom: solidBg ? '1px solid rgba(0,0,0,0.06)' : 'none',
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
      }}
    >
      {/* ─── Main bar ─── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            textDecoration: 'none', flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 44, height: 44, position: 'relative',
              borderRadius: '50%', overflow: 'hidden',
              border: `2px solid ${solidBg ? '#2d6a4f' : 'rgba(255,255,255,0.5)'}`,
              flexShrink: 0,
            }}
          >
            <Image src="/logo.png" alt="Teerra Africa" fill style={{ objectFit: 'contain', padding: 2 }} />
          </div>
          <div>
            <p style={{
              color: solidBg ? '#1b4332' : '#ffffff',
              fontWeight: 900, fontSize: '1rem',
              letterSpacing: '-0.02em', lineHeight: 1, margin: 0,
            }}>
              TEERRA
            </p>
            <p style={{
              color: solidBg ? '#b5832a' : '#e9c46a',
              fontWeight: 600, fontSize: '0.65rem',
              letterSpacing: '0.18em', margin: 0, marginTop: 2,
            }}>
              AFRICA
            </p>
          </div>
        </Link>

        {/* ─── Desktop nav ─── */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: active ? 600 : 500,
                  color: active
                    ? '#2d6a4f'
                    : solidBg
                    ? '#374151'
                    : 'rgba(255,255,255,0.9)',
                  background: active
                    ? solidBg
                      ? 'rgba(45,106,79,0.1)'
                      : 'rgba(255,255,255,0.15)'
                    : 'transparent',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* CTA button */}
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              marginLeft: '0.75rem',
              padding: '0.6rem 1.4rem',
              borderRadius: '99px',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)',
              boxShadow: '0 4px 16px rgba(45,106,79,0.35)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Nous rejoindre
          </Link>
        </nav>

        {/* ─── Mobile burger ─── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            display: 'none',
            padding: '0.5rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: solidBg ? '#1b4332' : '#ffffff',
          }}
          className="mobile-burger"
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ─── Mobile menu ─── */}
      {menuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderTop: '1px solid #f3f4f6',
            padding: '1rem 1.5rem 1.5rem',
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.875rem 1rem',
                  marginBottom: '0.25rem',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: active ? 600 : 500,
                  color: active ? '#2d6a4f' : '#374151',
                  background: active ? 'rgba(45,106,79,0.08)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              padding: '0.875rem 1rem',
              marginTop: '0.75rem',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #2d6a4f, #1b4332)',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Nous rejoindre
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
