'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

// Thin client wrapper that registers the IntersectionObserver
// for all .fade-in elements rendered by server components.
export default function ScrollReveal() {
  useScrollReveal()
  return null
}
