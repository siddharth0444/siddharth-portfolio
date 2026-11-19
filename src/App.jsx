import Nav from './sections/Nav.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}
