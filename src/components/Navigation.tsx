import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="SKJ Luxuria logo" className={styles.logoImage} />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopMenu}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <Link 
            to="/" 
            className={`${styles.mobileNavLink} ${location.pathname === '/' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${styles.mobileNavLink} ${location.pathname === '/about' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${styles.mobileNavLink} ${location.pathname === '/contact' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}
        onClick={closeMenu}
      />
    </nav>
  )
}
