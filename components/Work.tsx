import Image from 'next/image'
import styles from './Work.module.css'

const projects = [
  {
    index: '01 / 2024',
    name: 'Nexora Dashboard',
    desc: 'Panel de analítica en tiempo real para fintech. Diseñado para legibilidad de datos densos, respuesta sub-100ms y accesibilidad WCAG AA.',
    tags: ['React', 'TypeScript', 'D3.js', 'REST API'],
    image: '/nexora.jpg.png',
    imageAlt: 'Nexora Dashboard — red de nodos y datos en tiempo real',
  },
  {
    index: '02 / 2023',
    name: 'Verde Design System',
    desc: 'Sistema de diseño completo con 60+ componentes documentados, tokens y Storybook.',
    tags: ['Vue.js', 'SASS', 'Storybook'],
    image: '/verde.jpg.png',
    imageAlt: 'Verde Design System — patrones circulares tecnológicos en verde',
  },
  {
    index: '03 / 2023',
    name: 'Pulse Landing',
    desc: 'Landing de lanzamiento SaaS de alto rendimiento. Lighthouse 100 en performance. Scroll storytelling sin librerías externas y carga optimizada con Vite.',
    tags: ['HTML5', 'CSS3', 'Vite', 'SEO técnico'],
    image: '/pulse.jpg.png',
    imageAlt: 'Pulse Landing — dashboard de lanzamiento con gráficas y cohete',
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-title">
      <div className="container">
        <div className={styles.workHeader}>
          <div>
            <p className="tag-label fade-in">Proyectos seleccionados</p>
            <h2 id="work-title" className={`${styles.title} fade-in d1`}>
              Trabajo<br />destacado
            </h2>
          </div>
          <p className={`${styles.intro} fade-in d2`}>
            Una selección de proyectos que representan el equilibrio
            entre criterio estético y solvencia técnica.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className={`${styles.card} ${i === 2 ? styles.cardFull : ''} project-card fade-in d${i + 1}`}
              role="listitem"
            >
              {/* Thumb */}
              <div className={`${styles.thumb} ${i === 2 ? styles.thumbWide : ''}`}>
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  className={styles.thumbImg}
                  sizes={i === 2
                    ? '(max-width: 768px) 100vw, 360px'
                    : '(max-width: 768px) 100vw, 55vw'}
                />
                {/* Overlay */}
                <div className={styles.overlay} aria-hidden="true">
                  <span className={styles.overlayLink}>Demo →</span>
                  <span className={styles.overlayLink}>GitHub</span>
                </div>
              </div>

              {/* Info */}
              <div className={`${styles.info} ${i === 2 ? styles.infoSide : ''}`}>
                <div className={styles.projectIndex}>{p.index}</div>
                <h3 className={styles.projectName}>{p.name}</h3>
                <p className={styles.projectDesc}>{p.desc}</p>
                <ul className={styles.tags} aria-label="Tecnologías">
                  {p.tags.map(t => (
                    <li key={t} className={styles.chip}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
