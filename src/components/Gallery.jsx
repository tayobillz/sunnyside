import { gallery } from '../data'
import './Gallery.css'

export default function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-label="Gallery">
      {gallery.map((g) => (
        <div key={g.alt} className="gallery__cell reveal">
          <img src={g.src} alt={g.alt} />
        </div>
      ))}
    </section>
  )
}
