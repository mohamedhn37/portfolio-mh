function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-7">
            <div className="hero-badge">
              <span className="badge-dot" />
              Open to new opportunities
            </div>

            <h1 className="hero-title">
              Mohamed<br /><span className="accent">Hannaoui</span>
            </h1>

            <p className="hero-role">
              <strong>Flight Data Analyst</strong> at Royal Air Maroc &nbsp;·&nbsp; Full-Stack Developer
            </p>

            <p className="hero-desc">
              Bridging aviation safety and technology — analyzing flight data within
              the SMS department while building elegant software solutions.
            </p>

            <div className="hero-ctas">
              <button
                className="btn-primary-custom"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects →
              </button>
              <button
                className="btn-ghost-custom"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in touch
              </button>
            </div>

            <div className="hero-stats">
              <div><div className="stat-val">2+</div><div className="stat-label">Years at RAM</div></div>
              <div className="stat-divider" />
              <div><div className="stat-val">4</div><div className="stat-label">Languages</div></div>
              <div className="stat-divider" />
              <div><div className="stat-val">IATA</div><div className="stat-label">Distinction</div></div>
              <div className="stat-divider" />
              <div><div className="stat-val">7+</div><div className="stat-label">Projects</div></div>
            </div>
          </div>

          {/* RIGHT — CARD */}
          <div className="col-lg-5">
            <div className="hero-card">
              <div className="avatar-wrap">
              
                <div className="avatar-fallback">  <img
                  src="/images/MH.jpg"
                  alt="Mohamed Hannaoui"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                /></div>
              </div>

              <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>
                Mohamed Hannaoui
              </div>
              <div style={{ fontSize: '.78rem', color: 'var(--accent)', marginBottom: 18, fontWeight: 600 }}>
                Flight Data Analyst · Developer
              </div>

              <div className="info-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Casablanca, Morocco
              </div>
              <div className="info-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hannaoui20.mohamed@gmail.com
              </div>
              <div className="info-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                <a href="https://github.com/mohamedhn37" target="_blank" rel="noreferrer">github.com/mohamedhn37</a>
              </div>
              <div className="info-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <a href="https://linkedin.com/in/mohamed-hannaoui-3089171b0" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>

              <div className="lang-chips">
                {['🇲🇦 Arabic','🇫🇷 French','🇬🇧 English','🇩🇪 German B1'].map(l => (
                  <span key={l} className="lang-chip">{l}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
