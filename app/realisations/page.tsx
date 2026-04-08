import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from './data';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Nos réalisations & projets',
  description: 'Découvrez les projets en cours et réalisés par TEERRA AFRICA pour la préservation de l\'environnement.',
};

const projetsEtRealisations = projects.filter(p => p.categorie === 'projet' || p.categorie === 'realisation');
const programmes = projects.filter(p => p.categorie === 'programme');

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
          QUELQUES PROJETS
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '7rem 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div style={{ marginBottom: '4rem' }}>
              <span className="section-label">Nos actions</span>
              <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Projets & réalisations</h2>
              <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75, maxWidth: 560 }}>
                Des actions concrètes sur le terrain, témoins de l&apos;engagement de TEERRA AFRICA
                pour l&apos;environnement et les communautés.
              </p>
              <div className="divider" style={{ marginLeft: 0 }}></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.75rem' }}>
              {projetsEtRealisations.map(project => (
                <article key={project.id} style={{
                  flex: '1 1 300px', maxWidth: 400,
                  background: '#ffffff', borderRadius: '20px', overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}>
                  {project.images[0] && (
                    <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
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
                        background: project.statut === 'en-cours' ? '#2d6a4f' : 'rgba(0,0,0,0.45)',
                        color: '#fff',
                        fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
                        padding: '0.35rem 0.875rem', borderRadius: '99px',
                        display: 'flex', alignItems: 'center', gap: '0.35rem',
                      }}>
                        {project.statut === 'en-cours' && (
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#52b788', display: 'inline-block' }} />
                        )}
                        {project.statut === 'en-cours' ? 'En cours' : '✓ Réalisé'}
                      </span>
                    </div>
                  )}
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginBottom: '0.4rem' }}>
                      {project.lieu} · {project.date}
                    </p>
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
                    {project.partenaires.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
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

      {/* ═══════════════════════════════════════
          NOS PROGRAMMES
      ═══════════════════════════════════════ */}
      {programmes.length > 0 && (
        <section style={{ background: '#ffffff', padding: '7rem 0' }}>
          <div className="container-wide">
            <ScrollReveal>
              <div style={{ marginBottom: '4rem' }}>
                <span className="section-label">Nos programmes</span>
                <h2 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Programmes</h2>
                <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.75, maxWidth: 560 }}>
                  Des programmes structurants pour accompagner, former et mobiliser les citoyens
                  autour des enjeux environnementaux et de solidarité internationale.
                </p>
                <div className="divider" style={{ marginLeft: 0 }}></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {programmes.map((programme, idx) => (
                  programme.images.length > 0 ? (
                    /* ── Avec image : layout image + texte côte à côte ── */
                    <article key={programme.id} className="grid-2-to-1" style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr',
                      gap: '4rem', alignItems: 'center',
                    }}>
                      <div style={{
                        order: idx % 2 === 0 ? 0 : 1,
                        position: 'relative', height: 380, borderRadius: '24px',
                        overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                      }}>
                        <Image src={programme.images[0]} alt={programme.titre} fill className="object-cover" />
                      </div>
                      <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                        <span style={{
                          display: 'inline-block',
                          background: programme.tagColor, color: '#fff',
                          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                          padding: '0.35rem 1rem', borderRadius: '99px', marginBottom: '1.25rem',
                        }}>
                          {programme.tag}
                        </span>
                        <h3 style={{
                          fontFamily: 'var(--font-playfair), serif',
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          fontWeight: 800, color: '#1b4332',
                          lineHeight: 1.2, marginBottom: '1.25rem',
                        }}>
                          {programme.titre}
                        </h3>
                        <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                          {programme.content}
                        </p>
                        <Link href={`/realisations/${programme.id}`} style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                          padding: '0.85rem 1.75rem', borderRadius: '99px',
                          background: '#1b4332', color: '#ffffff',
                          fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
                          boxShadow: '0 6px 18px rgba(27,67,50,0.25)',
                        }}>
                          En savoir plus
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ) : (
                    /* ── Sans image : bloc texte ── */
                    <article key={programme.id} style={{
                      background: '#faf8f3', borderRadius: '24px',
                      padding: '2.5rem 3rem',
                      borderLeft: `4px solid ${programme.tagColor}`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 420px' }}>
                          <span style={{
                            display: 'inline-block',
                            background: programme.tagColor, color: '#fff',
                            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                            padding: '0.35rem 1rem', borderRadius: '99px', marginBottom: '1rem',
                          }}>
                            {programme.tag}
                          </span>
                          <h3 style={{
                            fontFamily: 'var(--font-playfair), serif',
                            fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                            fontWeight: 800, color: '#1b4332',
                            lineHeight: 1.2, marginBottom: '0.4rem',
                          }}>
                            {programme.titre}
                          </h3>
                          {programme.sousTitre && (
                            <p style={{ color: programme.tagColor, fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                              {programme.sousTitre}
                            </p>
                          )}
                          <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                            {programme.content}
                          </p>
                        </div>

                        {programme.objectifs && programme.objectifs.length > 0 && (
                          <div style={{ flex: '1 1 280px' }}>
                            <p style={{
                              fontSize: '0.72rem', fontWeight: 700, color: '#b5832a',
                              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem',
                            }}>
                              Objectifs
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                              {programme.objectifs.map((obj, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: programme.tagColor, flexShrink: 0, marginTop: '0.45rem' }} />
                                  <span style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7 }}>{obj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </article>
                  )
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
