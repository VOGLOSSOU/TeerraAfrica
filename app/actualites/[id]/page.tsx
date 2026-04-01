import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../data';

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) return {};
  return {
    title: post.title,
    description: post.intro,
  };
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
  if (!post) notFound();

  return (
    <>
      {/* HERO */}
      <section style={{
        position: 'relative', height: '60vh', minHeight: 420,
        display: 'flex', alignItems: 'flex-end',
      }}>
        <Image
          src={post.images[0]}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,30,20,0.92) 0%, rgba(27,67,50,0.4) 60%, transparent 100%)',
        }} />
        <div className="container-wide" style={{ position: 'relative', paddingBottom: '3.5rem' }}>
          <Link
            href="/actualites"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem',
              textDecoration: 'none', marginBottom: '1.25rem',
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            Retour aux actualités
          </Link>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{
              background: post.tagColor, color: '#ffffff',
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
              padding: '0.375rem 0.875rem', borderRadius: '99px',
            }}>
              {post.tag}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{post.date}</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>· {post.lieu}</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800, color: '#ffffff',
            lineHeight: 1.2, maxWidth: 760,
          }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* CONTENU */}
      <section style={{ background: '#faf8f3', padding: '5rem 0' }}>
        <div className="container-wide" style={{ maxWidth: 820, margin: '0 auto' }}>

          {/* Intro */}
          <p style={{
            fontSize: '1.15rem', color: '#374151', lineHeight: 1.85,
            fontWeight: 500, marginBottom: '2.5rem',
            paddingBottom: '2.5rem', borderBottom: '1px solid #e5e7eb',
          }}>
            {post.intro}
          </p>

          {/* Texte complet */}
          <div style={{
            color: '#4b5563', fontSize: '1rem', lineHeight: 1.95,
            whiteSpace: 'pre-line', marginBottom: '3.5rem',
          }}>
            {post.content}
          </div>

          {/* Galerie photos */}
          {post.images.length > 1 && (
            <div style={{ marginBottom: '3.5rem' }}>
              <p style={{
                fontSize: '0.72rem', fontWeight: 700, color: '#2d6a4f',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}>
                Photos
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: post.images.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)',
                gap: '0.875rem',
              }}>
                {post.images.map((img, i) => (
                  <div key={i} style={{
                    position: 'relative',
                    height: post.images.length === 2 ? 300 : 220,
                    borderRadius: '16px', overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}>
                    <Image src={img} alt={`${post.title} — photo ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Partenaires */}
          <div style={{
            background: '#ffffff', borderRadius: '20px',
            padding: '2rem 2.25rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontSize: '0.72rem', fontWeight: 700, color: '#2d6a4f',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Partenaires
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {post.partenaires.map((p, i) => (
                <span key={i} style={{
                  background: '#faf8f3', color: '#8b5e15',
                  padding: '0.4rem 1rem', borderRadius: '99px',
                  fontSize: '0.85rem', fontWeight: 500,
                }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation retour */}
          <div style={{ textAlign: 'center' }}>
            <Link
              href="/actualites"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2rem', borderRadius: '99px',
                background: '#2d6a4f', color: '#ffffff',
                fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                boxShadow: '0 6px 18px rgba(45,106,79,0.3)',
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
              </svg>
              Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
