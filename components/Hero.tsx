'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Hero.module.css'

const stats = [
  { value: 5,  suffix: '+', label: 'Años de experiencia' },
  { value: 48, suffix: '',  label: 'Proyectos entregados' },
  { value: 32, suffix: '',  label: 'Clientes satisfechos' },
  { value: 100,suffix: '',  label: 'Lighthouse score' },
]

const tickerItems = [
  'React', 'Vue.js', 'TypeScript', 'Figma',
  'Node.js', 'CSS Architecture', 'Performance Web', 'Accessibility',
]

function countUp(el: HTMLSpanElement, target: number, duration = 1400) {
  let start: number | null = null
  const step = (ts: number) => {
    if (!start) start = ts
    const p = Math.min((ts - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    el.textContent = Math.floor(eased * target).toString()
    if (p < 1) requestAnimationFrame(step)
    else el.textContent = target.toString()
  }
  requestAnimationFrame(step)
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const numRefs  = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          numRefs.current.forEach((span, i) => {
            if (span) countUp(span, stats[i].value)
          })
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        {/* Headline + meta */}
        <div className={styles.heroTop}>
          <div className={styles.heroGrid}>
            <div>
              <p className="tag-label fade-in">Frontend Developer &amp; UI Designer</p>
              <h1 className={`${styles.headline} fade-in d1`}>
                <span className={styles.lineAccent}>Building</span>
                <br />
                <span className="line-outline">Digital</span>
                <br />
                Presence
              </h1>
            </div>
            <div className={`${styles.heroMeta} fade-in d2`}>
              <p className={styles.descriptor}>
                Diseño y construyo interfaces que equilibran{' '}
                <strong>claridad visual</strong> con arquitectura de
                componentes sólida. Cinco años creando productos web que duran.
              </p>
              <Link href="#work" className="btn-outline">
                Ver proyectos
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className={`${styles.statsBar} fade-in d3`} aria-label="Estadísticas">
          {stats.map((s, i) => (
            <div key={s.label} className={styles.stat}>
              <span
                className={styles.statVal}
                ref={el => { numRefs.current[i] = el }}
                aria-label={`${s.value}${s.suffix} ${s.label}`}
              >
                0
              </span>
              <span className={styles.statDesc}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className={styles.tickerItem}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
