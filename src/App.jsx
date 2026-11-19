import Nav from './sections/Nav.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  )
}
