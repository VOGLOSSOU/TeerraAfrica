# TEERRA AFRICA — Site Web Officiel

Site web institutionnel de l'association **TEERRA AFRICA**, réseau de professionnels engagés pour la transition écologique, l'éducation et l'entrepreneuriat vert en Afrique de l'Ouest et Australe.

---

## Structure du projet

```
Terra-Africa/
├── ressources/              # Fichiers sources fournis par le client
│   ├── Logo Teerra SAP.png
│   ├── Vue-d'ensemble.pdf
│   ├── first/               # Post 1 — images + PDF
│   ├── second/              # Post 2 — images + PDF
│   ├── third/               # Post 3 — images + PDF
│   ├── fourth/              # Post 4 — images + PDF
│   ├── five/                # Post 5
│   └── quelques-mages/      # Images thématiques (eau, environnement)
│
└── teerra-africa-site/      # Application Next.js
    ├── app/
    │   ├── components/      # Composants réutilisables
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   └── Icons.tsx    # Bibliothèque d'icônes SVG
    │   ├── a-propos/
    │   ├── programmes/
    │   ├── actualites/
    │   ├── contact/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx         # Page d'accueil
    └── public/
        ├── logo.png
        └── images/
            ├── hero-1.jpeg
            ├── hero-2.jpeg
            ├── arrosage.jpeg
            ├── enfants-plage.jpeg
            └── actualites/
```

---

## Stack technique

| Outil | Version | Usage |
|-------|---------|-------|
| [Next.js](https://nextjs.org) | 16 | Framework React (App Router, SSG) |
| TypeScript | 5 | Typage statique |
| Tailwind CSS | 4 | Utilitaires CSS |
| next/font | — | Google Fonts auto-hébergées (Inter + Playfair Display) |
| next/image | — | Optimisation automatique des images |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — Hero, missions, stats, programmes, actualités, CTA |
| `/a-propos` | Histoire, philosophie, valeurs, zones d'intervention |
| `/programmes` | Les 3 programmes détaillés avec actions et partenaires |
| `/actualites` | Posts terrain avec images et partenaires |
| `/contact` | Formulaire de contact + informations |

---

## Démarrage rapide

### Prérequis

- Node.js 18+
- npm

### Installation & lancement

```bash
cd teerra-africa-site
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
npm run start
```

---

## Identité visuelle

| Couleur | Valeur | Usage |
|---------|--------|-------|
| Vert primaire | `#2d6a4f` | Couleur principale, boutons, accents |
| Vert foncé | `#1b4332` | Backgrounds sombres, hero |
| Vert clair | `#52b788` | Accents secondaires |
| Ocre | `#b5832a` | Labels, CTA secondaires |
| Ocre clair | `#e9c46a` | Highlights sur fond sombre |
| Crème | `#faf8f3` | Backgrounds alternés |

**Polices :**
- **Playfair Display** — titres principaux (serif, élégant)
- **Inter** — corps de texte (sans-serif, lisible)

---

## À propos de TEERRA AFRICA

**TEERRA** = Transition Écologique · Éducation · Environnement · Renforcement · Résilience · Autonomie

Association à but non lucratif fondée en **2020** à Normandie, France.
Active en **Afrique de l'Ouest** (Bénin) et **Afrique Australe**.

**Contact :** +33 7 84 24 02 43

**Réseaux sociaux :**
- [Facebook](https://www.facebook.com/share/1HPuMCR7Nz/)
- [LinkedIn](https://www.linkedin.com/company/teerraafrica/)
