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
    id: 'territoir-lab-agriculture-durable',
    tag: 'Agriculture Durable',
    tagColor: '#b5832a',
    date: '2025',
    lieu: 'France & Afrique',
    title: 'TerritoirLab — Soutien aux producteurs locaux et à l\'agriculture durable',
    intro: 'TEERRA AFRICA soutient les producteurs à travers la mise en avant des produits du terroir issus de l\'agriculture durable en France et en Afrique.',
    content: `Connaissez-vous #TerritoirLab ?

Le projet de soutien de TEERRA AFRICA aux producteurs à travers la mise en avant des produits du terroir issus de l'agriculture durable en France et en Afrique.

Pour les consommateurs : favorisez la consommation de produits locaux. Privilégiez les circuits courts afin de supprimer les intermédiaires et tous coûts supplémentaires.

Tirez un trait sur les plats préparés, et concoctez-vous de bons repas à base de produits fermiers issus de votre territoire.

Vous pouvez également promouvoir les denrées de vos producteurs. Parlez-en à votre famille, à vos amis. Faites-les découvrir.`,
    images: ['/images/actualites/img-6.jpg'],
    partenaires: ['Producteurs locaux', 'TEERRA AFRICA'],
  },
  {
    id: 'parbruniere-preservation-zones-humides',
    tag: 'Transition Écologique',
    tagColor: '#52b788',
    date: '2025',
    lieu: 'La Parbrunière, France',
    title: 'La Parbrunière — Préservation des zones humides et reconstitution du couvert végétal',
    intro: 'À La Parbrunière, TEERRA AFRICA contribue activement à la préservation des zones humides et œuvre à la reconstitution du couvert végétal.',
    content: `Ici à La Parbrunière, TEERRA AFRICA contribue à la préservation des zones humides.

Ici et là-bas, nous agissons en faveur de la transition écologique. Nous préservons les zones humides. Nous œuvrons à la reconstitution du couvert végétal.

#TransitionEcologique #EngagementClimatique #AgirMaintenant #GreenAction #DéveloppementDurable #Environnement`,
    images: ['/images/actualites/img-17-1.jpg', '/images/actualites/img-17-2.jpg', '/images/actualites/img-17-3.jpg'],
    partenaires: ['TEERRA AFRICA'],
  },
  {
    id: 'so-ava-tresor-naturel-a-preserver',
    tag: 'Zones Humides',
    tagColor: '#2d6a4f',
    date: '2025',
    lieu: 'Sô-Ava, Bénin',
    title: 'Sô-Ava : Un Trésor Naturel à Préserver',
    intro: 'La commune de Sô-Ava, région marécageuse pleine de vie, abrite des zones humides riches en biodiversité — un véritable trésor pour l\'environnement et les communautés locales.',
    content: `Sô-Ava est une région marécageuse pleine de vie et d'opportunités. Ses zones humides, riches en biodiversité, sont un véritable trésor pour l'environnement et les communautés locales.

Cependant, pour protéger cet écosystème fragile et permettre à ses habitants de mieux vivre, des solutions adaptées et durables sont nécessaires.

TEERRA AFRICA s'engage aux côtés des communautés de Sô-Ava pour trouver ces solutions et préserver ce patrimoine naturel exceptionnel.`,
    images: ['/images/actualites/img-16-1.jpg', '/images/actualites/img-16-2.jpg'],
    partenaires: ['Communauté de Sô-Ava', 'TEERRA AFRICA'],
  },
  {
    id: 'erable-a-sucre-mission-francophonie',
    tag: 'Botanique',
    tagColor: '#52b788',
    date: 'Juin 2024',
    lieu: 'Montréal & Québec, Canada',
    title: 'Découverte de l\'Érable à sucre — Mission économique de la Francophonie',
    intro: 'Lors de notre participation à la 5e mission économique et commerciale de la Francophonie à Montréal et Québec, nous avons fait un détour botanique et découvert l\'Érable à sucre, arbre emblématique du Canada.',
    content: `Lors de notre participation à la 5e mission économique et commerciale de la Francophonie qui s'est tenue à Montréal et Québec du 11 au 13 juin 2024, nous avons fait un détour botanique.

Pendant notre trajet, nous avons fait la découverte d'un arbre : l'Érable à sucre — acer saccharum (nom scientifique), ou encore érable franc.

Particularités de l'érable à sucre

Taille et forme : Arbre imposant, jusqu'à 35 mètres de hauteur, tronc jusqu'à 90 centimètres de diamètre.

Feuilles : Vert jaunâtre, de 8 à 20 centimètres de longueur, formées de 5 lobes, deviennent jaunes, orange vif ou rouges à l'automne.

Écorce : Lisse et grise, devient plus foncée et couverte de crêtes à mesure que l'arbre vieillit.

Fleurs : Petites grappes pendantes de fleurs vert jaunâtre, apparaissent juste avant la feuillaison.

Fruits : Graines contenues dans des disamares de 30 à 35 millimètres de longueur, produites presque chaque année et plus abondantes tous les 4 à 7 ans.

Aire de répartition : L'érable à sucre pousse dans le Centre et le Sud de l'Ontario, et dans certaines parties du Nord-Ouest de l'Ontario (Canada).

---

Bienfaits pour la faune

L'érable à sucre est une source de nourriture pour plusieurs mammifères : l'écureuil, le tamia rayé, le porc-épic, le cerf et l'orignal, ainsi que pour une multitude d'insectes et d'oiseaux. Il constitue également leur habitat.

---

Usages commerciaux

Le bois de l'érable à sucre est employé pour la fabrication de meubles, planches à découper, revêtements de sol, instruments de musique et articles de sport.

La sève sert à la fabrication de sirop, sucre et beurre d'érable, friandises, café et bougies.

---

Faits intéressants

La feuille de l'érable à sucre apparaît sur le drapeau canadien — c'est l'arbre emblématique du Canada.

Il faut environ 40 litres de sève pour obtenir 1 litre de sirop d'érable.

L'érable à sucre peut vivre plus de 200 ans.`,
    images: ['/images/actualites/img-9-1.jpg', '/images/actualites/img-9-2.jpg'],
    partenaires: ['Mission économique de la Francophonie', 'TEERRA AFRICA'],
  },
  {
    id: 'voyages-tourisme-positifs-nature',
    tag: 'Biodiversité',
    tagColor: '#2d6a4f',
    date: '2022',
    lieu: 'Montréal, COP15',
    title: 'Voyages et tourisme positifs pour la nature',
    intro: 'Lors de la COP15 à Montréal, le WTTC, l\'ONU Tourisme et la Sustainable Hospitality Alliance ont annoncé une nouvelle collaboration pour unir les secteurs public et privé autour d\'une vision positive commune pour la nature.',
    content: `Lors de la COP15 à Montréal, en décembre 2022, le Conseil mondial du voyage et du tourisme (WTTC), l'ONU Tourisme et la Sustainable Hospitality Alliance ont annoncé une nouvelle collaboration pour unir les secteurs public et privé autour d'une vision positive commune pour la nature — afin que les voyages et le tourisme stoppent et inversent la perte de biodiversité d'ici 2030.

Les signataires du secteur du voyage et du tourisme se sont engagés à adopter une approche positive pour la nature en matière de tourisme. Cela comprend :

— L'intégration de mesures de protection de la biodiversité
— La réduction des émissions de carbone
— L'atténuation de l'impact de la pollution
— La réduction de l'utilisation non durable des ressources
— La protection et la restauration de la nature et de la faune

Cette nouvelle alliance vise à inspirer et à soutenir les gouvernements, les entreprises et la société civile dans la mise en œuvre du Cadre mondial pour la biodiversité (GBF) Kunming-Montréal post-2020, en particulier les objectifs 14, 15 et 16, axés sur l'intégration, l'évaluation et la réduction des impacts, et la promotion de l'utilisation durable.

En tant que l'un des principaux instruments d'utilisation durable de la biodiversité, le secteur du voyage et du tourisme joue un rôle central dans la mise en œuvre du GBF.

Travaillons ensemble pour atteindre ces objectifs.`,
    images: ['/images/actualites/img-7.jpg'],
    partenaires: ['WTTC', 'ONU Tourisme', 'Sustainable Hospitality Alliance'],
  },
  {
    id: 'parcours-idee-transition-ecologique',
    tag: 'Environnement',
    tagColor: '#2d6a4f',
    date: '2025',
    lieu: 'Bénin',
    title: 'Parcours "IDÉE" — Initiative Développement durable Énergie Environnement',
    intro: 'TEERRA AFRICA se mobilise sur le dispositif "IDÉE" pour soutenir les projets dans les domaines de l\'Énergie, de l\'Environnement et du Développement durable.',
    content: `Dans les thématiques de l'énergie, de l'environnement et du développement durable, les enjeux à appréhender sont majeurs pour les territoires d'intervention de TEERRA AFRICA.

Nos réponses passent par des situations de manipulation et d'expérimentation pour valider la pertinence de la démarche Particip'Action.

Objectifs

Le parcours "IDÉE" vise à :

— Accompagner les changements de comportements par la sensibilisation et l'éducation à la transition écologique.

— Encourager les initiatives expérimentales et innovantes sur les territoires en matière d'accompagnement à la transition écologique.

Travaillons ensemble pour atteindre ces objectifs.`,
    images: ['/images/actualites/post-5.jpg'],
    partenaires: ['TEERRA AFRICA', 'Partenaires territoriaux'],
  },
];
