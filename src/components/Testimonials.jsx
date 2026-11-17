import { testimonials } from '../data'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">Client testimonials</h2>
      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <figure key={t.name} className="testimonials__item reveal">
            <img src={t.img} alt={`Portrait of ${t.name}`} />
            <blockquote>{t.quote}</blockquote>
            <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
