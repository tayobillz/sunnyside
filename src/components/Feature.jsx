import './Feature.css'

export default function Feature({ id, title, text, img, alt, variant, reverse }) {
  return (
    <section id={id} className={`feature feature--${variant} ${reverse ? 'feature--reverse' : ''}`}>
      <div className="feature__text reveal">
        <h2>{title}</h2>
        <p>{text}</p>
        <a href="#services" className="feature__link">Learn more</a>
      </div>
      <img className="feature__img" src={img} alt={alt} />
    </section>
  )
}
