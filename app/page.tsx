import Image from 'next/image';
import Link from 'next/link';
import {
  IconGlobe, IconBook, IconLeaf, IconPeace,
  IconScale, IconTree, IconBriefcase, IconMapPin,
} from './components/Icons';

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/image-environnement.jpg" alt="Teerra Africa environnement" fill className="object-cover" priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(27,67,50,0.93) 0%, rgba(45,106,79,0.80) 60%, rgba(27,67,50,0.88) 100%)' }} />
        </div>

        <div
          style={{
            position: 'relative', zIndex: 10,
            maxWidth: 1200, margin: '0 auto',
            padding: '0 2rem',
            paddingTop: '8rem', paddingBottom: '5rem',
            width: '100%',
            textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
        >
          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.08,
              marginBottom: '1.75rem',
              maxWidth: 800,
            }}
          >
            Ensemble pour<br />
            la <span style={{ color: '#e9c46a' }}>préservation</span> de notre planète
          </h1>

          {/* Sub */}
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              maxWidth: 540,
              marginBottom: '2.75rem',
            }}
          >
            Une organisation engagée pour la préservation de l&apos;environnement et des écosystèmes.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link
              href="/programmes"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: '99px',
                background: '#b5832a', color: '#ffffff',
                fontWeight: 700, fontSize: '0.9rem',
                boxShadow: '0 8px 24px rgba(181,131,42,0.4)',
                textDecoration: 'none',
              }}
            >
              Découvrir nos programmes
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link
              href="/a-propos"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: '99px',
                background: 'rgba(255,255,255,0.12)', color: '#ffffff',
                fontWeight: 600, fontSize: '0.9rem',
                border: '1px solid rgba(255,255,255,0.3)',
                textDecoration: 'none', backdropFilter: 'blur(8px)',
              }}
            >
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            color: 'rgba(255,255,255,0.5)',
          }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Défiler</span>
            <svg style={{ animation: 'bounce 2s infinite' }} className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEERRA acronyme
      ═══════════════════════════════════════ */}
      <section style={{ background: '#1b4332', padding: '4rem 0' }}>
        <div className="container-wide">
          <p style={{ textAlign: 'center', color: '#52b788', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
            Ce que signifie TEERRA
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {[
              { letter: 'T', word: 'Transition', sub: 'Écologique' },
              { letter: 'E', word: 'Éducation', sub: '' },
              { letter: 'E', word: 'Environnement', sub: '' },
              { letter: 'R', word: 'Renforcement', sub: '' },
              { letter: 'R', word: 'Résilience', sub: '' },
              { letter: 'A', word: 'Autonomie', sub: '' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', minWidth: 90 }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '16px',
                  background: 'linear-gradient(135deg, #b5832a, #8b5e15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                }}>
                  <span style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 900 }}>{item.letter}</span>
                </div>
                <p style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 700 }}>{item.word}</p>
                {item.sub && <p style={{ color: '#52b788', fontSize: '0.7rem' }}>{item.sub}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {[
              { val: '2020', label: 'Année de fondation' },
              { val: '20+', label: 'Projets en cours' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff', borderRadius: '20px',
                  padding: '2.5rem 2rem', textAlign: 'center',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <p style={{ fontSize: '3rem', fontWeight: 900, color: '#2d6a4f', lineHeight: 1 }}>{s.val}</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.75rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSIONS
      ═══════════════════════════════════════ */}
      <section style={{ background: '#ffffff', padding: '7rem 0' }}>
        <div className="container-wide">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Ce que nous faisons</span>
            <h2 className="heading-lg" style={{ marginBottom: 0 }}>Nos Missions</h2>
            <div className="divider divider-center"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {[
              { icon: <IconGlobe size={24} color="#2d6a4f" />, title: 'Transition Écologique', desc: 'Soutenir la préservation des ressources naturelles et promouvoir des pratiques durables pour les générations futures.', accent: '#2d6a4f', accentLight: 'rgba(45,106,79,0.08)' },
              { icon: <IconBook size={24} color="#b5832a" />, title: 'Éducation', desc: 'Former les jeunes et les communautés aux enjeux climatiques, environnementaux et numériques.', accent: '#b5832a', accentLight: 'rgba(181,131,42,0.08)' },
              { icon: <IconLeaf size={24} color="#52b788" />, title: 'Entrepreneuriat Vert', desc: "Accompagner les porteurs de projets innovants dans les secteurs de l'environnement et de l'agriculture.", accent: '#52b788', accentLight: 'rgba(82,183,136,0.08)' },
              { icon: <IconPeace size={24} color="#8b5e15" />, title: 'Non-Violence', desc: 'Agir selon les principes de la non-violence pour construire des sociétés plus justes, solidaires et durables.', accent: '#8b5e15', accentLight: 'rgba(139,94,21,0.08)' },
            ].map((m, i) => (
              <div
                key={i}
                className="card"
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 28px rgba(0,0,0,0.07)',
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: '14px',
                  background: m.accentLight,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '1.75rem',
                }}>
                  {m.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1b4332', marginBottom: '0.875rem' }}>{m.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.75 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          À PROPOS
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '7rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', top: -16, left: -16,
                width: '100%', height: '100%', background: '#2d6a4f',
                borderRadius: '24px', opacity: 0.12,
              }}></div>
              <div style={{ position: 'relative', height: 480, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.15)' }}>
                <Image src="/images/arrosage.jpeg" alt="Teerra Africa en action" fill className="object-cover" />
              </div>
              {/* Floating card */}
              <div style={{
                position: 'absolute', bottom: -20, right: -20,
                background: '#1b4332', color: '#ffffff',
                borderRadius: '20px', padding: '1.5rem 1.75rem',
                boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 900, color: '#e9c46a', lineHeight: 1 }}>170+</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#d1fae5' }}>Jeunes formés<br />au numérique</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label">Qui sommes-nous ?</span>
              <p style={{ fontSize: '0.78rem', color: '#9ca3af', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Association à but non lucratif · Fondée en 2020
              </p>
              <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
                Un réseau solidaire<br />pour l&apos;Afrique
              </h2>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                TEERRA AFRICA est une association à but non lucratif d&apos;intérêt général, née du souhait de professionnels
                de la région Normandie en France de fédérer leurs actions pour apporter leur contribution à l&apos;écosystème
                des affaires en Afrique.
              </p>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                Notre approche est de favoriser l&apos;entrepreneuriat dans les domaines de l&apos;<strong>environnement</strong>, du <strong>climat</strong> et de
                l&apos;<strong>agriculture</strong>, en plaçant la <strong style={{ color: '#2d6a4f' }}>Non-Violence</strong> au cœur de toutes nos actions.
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {[
                  { label: 'Normandie, France' },
                  { label: "Afrique de l'Ouest" },
                  { label: 'Afrique Australe' },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      background: '#ffffff', color: '#374151',
                      padding: '0.5rem 1rem', borderRadius: '99px',
                      fontSize: '0.85rem', border: '1px solid #e5e7eb',
                    }}
                  >
                    <IconMapPin size={14} color="#2d6a4f" />
                    {tag.label}
                  </span>
                ))}
              </div>

              <Link
                href="/a-propos"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.75rem', borderRadius: '99px',
                  background: '#2d6a4f', color: '#ffffff',
                  fontWeight: 600, fontSize: '0.9rem',
                  textDecoration: 'none', boxShadow: '0 6px 18px rgba(45,106,79,0.3)',
                }}
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROGRAMMES
      ═══════════════════════════════════════ */}
      <section style={{ background: '#ffffff', padding: '7rem 0' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Comment nous agissons</span>
            <h2 className="heading-lg" style={{ marginBottom: 0 }}>Nos 3 Programmes</h2>
            <div className="divider divider-center"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
            {[
              { num: '01', icon: <IconScale size={28} color="#e9c46a" />, title: 'Responsabilité Sociétale & Gouvernance', desc: 'Gouvernance inclusive, intégration du genre et droits humains dans les initiatives de développement.' },
              { num: '02', icon: <IconTree size={28} color="#e9c46a" />, title: 'Environnement', desc: 'Préserver la biodiversité, les ressources en eau et les sols. Lutter contre le changement climatique.' },
              { num: '03', icon: <IconBriefcase size={28} color="#e9c46a" />, title: 'Entreprises & Développement', desc: 'Entrepreneuriat vert, éducation numérique et accompagnement des porteurs de projets innovants.' },
            ].map((p, i) => (
              <div
                key={i}
                className="card"
                style={{
                  position: 'relative',
                  borderRadius: '24px', overflow: 'hidden',
                  background: 'linear-gradient(145deg, #1b4332, #2d6a4f)',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(27,67,50,0.25)',
                }}
              >
                <span style={{
                  position: 'absolute', top: '1.5rem', right: '1.5rem',
                  fontSize: '5rem', fontWeight: 900, color: 'rgba(255,255,255,0.06)',
                  lineHeight: 1,
                }}>
                  {p.num}
                </span>
                <div style={{ marginBottom: '1.5rem' }}>{p.icon}</div>
                <p style={{ color: '#e9c46a', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Programme {p.num}
                </p>
                <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/programmes"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2rem', borderRadius: '99px',
                border: '2px solid #2d6a4f', color: '#2d6a4f',
                fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              Voir tous nos programmes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACTUALITÉS
      ═══════════════════════════════════════ */}
      <section style={{ background: '#faf8f3', padding: '7rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Sur le terrain</span>
              <h2 className="heading-lg" style={{ marginBottom: 0 }}>Actualités récentes</h2>
            </div>
            <Link
              href="/actualites"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                color: '#2d6a4f', fontWeight: 600, fontSize: '0.875rem',
                textDecoration: 'none', border: '1.5px solid #2d6a4f',
                padding: '0.6rem 1.25rem', borderRadius: '99px',
              }}
            >
              Voir tout
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {[
              {
                img: '/images/actualites/post4-img1.jpg',
                tag: 'Éducation Numérique',
                tagColor: '#2d6a4f',
                title: '170 jeunes initiés au numérique à Sô-Ava',
                desc: 'Au CEG VEKKY, 170 élèves ont reçu leur attestation de formation grâce au partenariat avec l\'Association Sonagnon et le Ministère du Numérique.',
              },
              {
                img: '/images/actualites/post3-img1.jpeg',
                tag: 'Genre & Inclusion',
                tagColor: '#b5832a',
                title: 'Rencontre internationale sur le genre dans le numérique',
                desc: 'Dans le cadre de la mission Wide & Co au Bénin, échanges décisifs sur l\'autonomisation des femmes dans le numérique et l\'innovation.',
              },
              {
                img: '/images/actualites/post2-img1.jpeg',
                tag: 'Accompagnement Social',
                tagColor: '#52b788',
                title: 'Enregistrement des artisans — projet ARCH',
                desc: 'Accompagnement des artisans de Bohicon dans leur enregistrement au projet ARCH du Ministère des Affaires Sociales.',
              },
            ].map((post, i) => (
              <div
                key={i}
                className="card"
                style={{
                  background: '#ffffff', borderRadius: '20px', overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <Image src={post.img} alt={post.title} fill className="object-cover" />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span style={{
                      background: post.tagColor, color: '#ffffff',
                      fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em',
                      padding: '0.35rem 0.875rem', borderRadius: '99px',
                    }}>
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1b4332', marginBottom: '0.875rem', lineHeight: 1.45 }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.7 }}>{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: '7rem 0', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #1b4332 100%)',
        }} />
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-5rem', right: '-5rem', width: 400, height: 400, background: '#b5832a', borderRadius: '50%', opacity: 0.1 }} />
        <div style={{ position: 'absolute', bottom: '-5rem', left: '-5rem', width: 300, height: 300, background: '#52b788', borderRadius: '50%', opacity: 0.1 }} />

        <div className="container-wide" style={{ position: 'relative', textAlign: 'center' }}>
          <p style={{ color: '#e9c46a', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Rejoignez-nous
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 800, color: '#ffffff',
              lineHeight: 1.15, marginBottom: '1.5rem',
            }}
          >
            Ensemble pour un avenir<br />
            <span style={{ color: '#e9c46a' }}>durable en Afrique</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 3rem' }}>
            Partenaires, bénévoles, experts engagés — nous sommes toujours ouverts à de nouvelles collaborations pour amplifier notre impact.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '1rem 2.25rem', borderRadius: '99px',
                background: '#b5832a', color: '#ffffff',
                fontWeight: 700, fontSize: '0.9rem',
                boxShadow: '0 8px 24px rgba(181,131,42,0.4)',
                textDecoration: 'none',
              }}
            >
              Nous contacter
            </Link>
            <a
              href="https://www.linkedin.com/company/teerraafrica/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '1rem 2.25rem', borderRadius: '99px',
                background: 'rgba(255,255,255,0.1)', color: '#ffffff',
                fontWeight: 600, fontSize: '0.9rem',
                border: '1px solid rgba(255,255,255,0.25)',
                textDecoration: 'none', backdropFilter: 'blur(8px)',
              }}
            >
              Suivre sur LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
