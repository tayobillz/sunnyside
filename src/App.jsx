import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { features } from './data'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        {features.map((f) => <Feature key={f.id} {...f} />)}
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
