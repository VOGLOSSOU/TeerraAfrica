export interface Post {
  id: string;
  tag: string;
  tagColor: string;
  date: string;
  lieu: string;
  title: string;
  intro: string;
  content: string;
  images: string[];
  partenaires: string[];
}

export const posts: Post[] = [
  {
    id: '170-jeunes-numerique-ceg-vekky',
    tag: 'Éducation Numérique',
    tagColor: '#2d6a4f',
    date: '2025',
    lieu: 'Sô-Ava, Bénin',
    title: '170 jeunes initiés au numérique au CEG VEKKY',
    intro: "Un moment fort marqué par la présence de personnalités engagées : la Présidente de Sonagnon, la Directrice de l'AFD, le Chef départemental et l'ancien Président de Sonagnon, aujourd'hui Député.",
    content: `Depuis Sô-Ava, cette commune lacustre où les maisons sont sur l'eau, nous avons posé nos ordinateurs au cœur du CEG VEKKY. 170 élèves nous attendaient — curieux, déterminés, prêts.

Sous la coordination de Madame Ayodélé Ognin, nous les avons guidés pas à pas dans leur premier contact avec l'informatique et le numérique. Les bases, les fondamentaux, les outils qui ouvrent des portes.

170 élèves du CEG VEKKY reçoivent officiellement leur attestation de formation. 170 jeunes qui peuvent désormais dire : "J'ai appris. J'ai compris. Je suis prêt."

Chez Teerra Africa, nous en sommes convaincus : l'avenir de la jeunesse béninoise passe par le numérique. Ce n'est pas une tendance — c'est une nécessité.`,
    images: ['/images/actualites/post4-img1.jpg', '/images/actualites/post4-img2.jpg'],
    partenaires: ['Emmaus Association Sonagnon', 'Ministère du Numérique', 'CEG VEKKY', 'Autorités de Sô-Ava'],
  },
  {
    id: 'rencontre-genre-numerique',
    tag: 'Genre & Inclusion',
    tagColor: '#b5832a',
    date: '2025',
    lieu: 'Cotonou, Bénin',
    title: "Rencontre internationale sur l'intégration du genre dans le numérique",
    intro: "Dans le cadre de la mission terrain de Wide & Co, dans les locaux de LuxDev – Ambassade du Luxembourg au Bénin, Teerra Africa a participé à des échanges décisifs sur l'autonomisation des femmes dans le numérique.",
    content: `Au côté de Women In Tech Bénin, cette rencontre a réuni plusieurs acteurs engagés de l'écosystème : Prunelle de Dieu, Mara Academy, Women Empowerment, L'Envol, Women Impact Network, Women Digital Week, Simplon Bénin et CLE.

Un constat s'est rapidement imposé : malgré des contextes différents, les défis restent très similaires. Que ce soit au Luxembourg ou au Bénin, de nombreuses femmes disposent des compétences mais restent insuffisamment soutenues.

Parmi les pistes évoquées : promouvoir davantage la présence des femmes dans les espaces de décision, renforcer la sensibilisation aux biais liés à l'IA, et intégrer systématiquement la dimension genre dans la conception des projets.`,
    images: ['/images/actualites/post3-img1.jpeg', '/images/actualites/post3-img2.jpeg', '/images/actualites/post3-img3.jpeg'],
    partenaires: ['Women In Tech Bénin', 'LuxDev – Ambassade du Luxembourg', 'Wide & Co', 'Simplon Bénin'],
  },
  {
    id: 'artisans-projet-arch-bohicon',
    tag: 'Accompagnement Social',
    tagColor: '#52b788',
    date: '2025',
    lieu: 'Bohicon, Bénin',
    title: 'Enregistrement des artisans dans le cadre du projet ARCH',
    intro: "TEERRA AFRICA en partenariat avec le Réseau des Alumnis des Jeunes Leaders du Bénin accompagne les artisans et artisanes dans leur enregistrement au projet ARCH du Ministère des Affaires Sociales.",
    content: `Cette initiative s'inscrit dans notre engagement pour le renforcement des capacités des acteurs économiques locaux. Le projet ARCH vise à assurer une protection sociale aux travailleurs du secteur informel, dont les artisans constituent une part importante.

Lieu : Ancien bureau du collectif (PPA), dans l'enceinte de la Maison des Jeunes de Bohicon, non loin de la BOA.

TEERRA AFRICA facilite l'accès à ce programme en accompagnant les artisans dans leurs démarches administratives.

Merci à Bohicon pour la mobilisation !`,
    images: ['/images/actualites/post2-img1.jpeg'],
    partenaires: ['Réseau Alumnis des Jeunes Leaders du Bénin', 'Ministère des Affaires Sociales', 'Commune de Bohicon'],
  },
  {
    id: 'actions-terrain-eau-environnement',
    tag: 'Terrain',
    tagColor: '#8b5e15',
    date: '2024',
    lieu: 'Bénin',
    title: 'Actions de terrain : eau, environnement et sensibilisation',
    intro: "TEERRA AFRICA poursuit ses actions de terrain au Bénin, combinant sensibilisation environnementale, préservation des ressources en eau et mobilisation des communautés locales.",
    content: `Nos équipes interviennent dans les provinces rurales et les villes intermédiaires du Bénin pour sensibiliser les populations aux enjeux environnementaux.

Ces actions comprennent des initiatives de nettoyage des plages et espaces publics, des sessions de sensibilisation à la préservation des ressources en eau, et des formations à l'agro-écologie.

Nous croyons fermement que la préservation de l'environnement passe par l'éducation et la mobilisation de chaque citoyen.`,
    images: ['/images/enfants-plage.jpeg', '/images/arrosage.jpeg'],
    partenaires: ['Communautés locales', 'Autorités municipales', 'Associations de jeunes'],
  },
];
