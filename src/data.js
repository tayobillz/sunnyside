// Swap any URL with your own file, e.g. import egg from './assets/images/egg.jpg'
const ph = (w, h, bg, text) => `https://placehold.co/${w}x${h}/${bg}/ffffff.jpg?text=${text}`
export const images = {
  hero: ph(1000, 500, 'FF9800', 'hero-orange'),
  egg: ph(800, 800, 'FFD600', 'egg'),
  goblet: ph(800, 800, 'FF6F61', 'goblet'),
  cherries: ph(800, 500, '8FD5C4', 'cherries'),
  orange: ph(800, 500, '4DC1FF', 'orange'),
}
export const navLinks = [
  { label: 'About', href: '#feature-1' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#gallery' },
]
export const features = [
  { id: 'feature-1', title: 'Transform your brand', text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.', img: images.egg, alt: 'White egg on a yellow background', variant: 'yellow', reverse: false },
  { id: 'feature-2', title: 'Stand out to the right audience', text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.", img: images.goblet, alt: 'Pink goblet on a coral background', variant: 'coral', reverse: true },
]
export const services = [
  { title: 'Graphic Design', text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.", img: images.cherries, alt: 'Two cherries on a mint background', color: 'mint' },
  { title: 'Photography', text: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.', img: images.orange, alt: 'Orange on a blue background', color: 'blue' },
]
export const testimonials = [
  { name: 'Emily R.', role: 'Marketing Director', img: ph(120, 120, '8FD5C4', 'E'), quote: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' },
  { name: 'Thomas S.', role: 'Chief Operating Officer', img: ph(120, 120, 'FF6F61', 'T'), quote: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." },
  { name: 'Jennie F.', role: 'Business Owner', img: ph(120, 120, '4DC1FF', 'J'), quote: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' },
]
export const gallery = [
  { src: ph(500, 700, '4DC1FF', 'milk-bottles'), alt: 'Milk bottles with red caps' },
  { src: ph(500, 700, 'FF9800', 'orange-slice'), alt: 'Orange slice on a plate' },
  { src: ph(500, 700, '4DC1FF', 'ice-cream'), alt: 'Ice cream cone' },
  { src: ph(500, 700, 'FF6F61', 'sugar-cubes'), alt: 'Stacked sugar cubes' },
]
export const socials = [
  { name: 'Facebook', href: '#', d: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z' },
  { name: 'Instagram', href: '#', d: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' },
  { name: 'Twitter', href: '#', d: 'M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.600a4.100 4.100 0 0 0 1.300 5.500c-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.2-1.200.2-1.900.1.500 1.600 2 2.800 3.800 2.800A8.200 8.200 0 0 1 2 18.300 11.600 11.600 0 0 0 8.300 20c7.500 0 11.700-6.300 11.700-11.700v-.5c.8-.6 1.500-1.300 2-2z' },
  { name: 'Pinterest', href: '#', d: 'M12 2a10 10 0 0 0-3.600 19.300c-.1-.8-.2-2 0-2.900l1.200-5s-.3-.6-.3-1.500c0-1.400.8-2.500 1.800-2.500.9 0 1.300.7 1.300 1.400 0 .9-.5 2.100-.8 3.300-.2 1 .5 1.800 1.500 1.800 1.800 0 3.200-1.900 3.200-4.600 0-2.400-1.700-4.100-4.200-4.100-2.900 0-4.600 2.200-4.600 4.400 0 .9.300 1.800.8 2.300l-.2.800c-.1.300-.3.400-.6.200-1.300-.6-2.100-2.500-2.100-4 0-3.300 2.400-6.300 6.900-6.300 3.600 0 6.400 2.600 6.400 6 0 3.600-2.300 6.500-5.400 6.500-1 0-2-.5-2.400-1.200l-.6 2.500c-.2.900-.9 2-1.300 2.700A10 10 0 1 0 12 2z' },
]
