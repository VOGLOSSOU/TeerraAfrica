'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface ValeurCardProps {
  image: string;
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function ValeurCard({ image, icon, title, desc }: ValeurCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(f => !f)}
      style={{
        perspective: 1000,
        height: 340,
        cursor: 'pointer',
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>

        {/* ── RECTO : image ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}>
          <Image src={image} alt={title} fill className="object-cover" />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(27,67,50,0.75) 0%, rgba(27,67,50,0.1) 60%, transparent 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
              <div style={{
                width: 40, height: 40, background: '#2d6a4f',
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {icon}
              </div>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>{title}</span>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.8rem',
              lineHeight: 1.5,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical' as const,
              margin: 0,
            }}>
              {desc.slice(0, 60)}…
            </p>
          </div>
          <div style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: '#b5832a',
            borderRadius: '99px', padding: '0.4rem 0.9rem',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}>
            <svg width="13" height="13" fill="none" stroke="#fff" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span style={{ fontSize: '0.72rem', color: '#fff', fontWeight: 700, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              Découvrir
            </span>
          </div>
        </div>

        {/* ── VERSO : texte ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          borderRadius: '20px',
          background: '#1b4332',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center',
          padding: '2.25rem',
        }}>
          <div style={{
            width: 48, height: 48, background: '#b5832a',
            borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1.25rem', flexShrink: 0,
          }}>
            {icon}
          </div>
          <h3 style={{
            fontSize: '1.15rem', fontWeight: 800, color: '#ffffff',
            marginBottom: '0.875rem',
            fontFamily: 'var(--font-playfair), serif',
          }}>
            {title}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            {desc}
          </p>
        </div>

      </div>
    </div>
  );
}
