import { useState } from 'react'

// 📁 Ajoute les images dans : public/images/certs/
const certs = [
  {
    featured: true,
    img: '/images/certs/IATA SMS.jpg',
    emoji: '✈',
    name: 'Safety Management Systems (SMS) for Airlines',
    org: 'IATA Training',
    year: '2025 · Obtained with Distinction ⭐',
    link: '#',
  },
  {
    img: '/images/certs/React Basics Coursera Certificate.png',
    emoji: '⚛',
    name: 'React Basics',
    org: 'Meta / Coursera',
    year: 'Coursera',
    link: '#',
  },
  {
    img: '/images/certs/Python for data sciences.png',
    emoji: '🐍',
    name: 'Python for Data Science',
    org: 'IBM / Coursera',
    year: 'Coursera',
    link: '#',
  },
  {
    img: '/images/certs/Coursera Agil project certificate.png',
    emoji: '📋',
    name: 'Agile Project Management',
    org: 'IBM / Coursera',
    year: 'Coursera',
    link: '#',
  },
  {
    img: '/images/certs/onemillionarabecoder.png',
    emoji: '💻',
    name: 'One Million Arab Coders',
    org: 'Full Stack Development Track',
    year: 'Dubai Future Foundation',
    link: '#',
  },
  {
    img: '/images/certs/HANNAOUI MOHAMED_B1.png',
    emoji: '🇩🇪',
    name: 'TELC B1 Certificate — German',
    org: 'TELC Language Tests',
    year: 'December 2024',
    link: '#',
  },
  {
  img: '/images/certs/AWS Fundamentals Building Serverless.png',
  emoji: '☁️',
  name: 'AWS Fundamentals: Building Serverless Applications',
  org: 'Amazon Web Services / Coursera',
  year: 'September 2023',
  link: '#',
},
{
  img: '/images/certs/AngularJS for Beginners Getting Started.jpeg',
  emoji: '🔴',
  name: 'AngularJS for Beginners: Getting Started',
  org: 'Coursera Project Network',
  year: 'October 2023',
  link: '#',
},
{
  img: '/images/certs/Build ATM User Interface using Routing in Angular.jpeg',
  emoji: '🏧',
  name: 'Build ATM User Interface using Routing in Angular',
  org: 'Coursera Project Network',
  year: 'October 2023',
  link: '#',
},
]

function Certifications() {
  const [selected, setSelected] = useState(null) // cert ouvert dans le modal
  const [imgFailed, setImgFailed] = useState({})

  const handleImgError = (name) => {
    setImgFailed(prev => ({ ...prev, [name]: true }))
  }

  return (
    <section id="certifications">
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <div className="section-tag">Certifications</div>
            <h2 className="section-title">Credentials & training</h2>
            <p className="section-sub">
              Industry-recognized certifications across aviation safety and software development.
              <span style={{ fontSize: '.8rem', color: 'var(--muted)', marginLeft: 8 }}>
                — Click to enlarge
              </span>
            </p>
          </div>
        </div>

        {/* ── GRILLE ── */}
        <div className="row g-4">
          {certs.map((c) => (
            <div
              key={c.name}
              className={c.featured ? 'col-12 col-md-6' : 'col-6 col-md-4 col-lg-3'}
            >
              <div
                onClick={() => setSelected(c)}
                style={{
                  background: 'var(--card-bg)',
                  border: `1px solid ${c.featured ? 'var(--accent-border)' : 'var(--border)'}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform .25s, border-color .25s, box-shadow .25s',
                  height: '100%',
                  background: c.featured ? 'var(--accent-soft)' : 'var(--card-bg)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--accent-border)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.25)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = c.featured ? 'var(--accent-border)' : 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Image du certificat */}
                <div style={{
                  height: c.featured ? 200 : 140,
                  background: 'var(--bg3)',
                  overflow: 'hidden',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative'
                }}>
                  {!imgFailed[c.name] ? (
                    <img
                      src={c.img}
                      alt={c.name}
                      onError={() => handleImgError(c.name)}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', display: 'block',
                        transition: 'transform .4s'
                      }}
                    />
                  ) : (
                    <div style={{
                      fontSize: c.featured ? '3rem' : '2rem',
                      opacity: .5
                    }}>
                      {c.emoji}
                    </div>
                  )}

                  {/* Badge zoom */}
                  <div style={{
                    position: 'absolute', top: 8, right: 8,
                    background: 'rgba(0,0,0,.5)', color: '#fff',
                    fontSize: '.65rem', padding: '3px 8px',
                    borderRadius: 100, backdropFilter: 'blur(4px)'
                  }}>
                    🔍 View
                  </div>

                  {/* Badge featured */}
                  {c.featured && (
                    <div style={{
                      position: 'absolute', top: 8, left: 8,
                      background: 'var(--accent)', color: '#fff',
                      fontSize: '.65rem', fontWeight: 700,
                      padding: '3px 10px', borderRadius: 100,
                      fontFamily: 'var(--font-head)'
                    }}>
                      ⭐ Distinction
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: '14px 16px' }}>
                  <div style={{
                    fontSize: c.featured ? '.9rem' : '.8rem',
                    fontWeight: 700, color: 'var(--text)',
                    fontFamily: 'var(--font-head)', marginBottom: 4,
                    lineHeight: 1.3
                  }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginBottom: 2 }}>
                    {c.org}
                  </div>
                  <div style={{ fontSize: '.7rem', color: 'var(--accent)', fontWeight: 600 }}>
                    {c.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn .2s ease'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--card-bg)',
              borderRadius: 20,
              overflow: 'hidden',
              maxWidth: 720, width: '100%',
              border: '1px solid var(--border)',
              animation: 'scaleIn .25s ease'
            }}
          >
            {/* Header modal */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-head)', fontWeight: 700,
                  fontSize: '1rem', marginBottom: 2
                }}>
                  {selected.name}
                </div>
                <div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>
                  {selected.org} · <span style={{ color: 'var(--accent)' }}>{selected.year}</span>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  color: 'var(--muted)', width: 32, height: 32,
                  borderRadius: '50%', cursor: 'pointer', fontSize: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >✕</button>
            </div>

            {/* Image grande */}
            <div style={{ background: '#fff', minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {!imgFailed[selected.name] ? (
                <img
                  src={selected.img}
                  alt={selected.name}
                  onError={() => handleImgError(selected.name)}
                  style={{ width: '100%', display: 'block', objectFit: 'contain', maxHeight: 500 }}
                />
              ) : (
                <div style={{ fontSize: '4rem', opacity: .4, padding: 40 }}>{selected.emoji}</div>
              )}
            </div>

            {/* Footer modal */}
            <div style={{
              padding: '14px 20px',
              borderTop: '1px solid var(--border)',
              display: 'flex', gap: 10, justifyContent: 'flex-end'
            }}>
              {selected.link && selected.link !== '#' && (
                <a
                  href={selected.link} target="_blank" rel="noreferrer"
                  style={{
                    background: 'var(--accent)', color: '#fff',
                    padding: '8px 18px', borderRadius: 8,
                    fontSize: '.82rem', fontWeight: 700,
                    textDecoration: 'none', fontFamily: 'var(--font-head)'
                  }}
                >
                  View Certificate ↗
                </a>
              )}
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: 'transparent', color: 'var(--muted)',
                  border: '1px solid var(--border)', padding: '8px 18px',
                  borderRadius: 8, fontSize: '.82rem', cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>

          <style>{`
            @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
            @keyframes scaleIn { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
          `}</style>
        </div>
      )}
    </section>
  )
}

export default Certifications