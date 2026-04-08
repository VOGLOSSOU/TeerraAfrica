export interface Project {
  id: string;
  titre: string;
  statut: 'en-cours' | 'réalisé';
  tag: string;
  tagColor: string;
  lieu: string;
  date: string;
  intro: string;
  content: string;
  images: string[];
  partenaires: string[];
}

export const projects: Project[] = [
  {
    id: 'jecs-jeunes-engages-solidaires-climat',
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
];
