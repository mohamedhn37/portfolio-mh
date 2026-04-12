const aviationSkills = [
  { name: 'FDM / FDA Analysis', pct: 95 },
  { name: 'Safety Management System', pct: 92 },
  { name: 'Python (Data Science)', pct: 80 },
  { name: 'Excel / SQL / Reporting', pct: 88 },
  { name: 'Data Visualization', pct: 82 },
]

const webSkills = [
  { name: 'HTML / CSS / JavaScript', pct: 88 },
  { name: 'React.js / Bootstrap', pct: 80 },
  { name: 'Symfony / Angular', pct: 65 },
  { name: 'Firebase / EmailJS', pct: 72 },
  { name: 'Git / GitHub', pct: 78 },
]

const techs = [
  { name: 'HTML5', color: '#e34c26' },
  { name: 'CSS3', color: '#1572b6' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'React', color: '#61dafb' },
  { name: 'Bootstrap', color: '#7952b3' },
  { name: 'Python', color: '#3776ab' },
  { name: 'SQL', color: '#4479a1' },
  { name: 'Firebase', color: '#ffca28' },
  { name: 'Symfony', color: '#6f42c1' },
  { name: 'Angular', color: '#dd0031' },
]

function SkillBar({ name, pct }) {
  return (
    <div className="skill-item">
      <div className="skill-name-row">
        <span>{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <div className="section-tag">Skills</div>
            <h2 className="section-title">Technical expertise</h2>
            <p className="section-sub">Aviation data science meets modern web engineering.</p>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-5">
            <div className="skill-group-title">Aviation & Data</div>
            {aviationSkills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="col-lg-5">
            <div className="skill-group-title">Web Development</div>
            {webSkills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <div className="tech-icons">
              {techs.map(t => (
                <div key={t.name} className="tech-icon">
                  <span className="tech-dot" style={{ background: t.color }} />
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
