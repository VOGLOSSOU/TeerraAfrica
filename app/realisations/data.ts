export interface Project {
  id: string;
  categorie: 'projet' | 'programme' | 'realisation' | 'initiative';
  titre: string;
  sousTitre?: string;
  statut: 'en-cours' | 'réalisé';
  tag: string;
  tagColor: string;
  lieu: string;
  date: string;
  intro: string;
  content: string;
  objectifs?: string[];
  images: string[];
  partenaires: string[];
}

export const projects: Project[] = [
  {
    id: 'jecs-jeunes-engages-solidaires-climat',
    categorie: 'projet',
    titre: 'J.E.C.S — Jeunes Engagé.es Solidaires pour le Climat',
    statut: 'réalisé',
    tag: 'Climat & Jeunesse',
    tagColor: '#2d6a4f',
    lieu: 'Normandie, France · Département de l\'Atlantique, Bénin',
    date: 'Juillet – Septembre 2024',
    intro: 'Sensibiliser les jeunes du territoire normand et du Bénin aux impacts des changements climatiques et aux perturbations engendrées par les inondations sur les territoires vulnérables.',
    content: `Le projet Jeunes Engagé.es Solidaires pour le Climat (J.E.C.S) mené par TEERRA AFRICA en partenariat avec l'Association du Centre Social La Houssiere (A.C.S.H) vise à sensibiliser les jeunes du territoire normand en France et ceux du département de l'Atlantique au Bénin sur les impacts des changements climatiques et les perturbations engendrées par les inondations sur les territoires vulnérables aux changements climatiques.

L'attention est portée sur l'ODD 13 relatif aux Mesures de lutte contre le changement climatique avec un focus sur la thématique Inondation.

TEERRA AFRICA participe au programme RECITAL piloté par l'association Horizons Solidaires en Normandie :

Renforcer l'Education à la Citoyenneté Internationale sur nos Territoires par une Approche Locale des ODD.`,
    images: [
      '/images/realisations/pr-1-1.avif',
      '/images/realisations/pr-1-2.avif',
      '/images/realisations/pr-1-3.avif',
      '/images/realisations/pr-1-4.avif',
    ],
    partenaires: ['A.C.S.H', 'Horizons Solidaires', 'Programme RECITAL'],
  },
  {
    id: 'programme-educ-action',
    categorie: 'programme',
    titre: 'Programme Educ\'Action',
    statut: 'en-cours',
    tag: 'Éducation & Citoyenneté',
    tagColor: '#b5832a',
    lieu: '',
    date: '',
    intro: 'L\'Éducation à la citoyenneté et à la solidarité internationale (ECSI) joue un rôle déterminant pour répondre aux grands enjeux contemporains et pour atteindre les Objectifs de développement durable.',
    content: `L'Éducation à la citoyenneté et à la solidarité internationale (ECSI) joue un rôle déterminant pour répondre aux grands enjeux contemporains et pour atteindre les Objectifs de développement durable.

TEERRA AFRICA favorise l'engagement de tous les citoyens en faveur d'un monde plus juste, solidaire et durable. Nous proposons un parcours d'apprentissage de la citoyenneté qui s'appuie sur des outils pédagogiques (animations, débats, rencontres, expositions, activités manuelles, actions climat, formations...).`,
    images: ['/images/programmes/programme-1.png'],
    partenaires: [],
  },
  {
    id: 'parcours-idee',
    categorie: 'programme',
    titre: 'Parcours "IDEE"',
    sousTitre: 'Initiative Développement durable Energie Environnement',
    statut: 'en-cours',
    tag: 'Énergie & Environnement',
    tagColor: '#2d6a4f',
    lieu: '',
    date: '',
    intro: 'TEERRA AFRICA se mobilise sur le dispositif "IDÉE" pour soutenir les projets dans les domaines de l\'Energie, de l\'Environnement et du Développement durable.',
    content: `TEERRA AFRICA se mobilise sur le dispositif "IDÉE" pour soutenir les projets dans les domaines de l'Energie, de l'Environnement et du Développement durable.

Dans ces thématiques, les enjeux à appréhender sont majeurs pour les territoires d'intervention de TEERRA AFRICA (France, Bénin, Zambie). Nos réponses passent par des situations de manipulation et d'expérimentation pour valider la robustesse et la pertinence de la démarche Particip'Action.`,
    objectifs: [
      'Accompagner les changements de comportements par la sensibilisation et l\'éducation à la transition écologique',
      'Encourager les initiatives expérimentales et innovantes sur le territoire normand en matière d\'accompagnement à la transition écologique',
    ],
    images: [],
    partenaires: [],
  },
  {
    id: 'ateliers-velo-ecole',
    categorie: 'programme',
    titre: 'Ateliers Vélo-école',
    statut: 'en-cours',
    tag: 'Mobilité durable',
    tagColor: '#2d6a4f',
    lieu: '',
    date: '',
    intro: 'Nous avons élaboré une progression pédagogique pour l\'apprentissage du vélo.',
    content: `Nous avons élaboré une progression pédagogique pour l'apprentissage du vélo. Deux niveaux sont proposés :

Niveau 1 : Ateliers initiation
Niveau 2 : Permis vélo

Apprendre à faire du vélo dans une vélo-école permet d'inscrire les séances dans une progression pédagogique. Les élèves gagnent en autonomie dans le cadre des déplacements et ont accès à ce mode de transport économique, pratique, accessible à toutes et tous, silencieux, écologique et bon pour la santé !`,
    images: ['/images/programmes/programme-2.png'],
    partenaires: [],
  },
  {
    id: 'initiative-3e-eau-ecoles-enfants',
    categorie: 'realisation',
    titre: 'Initiative "3E" — Eau et Écoles pour les Enfants',
    sousTitre: 'AGIR EN CITOYEN — Formation pour Agir à l\'échelle locale : une forme de solidarité internationale',
    statut: 'réalisé',
    tag: 'Éducation & Eau',
    tagColor: '#2d6a4f',
    lieu: 'Région de Livingstone, Zambie',
    date: 'Mars – Août 2023',
    intro: 'Construction d\'une école dans la région de Livingstone en Zambie avec un point d\'eau potable et une cantine. Ouverture prévue en Septembre 2023.',
    content: `Construction d'une école dans la région de Livingstone en Zambie avec un point d'eau potable et une cantine. Ouverture prévue en Septembre 2023.`,
    images: [
      '/images/realisations/real-1.avif',
      '/images/realisations/real-2.avif',
      '/images/realisations/real-3.avif',
      '/images/realisations/real-4.avif',
    ],
    partenaires: [],
  },
  {
    id: 'projet-pilote-eco-construction',
    categorie: 'realisation',
    titre: 'Projet pilote éco-construction',
    statut: 'réalisé',
    tag: 'Éco-construction',
    tagColor: '#b5832a',
    lieu: 'Bénin',
    date: 'Février 2022',
    intro: 'Fabrication de briquettes écologiques en terre compressée au Bénin, destinées à la construction d\'habitations.',
    content: `Au Bénin, fabrication de briquettes écologiques en terre compressée. Elles serviront à la construction d'habitations.`,
    images: [
      '/images/realisations/img-re-2-1.webp',
      '/images/realisations/img-re-2-2.webp',
      '/images/realisations/img-re-2-3.webp',
      '/images/realisations/img-re-2-4.webp',
      '/images/realisations/img-re-2-5.avif',
      '/images/realisations/img-re-2-6.jpg',
      '/images/realisations/img-re-2-7.avif',
      '/images/realisations/img-re-2-8.avif',
    ],
    partenaires: [],
  },
  {
    id: 'assainissement-eaux-usees',
    categorie: 'realisation',
    titre: 'Assainissement des eaux usées',
    statut: 'réalisé',
    tag: 'Eau & Assainissement',
    tagColor: '#2d6a4f',
    lieu: 'Bénin',
    date: 'Octobre 2019',
    intro: 'Construction d\'un bassin d\'épuration à décantation naturelle et filtration au bio-charbon actif.',
    content: `Construction d'un bassin d'épuration à décantation naturelle + filtration au bio-charbon actif.`,
    images: [
      '/images/realisations/img-re-3-1.webp',
      '/images/realisations/img-re-3-2.webp',
      '/images/realisations/img-re-3-3.webp',
    ],
    partenaires: [],
  },
  {
    id: 'protect-protection-environnement',
    categorie: 'realisation',
    titre: 'PROTECT — Protection de l\'Environnement pour un Changement Total',
    statut: 'réalisé',
    tag: 'Renaturalisation',
    tagColor: '#2d6a4f',
    lieu: 'Département des Collines, Bénin',
    date: '',
    intro: 'Soutien à la mise en place d\'une zone de renaturalisation d\'un ancien site d\'exploitation de carrière de sable. Conservation de zones humides sur 30 000 m².',
    content: `Soutien à la mise en place d'une zone de renaturalisation d'un ancien site d'exploitation de carrière de sable.

Conservation de zones humides sur 30 000 m².`,
    images: ['/images/realisations/img-re-4-1.png'],
    partenaires: [],
  },
  {
    id: 'territoirlab',
    categorie: 'realisation',
    titre: 'TerritoirLab',
    statut: 'réalisé',
    tag: 'Agriculture durable',
    tagColor: '#b5832a',
    lieu: 'Hauts-de-Seine, France',
    date: '2018',
    intro: 'Dégustation de produits locaux et soutien aux producteurs à travers la mise en avant des produits du terroir issus de l\'agriculture durable en France et en Afrique.',
    content: `Dégustation de produits locaux. Soutien aux producteurs à travers la mise en avant des produits du terroir issus de l'agriculture durable en France et en Afrique.`,
    images: ['/images/realisations/img-re-5-1.png'],
    partenaires: [],
  },
  {
    id: 'boost-agro',
    categorie: 'realisation',
    titre: 'Boost\'Agro',
    statut: 'en-cours',
    tag: 'Agroécologie',
    tagColor: '#2d6a4f',
    lieu: '',
    date: '',
    intro: 'Un dispositif d\'accompagnement et d\'accélération des PME de la filière agroécologique porté par TEERRA AFRICA.',
    content: `Afin de soutenir la filière agricole, TEERRA AFRICA déploie Boost'Agro. Un dispositif d'accompagnement et d'accélération des PME de la filière agroécologique qui vise :

- La Formation Agricole Participative des maraîchers
- La Transformation Agro Alimentaire des produits
- La commercialisation des produits`,
    objectifs: [
      'Priorité à l\'agroécologie pour préserver les ressources naturelles et construire un développement durable',
      'Priorité aux méthodes participatives pour croiser les savoirs traditionnels et scientifiques et permettre aux agriculteurs de trouver eux-mêmes des solutions adaptées',
      'Priorité à la structuration de filières pour assurer la pérennité des actions et l\'augmentation des revenus des producteurs',
    ],
    images: [
      '/images/realisations/img-re-6-1.png',
      '/images/realisations/img-re-6-2.png',
    ],
    partenaires: [],
  },
];
