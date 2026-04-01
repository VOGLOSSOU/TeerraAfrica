import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Suivez les actions de TEERRA AFRICA sur le terrain : formations numériques, accompagnement des artisans, partenariats internationaux.',
};

const posts = [
  {
    tag: 'Éducation Numérique',
    tagColor: '#2d6a4f',
    date: '2025',
    lieu: 'Sô-Ava, Bénin',
    title: '170 jeunes initiés au numérique au CEG VEKKY',
    intro: 'Un moment fort marqué par la présence de personnalités engagées : la Présidente de Sonagnon, la Directrice de l\'AFD, le Chef départemental et l\'ancien Président de Sonagnon, aujourd\'hui Député.',
    content: `Depuis Sô-Ava, cette commune lacustre où les maisons sont sur l'eau, nous avons posé nos ordinateurs au cœur du CEG VEKKY. 170 élèves nous attendaient — curieux, déterminés, prêts.

Sous la coordination de Madame Ayodélé Ognin, nous les avons guidés pas à pas dans leur premier contact avec l'informatique et le numérique. Les bases, les fondamentaux, les outils qui ouvrent des portes.

170 élèves du CEG VEKKY reçoivent officiellement leur attestation de formation. 170 jeunes qui peuvent désormais dire : "J'ai appris. J'ai compris. Je suis prêt."

Chez Teerra Africa, nous en sommes convaincus : l'avenir de la jeunesse béninoise passe par le numérique. Ce n'est pas une tendance — c'est une nécessité.`,
    images: ['/images/actualites/post4-img1.jpg', '/images/actualites/post4-img2.jpg'],
    partenaires: ['Emmaus Association Sonagnon', 'Ministère du Numérique', 'CEG VEKKY', 'Autorités de Sô-Ava'],
  },
  {
    tag: 'Genre & Inclusion',
    tagColor: '#b5832a',
    date: '2025',
    lieu: 'Cotonou, Bénin',
    title: 'Rencontre internationale sur l\'intégration du genre dans le numérique',
    intro: 'Dans le cadre de la mission terrain de Wide & Co, dans les locaux de LuxDev – Ambassade du Luxembourg au Bénin, Teerra Africa a participé à des échanges décisifs sur l\'autonomisation des femmes dans le numérique.',
    content: `Au côté de Women In Tech Bénin, cette rencontre a réuni plusieurs acteurs engagés de l'écosystème : Prunelle de Dieu, Mara Academy, Women Empowerment, L'Envol, Women Impact Network, Women Digital Week, Simplon Bénin et CLE.

Un constat s'est rapidement imposé : malgré des contextes différents, les défis restent très similaires. Que ce soit au Luxembourg ou au Bénin, de nombreuses femmes disposent des compétences mais restent insuffisamment soutenues.

Parmi les pistes évoquées : promouvoir davantage la présence des femmes dans les espaces de décision, renforcer la sensibilisation aux biais liés à l'IA, et intégrer systématiquement la dimension genre dans la conception des projets.`,
    images: ['/images/actualites/post3-img1.jpeg'],
    partenaires: ['Women In Tech Bénin', 'LuxDev – Ambassade du Luxembourg', 'Wide & Co', 'Simplon Bénin'],
  },
  {
    tag: 'Accompagnement Social',
    tagColor: '#52b788',
    date: '2025',
    lieu: 'Bohicon, Bénin',
    title: 'Enregistrement des artisans dans le cadre du projet ARCH',
    intro: 'TEERRA AFRICA en partenariat avec le Réseau des Alumnis des Jeunes Leaders du Bénin accompagne les artisans et artisanes dans leur enregistrement au projet ARCH du Ministère des Affaires Sociales.',
    content: `Cette initiative s'inscrit dans notre engagement pour le renforcement des capacités des acteurs économiques locaux. Le projet ARCH vise à assurer une protection sociale aux travailleurs du secteur informel, dont les artisans constituent une part importante.

Lieu : Ancien bureau du collectif (PPA), dans l'enceinte de la Maison des Jeunes de Bohicon, non loin de la BOA.

TEERRA AFRICA facilite l'accès à ce programme en accompagnant les artisans dans leurs démarches administratives.

Merci à Bohicon pour la mobilisation !`,
    images: ['/images/actualites/post2-img1.jpeg'],
    partenaires: ['Réseau Alumnis des Jeunes Leaders du Bénin', 'Ministère des Affaires Sociales', 'Commune de Bohicon'],
  },
  {
    tag: 'Terrain',
    tagColor: '#8b5e15',
    date: '2024',
    lieu: 'Bénin',
    title: 'Actions de terrain : eau, environnement et sensibilisation',
    intro: 'TEERRA AFRICA poursuit ses actions de terrain au Bénin, combinant sensibilisation environnementale, préservation des ressources en eau et mobilisation des communautés locales.',
    content: `Nos équipes interviennent dans les provinces rurales et les villes intermédiaires du Bénin pour sensibiliser les populations aux enjeux environnementaux.

Ces actions comprennent des initiatives de nettoyage des plages et espaces publics, des sessions de sensibilisation à la préservation des ressources en eau, et des formations à l'agro-écologie.

Nous croyons fermement que la préservation de l'environnement passe par l'éducation et la mobilisation de chaque citoyen.`,
    images: ['/images/enfants-plage.jpeg', '/images/arrosage.jpeg'],
    partenaires: ['Communautés locales', 'Autorités municipales', 'Associations de jeunes'],
  },
];

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
        <div className="container-wide" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#e9c46a' }}>Sur le terrain</span>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, color: '#ffffff',
              lineHeight: 1.1, marginBottom: '1.5rem',
            }}
          >
            Nos Actualités
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Découvrez nos actions, partenariats et initiatives sur le terrain en Afrique de l&apos;Ouest.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section style={{ background: '#faf8f3', padding: '6rem 0' }}>
        <div className="container-wide" style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {posts.map((post, idx) => (
              <article
                key={idx}
                style={{
                  background: '#ffffff', borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                {/* Images */}
                <div style={{ display: 'grid', gridTemplateColumns: post.images.length > 1 ? '1fr 1fr' : '1fr' }}>
                  {post.images.map((img, j) => (
                    <div key={j} style={{ position: 'relative', height: post.images.length === 1 ? 320 : 240 }}>
                      <Image src={img} alt={`${post.title} — photo ${j + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div style={{ padding: '2.5rem 3rem' }}>
                  {/* Meta */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <span style={{
                      background: post.tagColor, color: '#ffffff',
                      fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
                      padding: '0.375rem 0.875rem', borderRadius: '99px',
                    }}>
                      {post.tag}
                    </span>
                    <span style={{ color: '#9ca3af', fontSize: '0.825rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {post.date}
                    </span>
                    <span style={{ color: '#9ca3af', fontSize: '0.825rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {post.lieu}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 700, color: '#1b4332', marginBottom: '1rem', lineHeight: 1.35, fontFamily: 'var(--font-playfair), serif' }}>
                    {post.title}
                  </h2>
                  <p style={{ color: '#374151', fontSize: '0.975rem', lineHeight: 1.85, fontWeight: 500, marginBottom: '1.25rem' }}>
                    {post.intro}
                  </p>
                  <div style={{
                    color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.9,
                    whiteSpace: 'pre-line',
                    paddingTop: '1.25rem', borderTop: '1px solid #f3f4f6',
                    marginBottom: '2rem',
                  }}>
                    {post.content}
                  </div>

                  {/* Partenaires */}
                  <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2d6a4f', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                      Partenaires
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {post.partenaires.map((p, j) => (
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                background: '#0a66c2', color: '#ffffff',
                fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(10,102,194,0.3)',
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Suivre sur LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
