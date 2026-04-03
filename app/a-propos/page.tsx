import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconUsers, IconLeaf, IconLightbulb, IconMapPin,
} from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez TEERRA AFRICA — association fondée en 2020, engagée pour la transition écologique et l\'entrepreneuriat vert en Afrique.',
};

export default function AProposPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section" style={{
        paddingTop: '9rem', paddingBottom: '6rem',
        background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: '#b5832a', borderRadius: '50%', opacity: 0.08 }} />
        <div className="container-wide" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label" style={{ color: '#e9c46a' }}>Notre histoire</span>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, color: '#ffffff',
              lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: 700,
              margin: '0 auto 1.5rem',
            }}
          >
            À propos de TEERRA AFRICA
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 580, margin: '0 auto' }}>
            Une organisation née d&apos;une conviction : la préservation de l&apos;environnement et
            l&apos;engagement collectif peuvent construire un avenir durable pour notre planète.
          </p>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section style={{ background: '#ffffff', padding: '7rem 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div className="grid-2-to-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
              <div>
                <span className="section-label">Notre identité</span>
                <h2 className="heading-lg" style={{ marginBottom: '1.75rem' }}>Qui sommes-nous ?</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#4b5563', fontSize: '1rem', lineHeight: 1.85 }}>
                  <p>
                    <strong style={{ color: '#2d6a4f' }}>TEERRA AFRICA</strong> est une association à but non lucratif d&apos;intérêt général,
                    constituée de spécialistes de l&apos;environnement, de l&apos;éducation, de la formation et de partenaires de
                    l&apos;accompagnement à l&apos;entrepreneuriat innovant.
                  </p>
                  <p>
                    L&apos;association est née en <strong>2020</strong> du souhait de plusieurs acteurs de la région <strong>Normandie en France</strong> de
                    fédérer les actions dans le but de partager leurs expériences pour apporter leur contribution à
                    l&apos;écosystème des affaires en Afrique.
                  </p>
                  <p>
                    Notre approche est de favoriser l&apos;entrepreneuriat dans les domaines de l&apos;<strong>environnement</strong>, du <strong>climat</strong> et de
                    l&apos;<strong>agriculture</strong>. Le réseau se déploie en Afrique Australe et dans la zone ouest africaine, en s&apos;implantant
                    principalement dans les villes de tailles intermédiaires et les provinces rurales.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2.5rem' }}>
                  {[
                    { val: '2020', label: 'Fondée en', icon: '◆' },
                    { val: '20+', label: 'Projets actifs', icon: '◆' },
                  ].map((s, i) => (
                    <div key={i} style={{
                      background: '#ffffff',
                      padding: '1.75rem 1.5rem',
                      borderRadius: '20px',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                    }}>
                      <p style={{
                        fontSize: '2.5rem', fontWeight: 900,
                        color: '#1b4332', lineHeight: 1,
                        letterSpacing: '-0.02em',
                      }}>{s.val}</p>
                      <p style={{
                        color: '#9ca3af', fontSize: '0.8rem',
                        marginTop: '0.6rem', fontWeight: 500,
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                      }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', height: 520, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}>
                  <Image src="/images/who-2.jpg" alt="TEERRA AFRICA" fill className="object-cover" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section style={{
        background: '#1b4332', padding: '6rem 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 700, height: 700, background: '#2d6a4f', borderRadius: '50%', opacity: 0.15 }} />
        </div>
        <div className="container-wide" style={{ position: 'relative' }}>
          <ScrollReveal>
            <div className="grid-3-to-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { num: '01', title: 'Préserver', desc: 'Protéger les écosystèmes, la biodiversité et les ressources naturelles pour les générations futures.' },
                { num: '02', title: 'Agir', desc: 'Intervenir concrètement sur le terrain avec des projets environnementaux à impact mesurable.' },
                { num: '03', title: 'Transmettre', desc: 'Sensibiliser et former les communautés aux enjeux climatiques et écologiques.' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  backdropFilter: 'blur(8px)',
                }}>
                  <p style={{
                    fontSize: '3rem', fontWeight: 900,
                    color: 'rgba(233,196,106,0.2)',
                    lineHeight: 1, marginBottom: '1.25rem',
                    fontFamily: 'var(--font-playfair), serif',
                  }}>{item.num}</p>
                  <h3 style={{
                    fontSize: '1.3rem', fontWeight: 800,
                    color: '#ffffff', marginBottom: '0.875rem',
                    fontFamily: 'var(--font-playfair), serif',
                  }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VALEURS */}
      <section style={{ background: '#faf8f3', padding: '7rem 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-label">Ce qui nous guide</span>
              <h2 className="heading-lg" style={{ marginBottom: 0 }}>Nos valeurs fondamentales</h2>
              <div className="divider divider-center"></div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.75rem' }}>
              {[
                { icon: <IconLeaf size={24} color="#fff" />, title: 'Durabilité', desc: 'Promouvoir une économie circulaire respectueuse de l\'environnement pour les générations futures.' },
                { icon: <IconLightbulb size={24} color="#fff" />, title: 'Innovation', desc: 'Encourager les projets expérimentaux et innovants pour lutter contre le changement climatique.' },
                { icon: <IconUsers size={24} color="#fff" />, title: 'Solidarité', desc: 'Agir en synergie avec les communautés locales pour une gestion durable des ressources naturelles.' },
              ].map((v, i) => (
                <div key={i} className="card" style={{
                  background: '#ffffff', borderRadius: '20px',
                  padding: '2.25rem', border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                  <div style={{
                    width: 52, height: 52, background: '#2d6a4f',
                    borderRadius: '14px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: '1.25rem',
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1b4332', marginBottom: '0.75rem' }}>{v.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ZONES */}
      <section style={{ background: '#ffffff', padding: '7rem 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-label">Où nous intervenons</span>
              <h2 className="heading-lg" style={{ marginBottom: 0 }}>Zones d&apos;intervention</h2>
              <div className="divider divider-center"></div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                { pays: 'France', detail: 'Normandie — Siège social' },
                { pays: 'Bénin', detail: 'Bohicon, Sô-Ava, Cotonou' },
                { pays: "Afrique de l'Ouest", detail: 'Villes intermédiaires et zones rurales' },
                { pays: 'Afrique Australe', detail: 'Extension progressive' },
              ].map((z, i) => (
                <div key={i} className="card" style={{
                  background: '#faf8f3', padding: '2.5rem 1.5rem',
                  borderRadius: '20px', textAlign: 'center',
                  border: '1px solid #e5e7eb',
                }}>
                  <div style={{ width: 52, height: 52, background: '#2d6a4f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <IconMapPin size={24} color="#ffffff" />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1b4332', marginBottom: '0.5rem' }}>{z.pays}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.825rem' }}>{z.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MISSIONS */}
      <section style={{ background: '#faf8f3', padding: '7rem 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div className="grid-2-to-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
              <div>
                <span className="section-label">Nos engagements</span>
                <h2 className="heading-lg" style={{ marginBottom: '2.5rem' }}>Ce que nous défendons</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Soutenir la transition écologique',
                    'Préserver les ressources en eau et la biodiversité',
                    'Encourager l\'agro-écologie et les pratiques durables',
                    'Former à l\'entrepreneuriat vert',
                    'Développer l\'éducation environnementale',
                    'Lutter contre le changement climatique',
                  ].map((m, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                      <span style={{
                        width: 24, height: 24, background: '#2d6a4f', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
                      }}>
                        <svg style={{ width: 12, height: 12, color: '#ffffff' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      <span style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.6 }}>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', height: 500, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}>
                  <Image src="/images/who-1.jpg" alt="Teerra Africa environnement" fill className="object-cover" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,67,50,0.7) 0%, transparent 50%)' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                  <p style={{ color: '#ffffff', fontStyle: 'italic', fontSize: '0.925rem', lineHeight: 1.7 }}>
                    &ldquo;Agir dans une perspective d&apos;entraide et de solidarité en se positionnant comme facilitateur.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Vous souhaitez nous rejoindre ?</h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '2.5rem' }}>Nous sommes toujours ouverts à de nouveaux partenariats et collaborations.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
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
              </Link>
              <Link
                href="/actualites"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.9rem 2rem', borderRadius: '99px',
                  border: '2px solid #2d6a4f', color: '#2d6a4f',
                  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                }}
              >
                Voir nos actualités
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
