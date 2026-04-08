import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'L\'Équipe',
  description: 'Découvrez les femmes et hommes qui portent la mission de TEERRA AFRICA sur le terrain.',
};

export default function EquipePage() {
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
          <span className="section-label" style={{ color: '#e9c46a' }}>Celles et ceux qui agissent</span>
          <h1 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800, color: '#ffffff',
            lineHeight: 1.1, margin: '0 auto 1.5rem',
            maxWidth: 700,
          }}>
            L&apos;Équipe
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            Des femmes et des hommes engagés, porteurs d&apos;une même conviction :
            agir concrètement pour un monde plus juste et durable.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRÉSENTATION ÉQUIPE
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '7rem 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span className="section-label">Notre équipe</span>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Les membres</h2>
              <div className="divider divider-center" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="grid-2-to-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>

              {/* Chiffre clé */}
              <div style={{
                background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
                borderRadius: '28px', padding: '3.5rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', minHeight: 280,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: '#b5832a', borderRadius: '50%', opacity: 0.1 }} />
                <span style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: 'clamp(4rem, 8vw, 6rem)',
                  fontWeight: 800, color: '#e9c46a',
                  lineHeight: 1,
                }}>
                  ~20
                </span>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', fontWeight: 600, marginTop: '0.75rem' }}>
                  bénévoles engagés
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '0.4rem' }}>
                  au service des projets TEERRA AFRICA
                </p>
              </div>

              {/* Texte */}
              <div>
                <p style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.75rem' }}>
                  L&apos;équipe multiculturelle développe les projets de TEERRA AFRICA au quotidien.
                  La mixité et l&apos;égalité professionnelle font partie de nos préoccupations.
                </p>
                <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.9 }}>
                  Parce que l&apos;inclusion est source de création de valeurs, nous veillons à donner
                  aux personnes en situation de handicap les mêmes accès aux opportunités.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '2rem' }}>
                  {[
                    { label: 'Équipe multiculturelle', icon: '🌍' },
                    { label: 'Mixité & égalité professionnelle', icon: '⚖️' },
                    { label: 'Inclusion & accessibilité', icon: '🤝' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                      <span style={{ color: '#1b4332', fontWeight: 600, fontSize: '0.9rem' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MÉCÉNAT DE COMPÉTENCES
      ═══════════════════════════════════════ */}
      <section style={{ background: '#ffffff', padding: '7rem 0' }}>
        <div className="container-wide">

          {/* Titre */}
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                fontWeight: 800, color: '#1b4332',
                lineHeight: 1.15,
                display: 'inline-block',
                borderBottom: '4px solid #b5832a',
                paddingBottom: '0.5rem',
              }}>
                TEERRA AFRICA est ouvert au mécénat de compétences
              </h2>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={1}>
            <div style={{
              position: 'relative', width: '100%', height: 'clamp(260px, 45vw, 520px)',
              borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
              marginBottom: '3.5rem',
            }}>
              <Image
                src="/images/ouvert-aux-mecenats.avif"
                alt="TEERRA AFRICA ouvert au mécénat de compétences"
                fill
                className="object-cover"
                style={{
                  objectPosition: 'center center',
                  filter: 'contrast(1.12) saturate(1.15) brightness(1.03)',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                boxShadow: 'inset 0 0 60px rgba(0,0,0,0.15)',
                borderRadius: '24px',
              }} />
            </div>
          </ScrollReveal>

          {/* Texte */}
          <ScrollReveal delay={2}>
            <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.15rem', fontWeight: 700, color: '#1b4332',
                marginBottom: '1.25rem',
              }}>
                Le mécénat de compétences dans une association, c&apos;est quoi ?
              </h3>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.9, marginBottom: '2rem' }}>
                C&apos;est un don en nature : il s&apos;agit pour une entreprise de mettre des collaborateurs
                à disposition d&apos;un organisme d&apos;intérêt général, qui vont mobiliser pendant un temps
                leurs compétences ou leur force de travail.
              </p>

              <p style={{ color: '#1b4332', fontWeight: 600, fontSize: '1rem', marginBottom: '1.25rem' }}>
                Vous pouvez aider l&apos;association grâce à vos compétences de :
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
                {['Community manager', 'Infographiste'].map((competence, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <span style={{
                      width: 10, height: 10, borderRadius: '50%',
                      background: '#b5832a', flexShrink: 0,
                    }} />
                    <span style={{ color: '#374151', fontSize: '0.95rem', fontWeight: 500 }}>{competence}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href="/Guide-pratique-mecenat-competences.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.9rem 2rem', borderRadius: '99px',
                    background: '#1b4332', color: '#ffffff',
                    fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(27,67,50,0.25)',
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  En savoir plus
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
