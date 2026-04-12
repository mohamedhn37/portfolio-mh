import { useState } from 'react'

// 📁 Ajoute les images dans : public/images/projects/
// Exemple : public/images/projects/DataProject.PNG

const projects = [
  {
    type: 'data',
    emoji: '✈',
    img: '/images/projects/DataProject.PNG',
    bg: 'linear-gradient(135deg,#1a1035,#2d1b69)',
    badge: 'badge-data',
    badgeLabel: 'Data App',
    title: 'Airlines Data Project',
    desc: 'Python data analysis on airline operations. Processing, visualization and statistical reporting deployed on Railway.',
    demo: 'https://web-production-25adf.up.railway.app/',
    code: 'https://github.com/mohamedhn37/DataProject',
  },
  {
    type: 'web',
    emoji: '👤',
    img: '/images/projects/UserDashboard.PNG',
    bg: 'linear-gradient(135deg,#0f172a,#1e3a5f)',
    badge: 'badge-web',
    badgeLabel: 'Web App',
    title: 'User Dashboard',
    desc: 'Full dashboard with user management, admin panel and dynamic data built with React and JavaScript.',
    demo: 'https://user-dashboard-seven.vercel.app/',
    code: 'https://github.com/mohamedhn37/UserDashboard',
  },
  {
    type: 'web',
    emoji: '💼',
    img: '/images/projects/Amhjobportal.PNG',
    bg: 'linear-gradient(135deg,#1a0a0a,#5f1a1a)',
    badge: 'badge-web',
    badgeLabel: 'Web App',
    title: 'AMH Job Portal',
    desc: 'Job listing portal. Browse, filter and apply — built with React and JavaScript.',
    demo: 'https://amhjobportal.vercel.app/',
    code: 'https://github.com/mohamedhn37/Amhjobportal',
  },
  {
    type: 'web',
    emoji: '☕',
    img: '/images/projects/CafeFloret.PNG',
    bg: 'linear-gradient(135deg,#0a1520,#0d3347)',
    badge: 'badge-web',
    badgeLabel: 'Web App',
    title: 'CafeFloret',
    desc: 'Restaurant and café showcase with menu display, modern UI and fully responsive layout in HTML/CSS/JS.',
    demo: 'https://mohamedhn37.github.io/tp-cafe-florette/',
    code: 'https://github.com/mohamedhn37/tp-cafe-florette',
  },
  {
    type: 'web',
    emoji: '🍽',
    img: '/images/projects/Restaurant.PNG',
    bg: 'linear-gradient(135deg,#1a0f0a,#3d1f0d)',
    badge: 'badge-web',
    badgeLabel: 'Web App',
    title: 'Restaurant Website',
    desc: 'Modern restaurant website with menu, online reservation and elegant responsive design.',
    demo: 'https://mohamedhn37.github.io/restaurant-web-site/',
    code: 'https://github.com/mohamedhn37/restaurant-web-site',
  },
  {
    type: 'web',
    emoji: '🌿',
    img: '/images/projects/Ensome.PNG',
    bg: 'linear-gradient(135deg,#0d1a0d,#1a3520)',
    badge: 'badge-web',
    badgeLabel: 'Web App',
    title: 'Ensome',
    desc: 'Clean and modern web application with smooth UI and responsive layout.',
    demo: 'https://ensome.vercel.app/',
    code: 'https://github.com/mohamedhn37/ensome',
  },
  {
    type: 'web',
    emoji: '🤖',
    img: '/images/projects/Chatbot.PNG',
    bg: 'linear-gradient(135deg,#0a0f1a,#0d2040)',
    badge: 'badge-web',
    badgeLabel: 'Web App',
    title: 'Chatbot',
    desc: 'Interactive chatbot application built with JavaScript, providing automated responses and conversation flow.',
    demo: 'https://mohamedhn37.github.io/chatbot/',
    code: 'https://github.com/mohamedhn37/chatbot',
  },
  {
    type: 'web',
    emoji: '🌍',
    img: '/images/projects/SaveTurk.PNG',
    bg: 'linear-gradient(135deg,#1a0a0f,#3d0d1a)',
    badge: 'badge-web',
    badgeLabel: 'Web App',
    title: 'SaveTurk',
    desc: 'Humanitarian web platform designed to raise awareness and support for a cause, with donation features.',
    demo: 'https://mohamedhn37.github.io/SaveTurk/',
    code: 'https://github.com/mohamedhn37/SaveTurk',
  },
]

function ProjectCard({ p }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="project-card">
      <div className="project-thumb" style={{ background: p.bg }}>
        {!imgFailed
          ? <img src={p.img} alt={p.title} onError={() => setImgFailed(true)} />
          : <div className="thumb-fallback">{p.emoji}</div>
        }
      </div>
      <div className="project-body">
        <span className={`project-type-badge ${p.badge}`}>{p.badgeLabel}</span>
        <div className="project-title">{p.title}</div>
        <div className="project-desc">{p.desc}</div>
        <div className="project-footer">
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn-demo">
            Live →
          </a>
          <a href={p.code} target="_blank" rel="noreferrer" className="btn-code">
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filters = [
    { key: 'all',  label: 'All Projects' },
    { key: 'web',  label: 'Web App' },
    { key: 'data', label: 'Data App' },
  ]

  const visible = projects.filter(p => filter === 'all' || p.type === filter)

  return (
    <section id="portfolio">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <div className="section-tag">Portfolio</div>
            <h2 className="section-title">Selected projects</h2>
            <p className="section-sub mb-4">Web apps and data tools — all with live demos.</p>
            <div className="filter-btns">
              {filters.map(f => (
                <button
                  key={f.key}
                  className={`filter-btn ${filter === f.key ? 'active' : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4">
          {visible.map(p => (
            <div key={p.title} className="col-md-6 col-lg-4">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio