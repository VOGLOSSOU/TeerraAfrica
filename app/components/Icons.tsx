type IconProps = { size?: number; color?: string; strokeWidth?: number };
const d = (props: IconProps) => ({ width: props.size ?? 24, height: props.size ?? 24, fill: 'none', stroke: props.color ?? 'currentColor', strokeWidth: props.strokeWidth ?? 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24' });

export const IconGlobe = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
);

export const IconBook = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
  </svg>
);

export const IconLeaf = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

export const IconPeace = (p: IconProps) => (
  <svg {...d(p)}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <line x1="12" y1="12" x2="4.93" y2="17.5"/>
    <line x1="12" y1="12" x2="19.07" y2="17.5"/>
  </svg>
);

export const IconScale = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M12 3v18M3 9h18M3 9l9-6 9 6M3 9l9 12 9-12"/>
  </svg>
);

export const IconTree = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M17 8C8 10 5.9 16.17 3.82 21M9.1 9.4C11 11 13 11.4 16 10.8M9.1 9.4C9.4 8.7 9.7 8 10 7.4M9.1 9.4C8 10.5 7 12.5 6.7 15M16 10.8C17.5 10.4 18.8 9.8 20 8.8M16 10.8C16.7 12.3 17 14.3 16.5 16.5"/>
    <path d="M12 3c0 0-6.5 7 0 12s0 7 0 7"/>
  </svg>
);

export const IconBriefcase = (p: IconProps) => (
  <svg {...d(p)}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
  </svg>
);

export const IconDroplet = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
  </svg>
);

export const IconBolt = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

export const IconTrash = (p: IconProps) => (
  <svg {...d(p)}>
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
  </svg>
);

export const IconWheat = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M2 22L16 8"/>
    <path d="M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 010-4.96L5 6l1.53-1.53a3.5 3.5 0 014.94 0L13 6l-1.53 1.53a3.5 3.5 0 010 4.96L13 14l-1.53-1.53a3.5 3.5 0 01-4.94 0z"/>
    <path d="M18.47 16.47L20 15l1.53 1.53a3.5 3.5 0 010-4.96L20 10l1.53-1.53a3.5 3.5 0 010 4.96L20 15l-1.53-1.53a3.5 3.5 0 01-4.94 0L12 12l1.53-1.53a3.5 3.5 0 014.94 0z"/>
  </svg>
);

export const IconBuilding = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M3 21h18M9 8h1m-1 4h1m4-4h1m-1 4h1m-9 9V5a2 2 0 012-2h6a2 2 0 012 2v15"/>
  </svg>
);

export const IconCar = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-2"/>
    <rect x="7" y="14" width="10" height="6" rx="1"/>
  </svg>
);

export const IconMonitor = (p: IconProps) => (
  <svg {...d(p)}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

export const IconHeart = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

export const IconUsers = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

export const IconRefresh = (p: IconProps) => (
  <svg {...d(p)}>
    <polyline points="23 4 23 10 17 10"/>
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
  </svg>
);

export const IconLink = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
);

export const IconLightbulb = (p: IconProps) => (
  <svg {...d(p)}>
    <line x1="9" y1="18" x2="15" y2="18"/>
    <line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8A6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/>
  </svg>
);

export const IconMapPin = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
