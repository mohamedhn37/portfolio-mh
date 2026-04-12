import { useState } from 'react'
import emailjs from 'emailjs-com'

// ── EMAILJS CONFIG ──
const EMAILJS_SERVICE_ID  = 'service_uf693fk'
const EMAILJS_TEMPLATE_ID = 'template_9adbone'
const EMAILJS_PUBLIC_KEY  = 'e_O3ObIGEe7DQZOZ7'

const links = [
  {
    href: 'mailto:hannaoui20.mohamed@gmail.com',
    label: 'Email', val: 'hannaoui20.mohamed@gmail.com',
    icon: (
      <svg width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/mohamed-hannaoui-3089171b0',
    label: 'LinkedIn', val: 'mohamed-hannaoui',
    icon: (
      <svg width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/mohamedhn37',
    label: 'GitHub', val: 'mohamedhn37',
    icon: (
      <svg width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    href: 'tel:+212700771200',
    label: 'Phone', val: '+212 700 771 200',
    icon: (
      <svg width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
      </svg>
    ),
  },
]

function Contact() {
  const [sending, setSending] = useState(false)
  const [toast, setToast]     = useState(false)
  const [fields, setFields]   = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSend = async () => {
    if (!fields.name || !fields.email || !fields.message) {
      alert('Please fill in name, email and message.')
      return
    }
    setSending(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          reply_to:  fields.email,
          subject:   fields.subject,
          message:   fields.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setFields({ name: '', email: '', subject: '', message: '' })
      setToast(true)
      setTimeout(() => setToast(false), 4000)
    } catch (e) {
      console.error('EmailJS error:', e)
      alert('Error sending message. Please try again.')
    }
    setSending(false)
  }

  return (
    <section id="contact">
      <div className="container">

        {/* ── TITRE ── */}
        <div className="row mb-5">
          <div className="col-lg-7">
            <div className="section-tag">Contact</div>
            <h2 className="section-title">Let's work together</h2>
            <p className="section-sub">Open to opportunities, freelance projects and collaborations.</p>
          </div>
        </div>

        {/* ── LIENS RAPIDES ── */}
        <div className="row g-3 mb-5">
          {links.map(l => (
            <div key={l.label} className="col-md-6 col-lg-3">
              <a href={l.href} target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-icon">{l.icon}</div>
                <div>
                  <div className="contact-label">{l.label}</div>
                  <div className="contact-val">{l.val}</div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* ── FORMULAIRE + ILLUSTRATION ── */}
        <div className="row g-4 align-items-center">

          {/* Formulaire */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <div style={{
                fontFamily: 'var(--font-head)', fontWeight: 700,
                fontSize: '1.1rem', marginBottom: 24
              }}>
                Send a message
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label-custom">Name</label>
                  <input
                    name="name" className="form-control-custom"
                    placeholder="Your name"
                    value={fields.name} onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label-custom">Email</label>
                  <input
                    name="email" className="form-control-custom"
                    placeholder="your@email.com"
                    value={fields.email} onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label-custom">Subject</label>
                  <input
                    name="subject" className="form-control-custom"
                    placeholder="Subject"
                    value={fields.subject} onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label-custom">Message</label>
                  <textarea
                    name="message" className="form-control-custom"
                    placeholder="Your message..."
                    value={fields.message} onChange={handleChange}
                    style={{ minHeight: 140 }}
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn-submit"
                    onClick={handleSend}
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send Message →'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
            <img
              src="/images/contact.png"
              alt="Contact illustration"
              style={{
                width: '100%',
                maxWidth: 420,
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 32px rgba(224,49,49,0.08))',
                animation: 'float 4s ease-in-out infinite',
              }}
              onError={e => e.target.style.display = 'none'}
            />
          </div>

        </div>
      </div>

      {/* Toast succès */}
      {toast && (
        <div className="toast-success">
          ✓ Message sent successfully! I'll reply soon.
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  )
}

export default Contact