import Image from 'next/image'
import styles from './About.module.css'

const services = [
  {
    num: '01',
    name: 'Desarrollo Frontend',
    desc: 'React, Vue.js, TypeScript. Componentes reutilizables, animaciones accesibles y rendimiento por encima de todo.',
  },
  {
    num: '02',
    name: 'Diseño UI & Sistemas',
    desc: 'Design systems documentados con Figma y Storybook. Tokens, grids, tipografía y componentes coherentes a escala.',
  },
  {
    num: '03',
    name: 'Performance & SEO',
    desc: 'Auditorías Lighthouse, lazy loading, optimización de imágenes y Core Web Vitals. Velocidad medible, no percibida.',
  },
  {
    num: '04',
    name: 'Consultoría Técnica',
    desc: 'Revisión de arquitectura, code reviews, migración de stacks y formación de equipos frontend júnior.',
  },
]

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className="container">
        <div className={styles.grid}>
          {/* Left column */}
          <div className={styles.left}>
            <div>
              <p className="tag-label fade-in">Sobre mí</p>
              <h2 id="about-title" className={`${styles.title} fade-in d1`}>
                Código<br />preciso.<br />Diseño<br />que habla.
              </h2>
            </div>

            <div className={`${styles.avatar} fade-in d2`}>
              <Image
                src="/david.jpg"
                alt="David Mateos, Frontend Developer"
                fill
                sizes="240px"
                style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'saturate(0.6) contrast(1.05)' }}
                priority
              />
              <div className={styles.avatarTint} aria-hidden="true" />
            </div>

            <p className={`${styles.bio} fade-in d3`}>
              Soy desarrollador frontend especializado en la intersección entre{' '}
              <strong>diseño visual</strong> y código limpio. Trabajo con startups
              y agencias que quieren interfaces que destaquen por su calidad,
              no por sus efectos especiales.
            </p>
          </div>

          {/* Services list */}
          <div className={styles.right}>
            <p className="tag-label fade-in">Servicios</p>
            <ul className={styles.serviceList}>
              {services.map((s, i) => (
                <li key={s.num} className={`${styles.serviceRow} service-row fade-in d${i + 1}`}>
                  <span className={styles.serviceNum}>{s.num}</span>
                  <div>
                    <div className={styles.serviceName}>{s.name}</div>
                    <div className={styles.serviceDesc}>{s.desc}</div>
                  </div>
                  <span className={styles.serviceArrow} aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
