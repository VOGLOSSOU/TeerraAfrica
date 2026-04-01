'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* HERO */}
      <section style={{
        paddingTop: '9rem', paddingBottom: '6rem',
        background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, background: '#b5832a', borderRadius: '50%', opacity: 0.08 }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 280, height: 280, background: '#e9c46a', borderRadius: '50%', opacity: 0.07 }} />
        <div className="container-wide" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="section-label" style={{ color: '#e9c46a' }}>Échangeons</span>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, color: '#ffffff',
              lineHeight: 1.1, marginBottom: '1.5rem',
            }}
          >
            Contactez-nous
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Vous avez un projet, une question ou vous souhaitez rejoindre notre réseau ?
            Nous serons ravis d&apos;échanger avec vous.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section style={{ background: '#faf8f3', padding: '6rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '4rem', alignItems: 'start' }}>

            {/* INFO SIDE */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b4332', marginBottom: '2rem' }}>
                Informations de contact
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    ),
                    label: 'Téléphone',
                    value: '+33 7 84 24 02 43',
                    href: 'tel:+33784240243',
                    color: '#2d6a4f',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    ),
                    label: 'Siège social',
                    value: 'Normandie, France',
                    sub: 'Interventions : Afrique de l\'Ouest & Australe',
                    color: '#b5832a',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    ),
                    label: 'Secteur',
                    value: 'Conseil en environnement',
                    color: '#52b788',
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex', gap: '1rem',
                      background: '#ffffff', borderRadius: '16px',
                      padding: '1.25rem 1.5rem',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: '12px',
                      background: c.color, color: '#ffffff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#b5832a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                        {c.label}
                      </p>
                      {c.href ? (
                        <a href={c.href} style={{ color: '#1b4332', fontWeight: 600, fontSize: '0.925rem', textDecoration: 'none' }}>
                          {c.value}
                        </a>
                      ) : (
                        <p style={{ color: '#1b4332', fontWeight: 600, fontSize: '0.925rem' }}>{c.value}</p>
                      )}
                      {'sub' in c && c.sub && (
                        <p style={{ color: '#9ca3af', fontSize: '0.825rem', marginTop: '0.2rem' }}>{c.sub}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux */}
              <div style={{ background: '#1b4332', borderRadius: '20px', padding: '1.75rem' }}>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  Suivez-nous
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    {
                      href: 'https://www.facebook.com/share/1HPuMCR7Nz/?mibextid=wwXIfr',
                      label: 'Facebook',
                      bg: '#1877f2',
                    },
                    {
                      href: 'https://www.linkedin.com/company/teerraafrica/',
                      label: 'LinkedIn',
                      bg: '#0a66c2',
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '0.75rem', borderRadius: '12px',
                        background: s.bg, color: '#ffffff',
                        fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FORM */}
            <div style={{
              background: '#ffffff', borderRadius: '28px',
              padding: '3rem', border: '1px solid #e5e7eb',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1b4332', marginBottom: '0.5rem' }}>
                Envoyez-nous un message
              </h2>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
                Nous vous répondrons dans les plus brefs délais.
              </p>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: 'rgba(45,106,79,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}>
                    <svg style={{ width: 36, height: 36, color: '#2d6a4f' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1b4332', marginBottom: '0.75rem' }}>
                    Message envoyé !
                  </h3>
                  <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '0.925rem' }}>
                    Merci {form.nom}, nous vous répondrons très bientôt.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ nom: '', email: '', sujet: '', message: '' }); }}
                    style={{
                      padding: '0.75rem 1.75rem', borderRadius: '99px',
                      background: '#2d6a4f', color: '#ffffff',
                      fontWeight: 600, fontSize: '0.875rem', border: 'none', cursor: 'pointer',
                    }}
                  >
                    Nouveau message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    {[
                      { id: 'nom', label: 'Nom complet', type: 'text', placeholder: 'Jean Dupont' },
                      { id: 'email', label: 'Email', type: 'email', placeholder: 'jean@exemple.com' },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                          {f.label} <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type={f.type}
                          id={f.id}
                          name={f.id}
                          value={form[f.id as keyof typeof form]}
                          onChange={handleChange}
                          required
                          placeholder={f.placeholder}
                          style={{
                            width: '100%', padding: '0.75rem 1rem',
                            border: '1.5px solid #e5e7eb', borderRadius: '12px',
                            fontSize: '0.9rem', outline: 'none',
                            background: '#faf8f3',
                            fontFamily: 'inherit',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label htmlFor="sujet" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                      Sujet <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      value={form.sujet}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%', padding: '0.75rem 1rem',
                        border: '1.5px solid #e5e7eb', borderRadius: '12px',
                        fontSize: '0.9rem', outline: 'none',
                        background: '#faf8f3', color: '#374151',
                        fontFamily: 'inherit',
                      }}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="partenariat">Proposition de partenariat</option>
                      <option value="projet">Soumettre un projet</option>
                      <option value="benevole">Devenir bénévole</option>
                      <option value="information">Demande d&apos;information</option>
                      <option value="media">Presse / Médias</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label htmlFor="message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>
                      Message <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre demande, projet ou question..."
                      style={{
                        width: '100%', padding: '0.875rem 1rem',
                        border: '1.5px solid #e5e7eb', borderRadius: '12px',
                        fontSize: '0.9rem', outline: 'none',
                        background: '#faf8f3', resize: 'vertical',
                        fontFamily: 'inherit', lineHeight: 1.7,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%', padding: '1rem',
                      borderRadius: '14px', border: 'none',
                      background: 'linear-gradient(135deg, #2d6a4f, #1b4332)',
                      color: '#ffffff', fontWeight: 700, fontSize: '0.95rem',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(45,106,79,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      fontFamily: 'inherit',
                    }}
                  >
                    Envoyer le message
                    <svg style={{ width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* REJOINDRE */}
      <section style={{ background: '#1b4332', padding: '4rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            Rejoignez notre réseau
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.975rem', maxWidth: 520, margin: '0 auto' }}>
            Spécialistes de l&apos;environnement, experts en éducation, porteurs de projets — notre passion et nos compétences font la différence.
          </p>
        </div>
      </section>
    </>
  );
}
