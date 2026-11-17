import { useState, useEffect } from 'react'
import { navLinks } from '../data'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  const close = () => setOpen(false)

  return (
    <header className="header">
      <a href="#top" className="header__logo">sunnyside</a>
      <button className="header__burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
        <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true"><path d="M0 1h24M0 9h24M0 17h24" stroke="#fff" strokeWidth="2.5"/></svg>
      </button>
      <nav id="menu" className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Main">
        <ul>
          {navLinks.map((l) => <li key={l.label}><a href={l.href} onClick={close}>{l.label}</a></li>)}
        </ul>
        <a href="#footer" className="header__cta" onClick={close}>Contact</a>
      </nav>
    </header>
  )
}
