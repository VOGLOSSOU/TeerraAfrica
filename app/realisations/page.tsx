import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from './data';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Nos réalisations & projets',
  description: 'Découvrez les projets en cours et réalisés par TEERRA AFRICA pour la préservation de l\'environnement.',
};

const enCours = projects.filter(p => p.statut === 'en-cours');
const realises = projects.filter(p => p.statut === 'réalisé');

export default function RealisationsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="hero-section" style={{
        paddingTop: '9rem', paddingBottom: '6rem',
        background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: '#b5832a', borderRadius: '50%', opacity: 0.08 }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 280, height: 280, background: '#52b788', borderRadius: '50%', opacity: 0.08 }} />

        <div className="container-wide" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label" style={{ color: '#e9c46a' }}>Ce que nous construisons</span>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, color: '#ffffff',
              lineHeight: 1.1, margin: '0 auto 1.5rem',
              maxWidth: 700,
            }}
          >
            Nos réalisations<br />& projets
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            Des initiatives concrètes sur le terrain, portées par une conviction commune :
            agir aujourd&apos;hui pour préserver demain.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJETS EN COURS
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '7rem 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div style={{ marginBottom: '4rem' }}>
              <span className="section-label">En cours</span>
              <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Projets en cours</h2>
              <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75, maxWidth: 560 }}>
                Ces projets sont actuellement actifs sur le terrain. Ils incarnent l&apos;engagement
                quotidien de TEERRA AFRICA pour l&apos;environnement.
              </p>
              <div className="divider" style={{ marginLeft: 0 }}></div>
            </div>
          </ScrollReveal>

          {enCours.length === 0 ? (
            <ScrollReveal delay={1}>
              <div style={{
                background: '#ffffff', borderRadius: '24px',
                padding: '4rem 2rem', textAlign: 'center',
                border: '2px dashed #e5e7eb',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
                <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
                  Les projets en cours arrivent bientôt…
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={1}>
              <div className="grid-2-to-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                {enCours.map((project, idx) => (
                  <article key={project.id} style={{
                    background: '#ffffff', borderRadius: '24px', overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                    border: '1px solid rgba(0,0,0,0.04)',
                    marginTop: idx % 2 === 1 ? '3rem' : 0,
                  }}>
                    {project.images[0] && (
                      <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                        <Image src={project.images[0]} alt={project.titre} fill className="object-cover" />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,67,50,0.5) 0%, transparent 50%)' }} />
                        <span style={{
                          position: 'absolute', top: '1rem', left: '1rem',
                          background: project.tagColor, color: '#fff',
                          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
                          padding: '0.35rem 0.875rem', borderRadius: '99px',
                        }}>
                          {project.tag}
                        </span>
                        <span style={{
                          position: 'absolute', top: '1rem', right: '1rem',
                          background: '#2d6a4f', color: '#fff',
                          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
                          padding: '0.35rem 0.875rem', borderRadius: '99px',
                          display: 'flex', alignItems: 'center', gap: '0.35rem',
                        }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#52b788', display: 'inline-block' }} />
                          En cours
                        </span>
                      </div>
                    )}
                    <div style={{ padding: '1.75rem' }}>
                      <p style={{ color: '#9ca3af', fontSize: '0.78rem', marginBottom: '0.5rem' }}>
                        {project.lieu} · {project.date}
                      </p>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1b4332', marginBottom: '0.875rem', lineHeight: 1.45 }}>
                        {project.titre}
                      </h3>
                      <p style={{
                        color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.75,
                        display: '-webkit-box', WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical' as const, overflow: 'hidden',
                        marginBottom: '1.25rem',
                      }}>
                        {project.intro}
                      </p>
                      {project.partenaires.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                          {project.partenaires.map(p => (
                            <span key={p} style={{
                              background: 'rgba(45,106,79,0.08)', color: '#2d6a4f',
                              fontSize: '0.72rem', fontWeight: 600,
                              padding: '0.25rem 0.75rem', borderRadius: '99px',
                            }}>
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link href={`/realisations/${project.id}`} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        color: '#2d6a4f', fontWeight: 600, fontSize: '0.875rem',
                        textDecoration: 'none',
                      }}>
                        Voir le projet
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJETS RÉALISÉS
      ═══════════════════════════════════════ */}
      {realises.length > 0 && (
        <section style={{ background: '#ffffff', padding: '7rem 0' }}>
          <div className="container-wide">
            <ScrollReveal>
              <div style={{ marginBottom: '4rem' }}>
                <span className="section-label">Accomplis</span>
                <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Projets réalisés</h2>
                <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75, maxWidth: 560 }}>
                  Des projets menés à leur terme, témoins de l&apos;impact concret de TEERRA AFRICA sur le terrain.
                </p>
                <div className="divider" style={{ marginLeft: 0 }}></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="grid-3-to-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
                {realises.map(project => (
                  <article key={project.id} style={{
                    background: '#faf8f3', borderRadius: '20px', overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                  }}>
                    {project.images[0] && (
                      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                        <Image src={project.images[0]} alt={project.titre} fill className="object-cover" style={{ filter: 'grayscale(20%)' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,67,50,0.3)' }} />
                        <span style={{
                          position: 'absolute', top: '1rem', left: '1rem',
                          background: 'rgba(0,0,0,0.5)', color: '#fff',
                          fontSize: '0.7rem', fontWeight: 700,
                          padding: '0.3rem 0.75rem', borderRadius: '99px',
                        }}>
                          ✓ Réalisé
                        </span>
                      </div>
                    )}
                    <div style={{ padding: '1.5rem' }}>
                      <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.4rem' }}>{project.lieu}</p>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1b4332', marginBottom: '0.6rem', lineHeight: 1.4 }}>
                        {project.titre}
                      </h3>
                      <p style={{
                        color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.7,
                        display: '-webkit-box', WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical' as const, overflow: 'hidden',
                        marginBottom: '1rem',
                      }}>
                        {project.intro}
                      </p>
                      <Link href={`/realisations/${project.id}`} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        color: '#2d6a4f', fontWeight: 600, fontSize: '0.825rem',
                        textDecoration: 'none',
                      }}>
                        Voir le projet
                        <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Vous souhaitez soutenir un projet ?</h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '2.5rem' }}>
              Partenaires, financeurs, bénévoles — rejoignez le mouvement.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: '99px',
                background: '#2d6a4f', color: '#ffffff',
                fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                boxShadow: '0 6px 18px rgba(45,106,79,0.3)',
              }}
            >
              Nous contacter
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
