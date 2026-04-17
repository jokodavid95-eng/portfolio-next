'use client'

import { useState, useId } from 'react'
import styles from './Contact.module.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const id = useId()
  const [fields, setFields]   = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors]   = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!fields.name.trim())                      e.name    = 'El nombre es obligatorio'
    if (!EMAIL_RE.test(fields.email))             e.email   = 'Email no válido'
    if (!fields.subject.trim())                   e.subject = 'El asunto es obligatorio'
    if (fields.message.trim().length < 10)        e.message = 'El mensaje es muy corto'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    setSending(true)
    // Demo: simulate send
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setFields({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }, 900)
  }

  const onChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(er => { const n = { ...er }; delete n[field]; return n })
  }

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className="container">
        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.left}>
            <div>
              <p className={`tag-label ${styles.tagDark} fade-in`}>Contacto</p>
              <h2 id="contact-title" className={`${styles.headline} fade-in d1`}>
                Let&apos;s<br />build<br /><span className={styles.accent}>together</span>
              </h2>
              <p className={`${styles.sub} fade-in d2`}>
                Siempre abierto a proyectos interesantes, colaboraciones y
                conversaciones honestas sobre diseño y tecnología.
              </p>
            </div>

            {/* Info rows */}
            <div className={`${styles.infoList} fade-in d3`}>
              {[
                { icon: '✉', label: 'Email',          val: 'david@mateosdev.io' },
                { icon: '◎', label: 'Disponibilidad', val: 'Proyectos freelance' },
                { icon: '◷', label: 'Respuesta',      val: 'Menos de 24 horas' },
              ].map(row => (
                <div key={row.label} className={styles.infoRow}>
                  <div className={styles.infoIcon} aria-hidden="true">{row.icon}</div>
                  <div>
                    <span className={styles.infoLabel}>{row.label}</span>
                    <span className={styles.infoVal}>{row.val}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className={`${styles.socials} fade-in d4`} aria-label="Redes sociales">
              {[
                { label: 'GitHub',   href: 'https://github.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Twitter',  href: 'https://twitter.com' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.social}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`${styles.right} fade-in d2`}>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulario de contacto"
            >
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor={`${id}-name`} className={styles.label}>Nombre</label>
                  <input
                    id={`${id}-name`}
                    type="text"
                    value={fields.name}
                    onChange={onChange('name')}
                    placeholder="Tu nombre"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? `${id}-name-err` : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span id={`${id}-name-err`} className={styles.errMsg} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor={`${id}-email`} className={styles.label}>Email</label>
                  <input
                    id={`${id}-email`}
                    type="email"
                    value={fields.email}
                    onChange={onChange('email')}
                    placeholder="tu@email.com"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? `${id}-email-err` : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span id={`${id}-email-err`} className={styles.errMsg} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor={`${id}-subject`} className={styles.label}>Asunto</label>
                <input
                  id={`${id}-subject`}
                  type="text"
                  value={fields.subject}
                  onChange={onChange('subject')}
                  placeholder="Sobre qué quieres hablar"
                  className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? `${id}-subject-err` : undefined}
                />
                {errors.subject && (
                  <span id={`${id}-subject-err`} className={styles.errMsg} role="alert">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor={`${id}-message`} className={styles.label}>Mensaje</label>
                <textarea
                  id={`${id}-message`}
                  value={fields.message}
                  onChange={onChange('message')}
                  placeholder="Cuéntame sobre tu proyecto…"
                  rows={5}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? `${id}-message-err` : undefined}
                />
                {errors.message && (
                  <span id={`${id}-message-err`} className={styles.errMsg} role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {sent && (
                <p className={styles.successMsg} role="alert" aria-live="polite">
                  Mensaje recibido — responderé en menos de 24h.
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={sending}
                aria-disabled={sending}
              >
                {sending ? 'Enviando…' : 'Enviar mensaje'}
                {!sending && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
