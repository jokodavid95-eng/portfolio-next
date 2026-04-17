import Header      from '@/components/Header'
import Hero        from '@/components/Hero'
import About       from '@/components/About'
import Skills      from '@/components/Skills'
import Work        from '@/components/Work'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      {/* Global scroll reveal observer */}
      <ScrollReveal />

      {/* Sticky navigation */}
      <Header />

      {/* Page sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
