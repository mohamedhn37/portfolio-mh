import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Certifications from './components/Certifications'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Certifications />
      <Reviews />
      <Contact />
      <footer>
        <p>© 2025 <span>Mohamed Hannaoui</span>· Casablanca, Morocco</p>
      </footer>
    </>
  )
}

export default App
