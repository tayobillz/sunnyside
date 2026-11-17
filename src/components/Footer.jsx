import { navLinks, socials } from '../data'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <a href="#top" className="footer__logo">sunnyside</a>
      <nav aria-label="Footer">
        <ul className="footer__nav">
          {navLinks.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
        </ul>
      </nav>
      <ul className="footer__social">
        {socials.map((s) => (
          <li key={s.name}>
            <a href={s.href} aria-label={s.name}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
