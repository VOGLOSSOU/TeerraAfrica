type IconProps = { size?: number; color?: string; strokeWidth?: number };
const d = (props: IconProps) => ({ width: props.size ?? 24, height: props.size ?? 24, fill: 'none', stroke: props.color ?? 'currentColor', strokeWidth: props.strokeWidth ?? 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24' });

export const IconGlobe = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
);

export const IconLeaf = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

export const IconTree = (p: IconProps) => (
  <svg {...d(p)}>
    <path d="M17 8C8 10 5.9 16.17 3.82 21M9.1 9.4C11 11 13 11.4 16 10.8M9.1 9.4C9.4 8.7 9.7 8 10 7.4M9.1 9.4C8 10.5 7 12.5 6.7 15M16 10.8C17.5 10.4 18.8 9.8 20 8.8M16 10.8C16.7 12.3 17 14.3 16.5 16.5"/>
    <path d="M12 3c0 0-6.5 7 0 12s0 7 0 7"/>
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
