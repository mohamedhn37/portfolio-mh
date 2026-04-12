const experience = [
  {
    dot: 'active', period: 'Nov 2023 — Present · Casablanca',
    role: 'Flight Data Analyst', company: 'Royal Air Maroc — SMS Department',
    desc: 'Analyzing FDR files to identify safety events and trends. Developing technical reports supporting SMS processes (FOQA/FDM/FDA/SRA). Using Excel,PowerBi, Python and internal tools for data visualization and reporting.',
    tags: ['FDR Analysis','SMS / FOQA','Python','Excel','Safety Reports'],
  },
  {
    dot: 'past', period: 'Jun 2023 — Nov 2023 · Casablanca',
    role: 'Full-Stack Developer (Internship)', company: 'Capgemini',
    desc: 'Designed and optimized internal web platforms using Symfony, Angular, and React. Automated processes in an agile and international environment.',
    tags: ['Symfony','Angular','React','Agile','PHP'],
  },
  {
    dot: 'past', period: 'Jan 2023 — May 2023 · Casablanca',
    role: 'Front-End Developer', company: '3WAcademy — Bootcamp',
    desc: 'Intensive front-end training covering HTML, CSS, JavaScript and React.',
    tags: ['HTML/CSS','JavaScript','React','Bootstrap'],
  },
]

const education = [
  {
    dot: 'edu', period: '2018 — 2022 · Casablanca',
    role: "Bachelor's Degree in Computer Science",
    company: "Faculty of Sciences Ben M'sik — Hassan II University",
    companyClass: 'edu-color',
    desc: 'Specialization in Database Development. Algorithms, data structures, database systems, software engineering and web development fundamentals.',
    tags: ['Database Development','Algorithms','SQL','Software Engineering'],
  },
  {
    dot: 'edu', period: '2017 — 2018 · Casablanca',
    role: 'Baccalaureate — Mathematical Sciences A',
    company: 'Lycée Ben M\'sik',
    companyClass: 'edu-color',
  },
]

function TimelineItem({ item }) {
  return (
    <div className="tl-item">
      <div className={`tl-dot ${item.dot}`} />
      <div>
        <div className="tl-period">{item.period}</div>
        <div className="tl-role">{item.role}</div>
        <div className={`tl-company ${item.companyClass || ''}`}>{item.company}</div>
        {item.desc && <div className="tl-desc">{item.desc}</div>}
        {item.tags && (
          <div className="tag-row">
            {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="section-tag">Journey</div>
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-sub">From university to aviation safety, passing through full-stack engineering.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="tl-section-label">Professional Experience</div>
            <div className="timeline">
              {experience.map(item => <TimelineItem key={item.role} item={item} />)}
            </div>
            <div className="tl-section-label" style={{ marginTop: 12 }}>Education</div>
            <div className="timeline">
              {education.map(item => <TimelineItem key={item.role} item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
