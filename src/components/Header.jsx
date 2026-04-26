import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, target) => {
    e.preventDefault()
    setMenuOpen(false)
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, '#home')}>
          {/* <div className="header__logo-mark">Z</div> */}
          <img src="https://github.com/AnmolSharma29/zgyymarketing/blob/main/src/assets/Zgyy-Marketing.jpg" alt="" className="header_logo"/>
          <span className="header__logo-text">ZGYY MARKETING<span className="header__logo-accent">.</span></span>
        </a>

        <button
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Us</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
