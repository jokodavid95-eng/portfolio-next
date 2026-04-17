'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './Skills.module.css'

const tabs = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5',            pct: 95 },
      { name: 'CSS3 / SASS',      pct: 90 },
      { name: 'JavaScript ES6+',  pct: 88 },
      { name: 'TypeScript',       pct: 82 },
      { name: 'React',            pct: 85 },
      { name: 'Next.js',          pct: 80 },
      { name: 'Vue.js',           pct: 75 },
    ],
  },
  {
    id: 'design',
    label: 'UI / UX',
    skills: [
      { name: 'Figma',              pct: 80 },
      { name: 'Responsive Design',  pct: 95 },
      { name: 'CSS Animations',     pct: 85 },
      { name: 'Accessibility WCAG', pct: 78 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Tools',
    skills: [
      { name: 'Node.js',      pct: 65 },
      { name: 'Git / GitHub', pct: 90 },
      { name: 'Webpack/Vite', pct: 72 },
      { name: 'REST APIs',    pct: 80 },
      { name: 'Supabase',     pct: 70 },
      { name: 'PostgreSQL',   pct: 60 },
    ],
  },
  {
    id: 'other',
    label: 'Otros',
    skills: [
      { name: 'SEO Técnico',      pct: 70 },
      { name: 'Web Performance',  pct: 82 },
      { name: 'Testing',          pct: 68 },
      { name: 'Docker',           pct: 55 },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const [animated,  setAnimated]  = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Animate bars when section enters view for first time
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const handleTab = (i: number) => {
    setActiveTab(i)
    // Re-trigger bar animation on tab switch
    setAnimated(false)
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)))
  }

  const current = tabs[activeTab]

  return (
    <section id="skills" className={styles.skills} ref={sectionRef} aria-labelledby="skills-title">
      <div className="container">
        <div className={styles.layout}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div>
              <p className="tag-label fade-in">Stack técnico</p>
              <h2 id="skills-title" className={`${styles.title} fade-in d1`}>
                Dominio<br />absoluto,<br />no percepción.
              </h2>
            </div>

            <nav aria-label="Categorías de habilidades">
              <ul className={`${styles.tabList} fade-in d2`} role="tablist">
                {tabs.map((t, i) => (
                  <li key={t.id} role="presentation">
                    <button
                      role="tab"
                      id={`tab-${t.id}`}
                      aria-selected={i === activeTab}
                      aria-controls={`panel-${t.id}`}
                      className={`${styles.tabBtn} ${i === activeTab ? styles.tabActive : ''}`}
                      onClick={() => handleTab(i)}
                    >
                      {t.label}
                      <span aria-hidden="true">→</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Panel */}
          <div className={styles.main}>
            <div
              id={`panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
            >
              <ul className={styles.skillGrid} style={{ listStyle: 'none' }}>
                {current.skills.map((s, i) => (
                  <li key={s.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{s.name}</span>
                      <span className={styles.skillPct}>{s.pct}%</span>
                    </div>
                    <div
                      className={styles.skillTrack}
                      role="progressbar"
                      aria-valuenow={s.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${s.name}: ${s.pct}%`}
                    >
                      <div
                        className={styles.skillBar}
                        style={{ width: animated ? `${s.pct}%` : '0%' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
