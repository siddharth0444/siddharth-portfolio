import './App.css'

const githubUrl = 'https://github.com/siddharth0444'

const learningAreas = [
  { number: '01', name: 'Python', focus: 'Language' },
  { number: '02', name: 'React', focus: 'Interfaces' },
  { number: '03', name: 'AI applications', focus: 'Possibilities' },
  { number: '04', name: 'Software engineering', focus: 'Foundations' },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  )
}

function App() {
  return (
    <main className="portfolio-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true" />
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Siddharth Rajak, home">
            <span className="wordmark__mark">S<span>.</span></span>
            <span className="wordmark__name">Siddharth Rajak</span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a className="site-nav__contact" href={githubUrl} target="_blank" rel="noreferrer">
              Contact <ArrowIcon diagonal />
            </a>
          </nav>
        </header>

        <div className="hero__content" id="top">
          <div className="hero__eyebrow">
            <span className="availability-dot" aria-hidden="true" />
            <span>Open to opportunities</span>
            <span className="hero__eyebrow-divider" aria-hidden="true">/</span>
            <span className="hero__eyebrow-location">Currently learning &amp; building</span>
          </div>

          <h1 className="hero__title" id="hero-title">
            Curious by nature.<br />
            <span>Building with code.</span>
          </h1>

          <div className="hero__bottom" id="hero-intro">
            <p className="hero__description">
              I’m Siddharth Rajak, an aspiring software developer exploring
              <span className="hero__topics"> Python, React, AI applications</span> and the craft of software engineering.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href={githubUrl} target="_blank" rel="noreferrer">
                Get in touch <ArrowIcon diagonal />
              </a>
              <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
                <span className="github-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1 1.54 1.01 1.54 1.01.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.6 5.24-5.09 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                </span>
                Find me on GitHub <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <footer className="hero__footer" aria-label="Page footer">
          <span>Always learning. Building steadily.</span>
          <a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
          <span className="hero__footer-index">01 <i /> 02</span>
        </footer>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-section__inner">
          <div className="about-section__heading">
            <p className="section-label"><span>02</span> / About me</p>
            <h2 className="about-section__title" id="about-title">
              Learning how <span>good software</span> comes together.
            </h2>
            <div className="about-section__copy">
              <p>
                I’m an aspiring software developer at the start of my learning journey, curious about how thoughtful ideas become useful applications.
              </p>
              <p>
                I’m exploring Python, React, and AI applications while building a foundation in software engineering. I enjoy the balance of clear logic, considered interfaces, and the possibility of making technology more helpful.
              </p>
            </div>
          </div>

          <aside className="learning-map" aria-label="Areas I’m exploring">
            <div className="learning-map__topline">
              <span>Current curiosities</span>
              <span className="learning-map__orbit" aria-hidden="true">
                <i /><i /><i />
              </span>
            </div>
            <ol className="learning-map__list">
              {learningAreas.map((area) => (
                <li className="learning-map__item" key={area.number}>
                  <span className="learning-map__number">{area.number}</span>
                  <span className="learning-map__name">{area.name}</span>
                  <span className="learning-map__focus">{area.focus}</span>
                  <span className="learning-map__arrow" aria-hidden="true">↗</span>
                </li>
              ))}
            </ol>
            <p className="learning-map__note"><span /> A work in progress, by design.</p>
          </aside>
        </div>
        <div className="about-section__footer" aria-hidden="true">
          <span>Curiosity → practice → understanding</span>
          <span>02 <i /> 02</span>
        </div>
      </section>
    </main>
  )
}

export default App
