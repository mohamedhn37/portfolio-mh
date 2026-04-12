import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase'
import {
  collection, addDoc, onSnapshot,
  serverTimestamp
} from 'firebase/firestore'

const COLLECTION = 'reviews'
const AUTO_DELAY = 5000 // 10 secondes

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)
  const [name, setName]       = useState('')
  const [job, setJob]         = useState('')
  const [text, setText]       = useState('')
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const intervalRef = useRef(null)

  // ── Lecture Firebase ──
  useEffect(() => {
    const unsub = onSnapshot(collection(db, COLLECTION), snap => {
      setReviews(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setLoading(false)
    }, err => {
      console.error('Firebase error:', err)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  useEffect(() => { setCurrent(0) }, [reviews.length])

  // ── Auto-rotate toutes les 10s ──
  const startAutoPlay = () => {
    stopAutoPlay()
    if (reviews.length <= 1) return
    intervalRef.current = setInterval(() => {
      setCurrent(i => (i + 1) % reviews.length)
    }, AUTO_DELAY)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Démarre l'autoplay dès que les reviews sont chargées
  useEffect(() => {
    if (reviews.length > 1) startAutoPlay()
    return () => stopAutoPlay()
  }, [reviews.length])

  // Navigation manuelle — remet le timer à zéro
  const goTo = (index) => {
    setCurrent(index)
    startAutoPlay() // reset le timer
  }

  const prev = () => goTo((current - 1 + reviews.length) % reviews.length)
  const next = () => goTo((current + 1) % reviews.length)

  // ── Ajout nouvelle review ──
  const handleSubmit = async () => {
    if (!name.trim() || !text.trim()) {
      alert('Merci de remplir ton nom et ta review.')
      return
    }
    setSending(true)
    try {
      await addDoc(collection(db, COLLECTION), {
        name: name.trim(),
        job: job.trim(),
        review: text.trim(),
        image: '',
        createdAt: serverTimestamp(),
      })
      setName(''); setJob(''); setText('')
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3500)
    } catch (e) {
      console.error('Firebase error:', e)
      alert("Erreur lors de l'envoi. Réessaie.")
    }
    setSending(false)
  }

  const r = reviews[current]

  return (
    <section id="reviews">
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <div className="section-tag">Reviews</div>
            <h2 className="section-title">What people say</h2>
            <p className="section-sub">Feedback from colleagues and collaborators.</p>
          </div>
        </div>

        <div className="row g-4 align-items-start">

          {/* ── CAROUSEL ── */}
          <div className="col-lg-8">
            <div style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '40px 36px',
              minHeight: 280,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>

              {loading ? (
                <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '.88rem' }}>
                  Loading reviews...
                </div>

              ) : reviews.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '.88rem' }}>
                  No reviews yet — be the first!
                </div>

              ) : (
                <>
                  {/* Quote */}
                  <div style={{
                    fontSize: '3.5rem', color: 'var(--accent)', lineHeight: 1,
                    fontFamily: 'var(--font-head)', marginBottom: 16
                  }}>"</div>

                  {/* Text */}
                  <div style={{
                    fontSize: '1rem', color: 'var(--text)',
                    fontStyle: 'italic', lineHeight: 1.75,
                    marginBottom: 28, minHeight: 64,
                  }}>
                    {r?.review}
                  </div>

                  {/* Reviewer */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                    {r?.image ? (
                      <img src={r.image} alt={r.name}
                        onError={e => e.target.style.display = 'none'}
                        style={{
                          width: 44, height: 44, borderRadius: '50%',
                          objectFit: 'cover', border: '2px solid var(--accent-border)',
                          flexShrink: 0
                        }}
                      />
                    ) : (
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'var(--accent-soft)', border: '2px solid var(--accent-border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1rem', fontWeight: 700, color: 'var(--accent)',
                        flexShrink: 0, fontFamily: 'var(--font-head)'
                      }}>
                        {r?.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '.95rem', fontFamily: 'var(--font-head)' }}>
                        {r?.name}
                      </div>
                      <div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>
                        {r?.job || 'Community'}
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>

                    <button onClick={prev} style={{
                      width: 38, height: 38, borderRadius: '50%',
                      border: '1px solid var(--border)', background: 'transparent',
                      color: 'var(--muted)', cursor: 'pointer', fontSize: '1.2rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all .2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
                    >‹</button>

                    {/* Dots avec progress bar */}
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      {reviews.map((_, i) => (
                        <div key={i} onClick={() => goTo(i)} style={{
                          width: i === current ? 22 : 7, height: 7,
                          borderRadius: 4, cursor: 'pointer',
                          background: i === current ? 'var(--accent)' : 'var(--muted2)',
                          transition: 'all .3s ease'
                        }} />
                      ))}
                    </div>

                    <button onClick={next} style={{
                      width: 38, height: 38, borderRadius: '50%',
                      border: '1px solid var(--border)', background: 'transparent',
                      color: 'var(--muted)', cursor: 'pointer', fontSize: '1.2rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all .2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
                    >›</button>

                    <span style={{ fontSize: '.75rem', color: 'var(--muted)', marginLeft: 4 }}>
                      {current + 1} / {reviews.length}
                    </span>

                  </div>
                </>
              )}
            </div>
          </div>

          {/* ── FORMULAIRE ── */}
          <div className="col-lg-4">
            <div className="review-form-card">
              <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1rem', marginBottom: 20 }}>
                Leave a review
              </div>

              <label className="form-label-custom">Name</label>
              <input className="form-control-custom" placeholder="Your name"
                value={name} onChange={e => setName(e.target.value)} />

              <label className="form-label-custom">Job</label>
              <input className="form-control-custom" placeholder="Your position"
                value={job} onChange={e => setJob(e.target.value)} />

              <label className="form-label-custom">Review</label>
              <textarea className="form-control-custom" placeholder="Share your experience..."
                value={text} onChange={e => setText(e.target.value)} />

              <button className="btn-submit" onClick={handleSubmit} disabled={sending}>
                {sending ? 'Sending...' : 'Submit Review'}
              </button>

              {success && (
                <div style={{ marginTop: 12, fontSize: '.82rem', color: '#16a34a', textAlign: 'center' }}>
                  ✓ Review sent! Thank you 🙏
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Reviews