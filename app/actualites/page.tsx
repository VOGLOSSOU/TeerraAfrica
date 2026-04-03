import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from './data';

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Suivez les actions environnementales de TEERRA AFRICA sur le terrain.',
};

export default function ActualitesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        paddingTop: '9rem', paddingBottom: '6rem',
        background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, left: -60, width: 300, height: 300, background: '#e9c46a', borderRadius: '50%', opacity: 0.07 }} />
        <div className="container-wide" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label" style={{ color: '#e9c46a' }}>Sur le terrain</span>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, color: '#ffffff',
              lineHeight: 1.1, margin: '0 auto 1.5rem',
            }}
          >
            Nos Actualités
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Retrouvez ici nos actions, initiatives et engagements environnementaux sur le terrain.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section style={{ background: '#faf8f3', padding: '6rem 0' }}>
        <div className="container-wide">
          <div className="grid-2-to-1" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            alignItems: 'start',
          }}>
            {posts.map((post, idx) => (
              <article
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 32px rgba(0,0,0,0.08)',
                  marginTop: idx % 2 !== 0 ? '3.5rem' : '0',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 230, overflow: 'hidden' }}>
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(27,67,50,0.55) 0%, transparent 50%)',
                  }} />
                  <span style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: post.tagColor, color: '#ffffff',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
                    padding: '0.35rem 0.875rem', borderRadius: '99px',
                  }}>
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem 2.25rem 2.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ color: '#9ca3af', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <svg style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {post.date}
                    </span>
                    <span style={{ color: '#9ca3af', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <svg style={{ width: 13, height: 13 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {post.lieu}
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: '1.1rem', fontWeight: 700, color: '#1b4332',
                    marginBottom: '0.875rem', lineHeight: 1.4,
                    fontFamily: 'var(--font-playfair), serif',
                  }}>
                    {post.title}
                  </h2>

                  <p style={{
                    color: '#6b7280', fontSize: '0.875rem',
                    lineHeight: 1.8, marginBottom: '1.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                  }}>
                    {post.intro}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {post.partenaires.slice(0, 2).map((p, j) => (
                      <span key={j} style={{
                        background: '#faf8f3', color: '#8b5e15',
                        padding: '0.3rem 0.75rem', borderRadius: '99px',
                        fontSize: '0.75rem', fontWeight: 500,
                      }}>
                        {p}
                      </span>
                    ))}
                    {post.partenaires.length > 2 && (
                      <span style={{
                        background: '#faf8f3', color: '#9ca3af',
                        padding: '0.3rem 0.75rem', borderRadius: '99px',
                        fontSize: '0.75rem',
                      }}>
                        +{post.partenaires.length - 2}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/actualites/${post.id}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      color: '#2d6a4f', fontWeight: 600, fontSize: '0.85rem',
                      textDecoration: 'none',
                    }}
                  >
                    Voir les détails
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSEAUX SOCIAUX */}
      <section style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 className="heading-md" style={{ marginBottom: '0.75rem' }}>Suivez nos actions en temps réel</h2>
          <p style={{ color: '#6b7280', marginBottom: '2.5rem', fontSize: '0.975rem' }}>
            Rejoignez notre communauté sur les réseaux sociaux.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
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
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Suivre sur Facebook
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
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Suivre sur LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
