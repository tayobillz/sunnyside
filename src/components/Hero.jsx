import { images } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="hero__title">We are creatives</h1>
      <div className="hero__media">
        <img src={images.hero} alt="Halved orange in a glass" />
        <a href="#feature-1" className="hero__arrow" aria-label="Scroll to next section">
          <svg width="28" height="60" viewBox="0 0 28 60" fill="none" aria-hidden="true"><path d="M14 0v56M2 44l12 12 12-12" stroke="#fff" strokeWidth="2.5"/></svg>
        </a>
      </div>
    </section>
  )
}
