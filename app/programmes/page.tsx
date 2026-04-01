import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconScale, IconTree, IconBriefcase,
  IconDroplet, IconBolt, IconTrash, IconWheat,
  IconGlobe, IconBuilding, IconCar, IconMonitor,
} from '../components/Icons';

export const metadata: Metadata = {
  title: 'Nos Programmes',
  description: 'Les 3 programmes d\'intervention de TEERRA AFRICA : Responsabilité Sociétale & Gouvernance, Environnement, Entreprises & Développement.',
};

const programmes = [
  {
    num: '01',
    icon: <IconScale size={28} color="#ffffff" />,
    title: 'Responsabilité Sociétale & Gouvernance',
    desc: 'Promouvoir une gouvernance inclusive et transparente. Intégrer le genre, les droits humains et la participation citoyenne dans les initiatives de développement.',
    actions: [
      'Intégration de la dimension genre dans les projets',
      'Sensibilisation aux biais liés à l\'intelligence artificielle',
      'Promotion de la masculinité positive et du respect',
      'Présence dans les espaces de décision technologique',
      'Formation aux outils de gouvernance participative',
    ],
    partenaires: ['Women In Tech Bénin', 'LuxDev – Ambassade du Luxembourg', 'Women Empowerment', 'Simplon Bénin'],
    img: '/images/actualites/post3-img2.jpeg',
    gradient: 'linear-gradient(135deg, #1b4332, #2d6a4f)',
  },
  {
    num: '02',
    icon: <IconTree size={28} color="#ffffff" />,
    title: 'Environnement',
    desc: 'Préserver la biodiversité, les ressources en eau et les sols. Lutter contre le changement climatique par des actions expérimentales et innovantes sur le terrain.',
    actions: [
      'Préservation des ressources en eau',
      'Encouragement de l\'agro-écologie',
      'Lutte contre le changement climatique',
      'Gestion et revalorisation des déchets',
      'Éco-construction et mobilité durable',
    ],
    partenaires: ['Collectivités locales', 'Associations environnementales', 'Experts techniques', 'Ministère de l\'Environnement'],
    img: '/images/arrosage.jpeg',
    gradient: 'linear-gradient(135deg, #2d6a4f, #52b788)',
  },
  {
    num: '03',
    icon: <IconBriefcase size={28} color="#ffffff" />,
    title: 'Entreprises & Développement',
    desc: 'Former à l\'entrepreneuriat vert, accompagner des projets innovants, développer l\'éducation numérique et l\'économie circulaire dans les villes et provinces rurales.',
    actions: [
      'Formation à l\'entrepreneuriat vert',
      'Accompagnement des porteurs de projets',
      'Initiation au numérique pour les jeunes',
      'Enregistrement et formalisation des artisans',
      'Développement de l\'économie circulaire',
    ],
    partenaires: ['Ministère du Numérique', 'Association Sonagnon', 'AFD', 'Réseau Alumnis Bénin'],
    img: '/images/actualites/post4-img2.jpg',
    gradient: 'linear-gradient(135deg, #8b5e15, #b5832a)',
  },
];

export default function ProgrammesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        paddingTop: '9rem', paddingBottom: '6rem',
        background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, background: '#b5832a', borderRadius: '50%', opacity: 0.08 }} />
        <div className="container-wide" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#e9c46a' }}>Comment nous agissons</span>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, color: '#ffffff',
              lineHeight: 1.1, marginBottom: '1.5rem',
            }}
          >
            Nos Programmes d&apos;Intervention
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            L&apos;équipe travaille sur une vingtaine de projets autour de 3 programmes structurants.
            La Non-Violence est transversale à ces trois programmes.
          </p>
        </div>
      </section>

      {/* THÉMATIQUES */}
      <section style={{ background: '#faf8f3', padding: '3.5rem 0' }}>
        <div className="container-wide">
          <p style={{ textAlign: 'center', color: '#2d6a4f', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            Nos thématiques de travail
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {[
              { icon: <IconDroplet size={16} />, label: 'Eau' },
              { icon: <IconBolt size={16} />, label: 'Énergie' },
              { icon: <IconTrash size={16} />, label: 'Déchets' },
              { icon: <IconWheat size={16} />, label: 'Agriculture & Sols' },
              { icon: <IconGlobe size={16} />, label: 'Biodiversité' },
              { icon: <IconBuilding size={16} />, label: 'Éco-construction' },
              { icon: <IconCar size={16} />, label: 'Mobilité Durable' },
              { icon: <IconMonitor size={16} />, label: 'RSE & Numérique' },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: '#ffffff', padding: '0.625rem 1.125rem',
                  borderRadius: '99px', fontSize: '0.875rem', fontWeight: 500,
                  color: '#374151', border: '1px solid #e5e7eb',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES DÉTAILLÉS */}
      <section style={{ background: '#ffffff', padding: '6rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {programmes.map((prog, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                  direction: i % 2 === 1 ? 'rtl' : 'ltr',
                }}
              >
                {/* Image */}
                <div style={{ direction: 'ltr', position: 'relative' }}>
                  <div style={{ position: 'relative', height: 380, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 16px 50px rgba(0,0,0,0.12)' }}>
                    <Image src={prog.img} alt={prog.title} fill className="object-cover" />
                    <div style={{ position: 'absolute', inset: 0, background: prog.gradient, opacity: 0.45 }} />
                    <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                      <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{prog.icon}</div>
                    </div>
                    <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}>
                      <span style={{ fontSize: '6rem', fontWeight: 900, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>{prog.num}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ direction: 'ltr' }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.35rem 1rem', borderRadius: '99px',
                    background: prog.gradient,
                    color: '#ffffff', fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
                  }}>
                    Programme {prog.num}
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, color: '#1b4332', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                    {prog.title}
                  </h2>
                  <p style={{ color: '#4b5563', fontSize: '0.975rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                    {prog.desc}
                  </p>

                  <h3 style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2d6a4f', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                    Actions principales
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                    {prog.actions.map((a, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{
                          width: 20, height: 20, background: 'rgba(45,106,79,0.1)',
                          borderRadius: '50%', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', flexShrink: 0, marginTop: 2,
                        }}>
                          <svg style={{ width: 10, height: 10, color: '#2d6a4f' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </span>
                        <span style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.6 }}>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2d6a4f', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>
                    Partenaires
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {prog.partenaires.map((p, j) => (
                      <span key={j} style={{
                        background: '#faf8f3', color: '#8b5e15',
                        padding: '0.35rem 0.875rem', borderRadius: '99px',
                        fontSize: '0.8rem', border: '1px solid rgba(233,196,106,0.4)',
                      }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1b4332', padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
            Un projet en lien avec nos programmes ?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', fontSize: '0.975rem' }}>
            Nous accompagnons les porteurs de projets qui partagent nos valeurs.
          </p>
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
            Parlez-nous de votre projet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
