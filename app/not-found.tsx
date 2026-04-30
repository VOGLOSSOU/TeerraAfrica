import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '2rem',
    }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: '#b5832a', borderRadius: '50%', opacity: 0.07 }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 350, height: 350, background: '#52b788', borderRadius: '50%', opacity: 0.07 }} />

      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 560 }}>

        <div style={{ width: 72, height: 72, position: 'relative', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.2)' }}>
          <Image src="/logo.png" alt="TEERRA AFRICA" fill style={{ objectFit: 'contain', padding: 4 }} />
        </div>

        <p style={{ color: '#e9c46a', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Erreur 404
        </p>

        <h1 style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 800, color: '#ffffff',
          lineHeight: 1.15, marginBottom: '1.25rem',
        }}>
          Page introuvable
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
          Retournez à l&apos;accueil pour continuer votre navigation.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.9rem 2rem', borderRadius: '99px',
            background: '#b5832a', color: '#ffffff',
            fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
            boxShadow: '0 6px 20px rgba(181,131,42,0.35)',
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.9rem 2rem', borderRadius: '99px',
            background: 'rgba(255,255,255,0.12)', color: '#ffffff',
            fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.2)',
          }}>
            Nous contacter
          </Link>
        </div>

      </div>
    </section>
  );
}
