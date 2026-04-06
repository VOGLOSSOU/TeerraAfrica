'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#0a1f14', position: 'relative', overflow: 'hidden' }}>

      {/* Blobs décoratifs */}
      <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, background: '#2d6a4f', borderRadius: '50%', opacity: 0.06, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 350, height: 350, background: '#b5832a', borderRadius: '50%', opacity: 0.05, pointerEvents: 'none' }} />

      {/* Bande verte top */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, #1b4332, #2d6a4f, #52b788, #b5832a, #e9c46a)' }} />

      {/* Contenu principal */}
      <div className="container-wide" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="grid-4-to-1" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Bloc marque */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', border: '2px solid #2d6a4f', flexShrink: 0, position: 'relative' }}>
                <Image src="/logo.png" alt="Teerra Africa" fill style={{ objectFit: 'contain', padding: 4 }} />
              </div>
              <div>
                <p style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1 }}>TEERRA AFRICA</p>
                <p style={{ color: '#52b788', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', marginTop: 5, textTransform: 'uppercase' }}>
                  Environnement & Durabilité
                </p>
              </div>
            </div>

            <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.85, marginBottom: '2rem', maxWidth: 320 }}>
              Association à but non lucratif fondée en 2020, engagée pour la préservation de l&apos;environnement et la transition écologique.
            </p>

            {/* Réseaux sociaux */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                {
                  href: 'https://www.facebook.com/share/1HPuMCR7Nz/?mibextid=wwXIfr',
                  label: 'Facebook',
                  bg: '#1877f2',
                  icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
                },
                {
                  href: 'https://www.linkedin.com/company/teerraafrica/',
                  label: 'LinkedIn',
                  bg: '#0077b5',
                  icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40, height: 40, borderRadius: '12px',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#6b7280',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = s.bg;
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.border = `1px solid ${s.bg}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280';
                    (e.currentTarget as HTMLAnchorElement).style.border = '1px solid rgba(255,255,255,0.08)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Badge association */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(45,106,79,0.15)', borderRadius: '99px',
              padding: '0.4rem 1rem', border: '1px solid rgba(82,183,136,0.2)',
            }}>
              <span style={{ width: 7, height: 7, background: '#52b788', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ color: '#52b788', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                Association à but non lucratif · 2020
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ color: '#e9c46a', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Navigation
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '/', label: 'Accueil' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/actualites', label: 'Actualités' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{
                    color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                  >
                    <span style={{ width: 4, height: 4, background: '#2d6a4f', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Missions */}
          <div>
            <p style={{ color: '#e9c46a', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Nos Missions
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {['Transition Écologique', 'Préservation de la Biodiversité', 'Agro-écologie', 'Entrepreneuriat Vert'].map((m) => (
                <li key={m} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ width: 4, height: 4, background: '#52b788', borderRadius: '50%', display: 'inline-block', flexShrink: 0, marginTop: 7 }} />
                  <span style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.5 }}>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: '#e9c46a', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Téléphone */}
              <a href="tel:+33784240243" style={{
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
              >
                <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(82,183,136,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="15" height="15" fill="none" stroke="#52b788" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                +33 7 84 24 02 43
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/33784240243" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#25d366')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
              >
                <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(37,211,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="15" height="15" fill="#25d366" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                WhatsApp
              </a>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'rgba(82,183,136,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="15" height="15" fill="none" stroke="#52b788" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  Normandie, France (siège)<br />
                  Afrique de l&apos;Ouest · Bénin<br />
                  Afrique Australe
                </span>
              </div>

              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#2d6a4f', color: '#ffffff',
                padding: '0.7rem 1.25rem', borderRadius: '99px',
                fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none',
                transition: 'background 0.2s', width: 'fit-content',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1b4332')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2d6a4f')}
              >
                Nous contacter
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Séparateur */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* Bottom bar */}
      <div className="container-wide" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <p style={{ color: '#374151', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} <span style={{ color: '#52b788' }}>TEERRA AFRICA</span>. Tous droits réservés.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {['T','E','E','R','R','A'].map((l, i) => (
            <span key={i} style={{
              width: 26, height: 26, borderRadius: '6px',
              background: 'rgba(82,183,136,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#52b788', fontSize: '0.72rem', fontWeight: 800,
            }}>{l}</span>
          ))}
        </div>
      </div>

    </footer>
  );
}
