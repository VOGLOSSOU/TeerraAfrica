import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez TEERRA AFRICA — association engagée pour la préservation de l\'environnement.',
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section" style={{
        paddingTop: '9rem', paddingBottom: '6rem',
        background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: '#b5832a', borderRadius: '50%', opacity: 0.08 }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 280, height: 280, background: '#e9c46a', borderRadius: '50%', opacity: 0.07 }} />
        <div className="container-wide" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label" style={{ color: '#e9c46a' }}>Échangeons</span>
          <h1 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800, color: '#ffffff',
            lineHeight: 1.1, margin: '0 auto 1.5rem',
          }}>
            Contactez-nous
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Vous avez un projet, une question ou souhaitez rejoindre notre réseau ?
            Nous serons ravis d&apos;échanger avec vous.
          </p>
        </div>
      </section>

      {/* COORDONNÉES */}
      <section style={{ background: '#faf8f3', padding: '7rem 0' }}>
        <div className="container-wide">

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Nos coordonnées</span>
            <h2 className="heading-lg" style={{ marginBottom: 0 }}>Entrons en contact</h2>
            <div className="divider divider-center" />
          </div>

          {/* Cartes contact */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.75rem', marginBottom: '5rem' }}>

            {/* Téléphone */}
            <a href="tel:+33784240243" style={{ textDecoration: 'none', flex: '1 1 260px', maxWidth: 320 }}>
              <div style={{
                background: '#ffffff', borderRadius: '24px',
                padding: '2.5rem 2rem', textAlign: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                border: '2px solid transparent',
                transition: 'border-color 0.2s',
                height: '100%',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '18px',
                  background: 'rgba(45,106,79,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem', color: '#2d6a4f',
                }}>
                  <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Téléphone
                </p>
                <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1b4332', marginBottom: '0.4rem' }}>
                  +33 7 84 24 02 43
                </p>
                <p style={{ fontSize: '0.825rem', color: '#9ca3af' }}>Du lundi au vendredi</p>
              </div>
            </a>

            {/* Adresse */}
            <div style={{ flex: '1 1 260px', maxWidth: 320 }}>
              <div style={{
                background: '#ffffff', borderRadius: '24px',
                padding: '2.5rem 2rem', textAlign: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                height: '100%',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '18px',
                  background: 'rgba(181,131,42,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem', color: '#b5832a',
                }}>
                  <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Siège social
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1b4332', marginBottom: '0.4rem' }}>
                  Normandie, France
                </p>
                <p style={{ fontSize: '0.825rem', color: '#9ca3af' }}>France · Bénin · Zambie</p>
              </div>
            </div>

          </div>

          {/* Réseaux sociaux */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2d6a4f', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Suivez-nous
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.facebook.com/share/1HPuMCR7Nz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.875rem 1.75rem', borderRadius: '99px',
                  background: '#1877f2', color: '#ffffff',
                  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(24,119,242,0.3)',
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/teerraafrica/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.875rem 1.75rem', borderRadius: '99px',
                  background: '#0077b5', color: '#ffffff',
                  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0,119,181,0.3)',
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1b4332', padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <p style={{ color: '#e9c46a', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Rejoignez-nous
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 800, color: '#ffffff',
            lineHeight: 1.2, marginBottom: '1rem',
          }}>
            Ensemble pour un avenir durable
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.975rem', maxWidth: 500, margin: '0 auto' }}>
            Spécialistes de l&apos;environnement, experts en transition écologique, porteurs de projets — rejoignez notre réseau.
          </p>
        </div>
      </section>
    </>
  );
}
