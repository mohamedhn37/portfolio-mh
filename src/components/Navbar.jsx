function Navbar({ theme, toggleTheme }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="navbar-custom">
      <div className="nav-logo">MH<span>.</span></div>

      <div className="nav-links">
        {['about','experience','skills','portfolio','certifications','reviews','contact'].map(id => (
          <a key={id} onClick={() => scrollTo(id)} style={{textTransform:'capitalize'}}>
            {id === 'certifications' ? 'Certs' : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '☀' : '🌙'}
        </button>
        <button className="btn-nav" onClick={() => window.open('mailto:hannaoui20.mohamed@gmail.com')}>
          Hire Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar
