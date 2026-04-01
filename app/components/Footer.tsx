'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#0f2d1e' }}>
      {/* Top section */}
      <div className="container-wide" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

          {/* Brand block */}
          <div style={{ maxWidth: 420 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
              <div
                className="relative rounded-full overflow-hidden flex-shrink-0"
                style={{ width: 52, height: 52, border: '2px solid #2d6a4f' }}
              >
                <Image src="/logo.png" alt="Teerra Africa" fill className="object-contain p-1" />
              </div>
              <div>
                <p style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.125rem', lineHeight: 1 }}>TEERRA AFRICA</p>
                <p style={{ color: '#52b788', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', marginTop: 4 }}>
                  La Non-Violence en Action
                </p>
              </div>
            </div>

            <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              Association à but non lucratif fondée en 2020, TEERRA AFRICA fédère des experts
              en environnement, éducation et entrepreneuriat pour bâtir un avenir durable en Afrique.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                {
                  href: 'https://www.facebook.com/share/1HPuMCR7Nz/?mibextid=wwXIfr',
                  label: 'Facebook',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.linkedin.com/company/teerraafrica/',
                  label: 'LinkedIn',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center transition-colors duration-200"
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)',
                    color: '#9ca3af',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#b5832a';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom links + contact in a row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Navigation */}
            <div>
              <p style={{ color: '#e9c46a', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Navigation
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { href: '/', label: 'Accueil' },
                  { href: '/a-propos', label: 'À propos' },
                  { href: '/programmes', label: 'Nos Programmes' },
                  { href: '/actualites', label: 'Actualités' },
                  { href: '/contact', label: 'Contact' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }}
                      className="transition-colors duration-200 hover:!text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programmes */}
            <div>
              <p style={{ color: '#e9c46a', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Programmes
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['RSE & Gouvernance', 'Environnement', 'Entreprises & Dev.'].map((p) => (
                  <li key={p}>
                    <Link
                      href="/programmes"
                      style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }}
                      className="transition-colors duration-200 hover:!text-white"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p style={{ color: '#e9c46a', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Contact
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#52b788' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href="tel:+33784240243" style={{ color: '#9ca3af', fontSize: '0.875rem', textDecoration: 'none' }} className="hover:!text-white transition-colors">
                    +33 7 84 24 02 43
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#52b788' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Normandie, France<br />Afrique de l'Ouest & Australe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div
          className="container-wide"
          style={{
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <p style={{ color: '#6b7280', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} TEERRA AFRICA. Tous droits réservés.
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>
            <span style={{ color: '#52b788' }}>T</span>ransition ·{' '}
            <span style={{ color: '#52b788' }}>E</span>ducation ·{' '}
            <span style={{ color: '#52b788' }}>E</span>nvironnement ·{' '}
            <span style={{ color: '#52b788' }}>R</span>enforcement ·{' '}
            <span style={{ color: '#52b788' }}>R</span>ésilience ·{' '}
            <span style={{ color: '#52b788' }}>A</span>utonomie
          </p>
        </div>
      </div>
    </footer>
  );
}
