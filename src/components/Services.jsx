import { services } from '../data'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      {services.map((s) => (
        <article key={s.title} className={`services__card services__card--${s.color} reveal`}>
          <img src={s.img} alt={s.alt} />
          <div className="services__body">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
