const cards = [
  { icon: '✈', title: 'Flight Data Analyst', desc: 'FDR analysis, FOQA/FDM/FDA/SRA — ensuring operational safety at Royal Air Maroc through data-driven insights.', featured: true },
  { icon: '⌨', title: 'Software Developer', desc: 'React, Python, SQL, Symfony — building clean, efficient web platforms and data tools with solid engineering practices.' },
  { icon: '📊', title: 'Data & Reporting', desc: 'Excel,Power BI, Python visualization, technical safety reports. Turning raw flight data into actionable intelligence.' },
  { icon: '🌍', title: 'Multilingual', desc: 'Arabic, French, English and German (B1 TELC) — comfortable in international environments.' },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <div className="section-tag">About</div>
            <h2 className="section-title">A unique dual expertise</h2>
            <p className="section-sub">Where aviation safety meets modern software engineering.</p>
          </div>
        </div>
        <div className="row g-4">
          {cards.map(c => (
            <div key={c.title} className="col-md-6 col-lg-3">
              <div className={`about-card ${c.featured ? 'featured' : ''}`}>
                <div className="about-icon">{c.icon}</div>
                <h5>{c.title}</h5>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
