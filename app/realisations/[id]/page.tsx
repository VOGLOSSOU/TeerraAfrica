import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../data';

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.titre,
    description: project.intro,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section style={{
        position: 'relative', height: '65vh', minHeight: 460,
        display: 'flex', alignItems: 'flex-end',
      }}>
        <Image
          src={project.images[0]}
          alt={project.titre}
          fill
          className="object-cover"
          priority
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(27,67,50,0.95) 0%, rgba(27,67,50,0.4) 55%, transparent 100%)',
        }} />
        <div className="container-wide" style={{ position: 'relative', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span style={{
              background: project.tagColor, color: '#fff',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
              padding: '0.35rem 1rem', borderRadius: '99px',
            }}>
              {project.tag}
            </span>
            <span style={{
              background: project.statut === 'en-cours' ? '#2d6a4f' : 'rgba(255,255,255,0.15)',
              color: '#fff',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
              padding: '0.35rem 1rem', borderRadius: '99px',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
            }}>
              {project.statut === 'en-cours' && (
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#52b788', display: 'inline-block' }} />
              )}
              {project.statut === 'en-cours' ? 'En cours' : '✓ Réalisé'}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800, color: '#ffffff',
            lineHeight: 1.15, marginBottom: '1rem', maxWidth: 720,
          }}>
            {project.titre}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
            {project.lieu} · {project.date}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTENU
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '6rem 0' }}>
        <div className="container-wide">
          <div className="grid-2-to-1" style={{ display: 'grid', gridTemplateColumns: '1fr 0.42fr', gap: '5rem', alignItems: 'start' }}>

            {/* Texte principal */}
            <div>
              <p style={{
                color: '#374151', fontSize: '1.1rem', lineHeight: 1.9,
                fontStyle: 'italic', marginBottom: '2.5rem',
                paddingLeft: '1.5rem',
                borderLeft: '3px solid #b5832a',
              }}>
                {project.intro}
              </p>
              <div style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.95, whiteSpace: 'pre-line' }}>
                {project.content}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Infos projet */}
              <div style={{
                background: '#ffffff', borderRadius: '20px',
                padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid #e5e7eb',
              }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#b5832a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Informations
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Période</p>
                    <p style={{ color: '#1b4332', fontWeight: 600, fontSize: '0.9rem' }}>{project.date}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Lieu</p>
                    <p style={{ color: '#1b4332', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.5 }}>{project.lieu}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Statut</p>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      background: project.statut === 'en-cours' ? 'rgba(45,106,79,0.1)' : 'rgba(181,131,42,0.1)',
                      color: project.statut === 'en-cours' ? '#2d6a4f' : '#b5832a',
                      fontSize: '0.8rem', fontWeight: 700,
                      padding: '0.35rem 0.875rem', borderRadius: '99px',
                    }}>
                      {project.statut === 'en-cours' ? '● En cours' : '✓ Réalisé'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Partenaires */}
              {project.partenaires.length > 0 && (
                <div style={{
                  background: '#ffffff', borderRadius: '20px',
                  padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid #e5e7eb',
                }}>
                  <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#b5832a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                    Partenaires
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {project.partenaires.map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2d6a4f', flexShrink: 0 }} />
                        <span style={{ color: '#374151', fontSize: '0.875rem', fontWeight: 500 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALERIE PHOTOS
      ═══════════════════════════════════════ */}
      {project.images.length > 1 && (
        <section style={{ background: '#ffffff', padding: '5rem 0' }}>
          <div className="container-wide">
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#b5832a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Galerie photos
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: project.images.length === 2
                ? 'repeat(2, 1fr)'
                : project.images.length === 3
                  ? 'repeat(3, 1fr)'
                  : 'repeat(2, 1fr)',
              gap: '1rem',
            }}>
              {project.images.slice(1).map((img, i) => (
                <div key={i} style={{
                  position: 'relative',
                  height: project.images.length >= 4 && i === 0 ? 420 : 280,
                  gridColumn: project.images.length >= 4 && i === 0 ? 'span 2' : 'span 1',
                  borderRadius: '16px', overflow: 'hidden',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.1)',
                }}>
                  <Image src={img} alt={`${project.titre} — photo ${i + 2}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          NAVIGATION BAS DE PAGE
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '3rem 0' }}>
        <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/realisations" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: '#2d6a4f', fontWeight: 600, fontSize: '0.9rem',
            textDecoration: 'none',
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            Tous les projets
          </Link>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1.5rem', borderRadius: '99px',
            background: '#2d6a4f', color: '#ffffff',
            fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
          }}>
            Nous rejoindre
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
