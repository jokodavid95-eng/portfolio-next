import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="#hero" className={styles.logo}>David Mateos</Link>
          <p className={styles.copy}>© 2026 — Diseñado y construido por David Mateos</p>
          <div className={styles.links}>
            <Link href="#about" className={styles.link}>Sobre mí</Link>
            <Link href="#work"  className={styles.link}>Trabajo</Link>
            <Link href="#contact" className={styles.link}>Contacto</Link>
            <Link href="#hero" className={styles.backTop} aria-label="Volver arriba">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M5 8V2M2 5l3-3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
