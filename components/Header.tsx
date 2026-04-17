'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const navItems = [
  {
    href: '#about',
    label: 'Sobre mí',
    dropdown: [
      { heading: 'David Mateos', sub: 'Diseñador & Desarrollador Full Stack' },
      { heading: '5+ años', sub: 'de experiencia en producto digital' },
      { heading: '40+ proyectos', sub: 'entregados en producción' },
      { heading: 'Disponible', sub: 'para nuevos proyectos' },
    ],
  },
  {
    href: '#skills',
    label: 'Skills',
    dropdown: [
      { heading: 'Frontend', sub: 'React · Next.js · TypeScript · Vue.js' },
      { heading: 'Backend', sub: 'Node.js · Supabase · PostgreSQL' },
      { heading: 'UI / UX', sub: 'Figma · CSS · Animaciones · WCAG' },
      { heading: 'Otros', sub: 'Git · Docker · SEO · Performance' },
    ],
  },
  {
    href: '#work',
    label: 'Trabajo',
    dropdown: [
      { heading: 'E-Commerce Platform', sub: 'Next.js + Stripe + Supabase' },
      { heading: 'Portfolio CMS', sub: 'React + Headless CMS + Vercel' },
      { heading: 'SaaS Dashboard', sub: 'Vue.js + Node.js + PostgreSQL' },
      { heading: 'Ver todos →', sub: 'Explorar proyectos completos' },
    ],
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  let closeTimer: ReturnType<typeof setTimeout>

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const openDropdown  = (i: number) => { clearTimeout(closeTimer); setActiveDropdown(i) }
  const closeDropdown = () => { closeTimer = setTimeout(() => setActiveDropdown(null), 120) }
  const closeDrawer   = () => setOpen(false)

  return (
    <>
      <header
        id="header"
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className="container">
          <div className={styles.inner}>
            <Link href="#hero" className={styles.logo} onClick={closeDrawer}>
              David Mateos
            </Link>

            <nav aria-label="Navegación principal">
              <ul className={styles.nav}>
                {navItems.map((item, i) => (
                  <li
                    key={item.href}
                    className={styles.navItem}
                    onMouseEnter={() => openDropdown(i)}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${activeDropdown === i ? styles.navLinkActive : ''}`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === i}
                    >
                      {item.label}
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`${styles.dropdown} ${activeDropdown === i ? styles.dropdownVisible : ''}`}
                      onMouseEnter={() => openDropdown(i)}
                      onMouseLeave={closeDropdown}
                      role="region"
                      aria-label={`Info ${item.label}`}
                    >
                      <div className={styles.dropdownInner}>
                        {item.dropdown.map((d, j) => (
                          <div key={j} className={styles.dropdownRow}>
                            <span className={styles.dropdownHeading}>{d.heading}</span>
                            <span className={styles.dropdownSub}>{d.sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}

                <li>
                  <Link href="#contact" className={`${styles.navLink} ${styles.navCta}`}>
                    Contactar
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="nav-drawer"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <nav
        id="nav-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-label="Menú móvil"
        aria-hidden={!open}
      >
        {navItems.map(item => (
          <Link key={item.href} href={item.href} className={styles.drawerLink} onClick={closeDrawer}>
            {item.label}
          </Link>
        ))}
        <Link href="#contact" className={styles.drawerLink} onClick={closeDrawer}>
          Contactar
        </Link>
      </nav>
    </>
  )
}
