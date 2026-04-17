'use client'

import { useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ScrollReveal() {
  useScrollReveal()

  useEffect(() => {
    // Añade clase 'has-mouse' al body solo cuando se detecta un ratón real.
    // En móvil/táctil nunca se dispara mousemove, así que los hovers no se activan.
    const onMouse = () => document.body.classList.add('has-mouse')
    window.addEventListener('mousemove', onMouse, { once: true })
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  return null
}
