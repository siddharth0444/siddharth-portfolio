import './App.css'

const githubUrl = 'https://github.com/siddharth0444'
const linkedinUrl = 'REPLACE_WITH_LINKEDIN_PROFILE_URL'
const linkedinConfigured = linkedinUrl.startsWith('https://www.linkedin.com/')

const learningAreas = [
  { number: '01', name: 'Python', focus: 'Language' },
  { number: '02', name: 'React', focus: 'Interfaces' },
  { number: '03', name: 'AI applications', focus: 'Possibilities' },
  { number: '04', name: 'Software engineering', focus: 'Foundations' },
]

const skillGroups = [
  { number: '01', name: 'Programming', symbol: '</>', technologies: ['Python', 'JavaScript'] },
  { number: '02', name: 'Frontend', symbol: '◧', technologies: ['React', 'HTML', 'CSS'] },
  { number: '03', name: 'Tools', symbol: '⌘', technologies: ['Git', 'GitHub', 'VS Code'] },
  { number: '04', name: 'AI & Data', symbol: '✳', technologies: ['AI applications', 'Pandas', 'Scikit-learn'] },
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

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1 1.54 1.01 1.54 1.01.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.6 5.24-5.09 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.56c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.66H9.39V9h3.41v1.56h.05c.47-.9 1.63-1.84 3.36-1.84 3.59 0 4.25 2.36 4.25 5.44v6.29ZM5.38 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.16 20.45H3.6V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function LinkedInLink({ className }) {
  const content = <><LinkedInIcon /><span>LinkedIn</span>{!linkedinConfigured && <small>URL needed</small>}</>
  const label = linkedinConfigured ? 'LinkedIn profile' : 'LinkedIn profile URL placeholder; replace linkedinUrl in App.jsx'

  return linkedinConfigured ? (
    <a className={className} href={linkedinUrl} target="_blank" rel="noreferrer" aria-label={label}>
      {content}
    </a>
  ) : (
    <span className={`${className} is-placeholder`} aria-label={label} title={label}>
      {content}
    </span>
  )
}

function SupportIQPreview() {
  return (
    <div
      className="project-preview"
      role="img"
      aria-label="Illustrative dashboard preview showing ticket analysis, category prediction, sentiment, and insights"
    >
      <div className="project-preview__window">
        <div className="project-preview__chrome">
          <span className="project-preview__lights"><i /><i /><i /></span>
          <span>supportiq <i>/</i> workspace</span>
          <span className="project-preview__preview-label">UI CONCEPT</span>
        </div>

        <div className="project-preview__app">
          <aside className="project-preview__sidebar">
            <span className="project-preview__brand">si<span>.</span></span>
            <span className="project-preview__side-icon project-preview__side-icon--active" />
            <span className="project-preview__side-icon" />
            <span className="project-preview__side-icon" />
            <span className="project-preview__side-avatar">S</span>
          </aside>

          <div className="project-preview__content">
            <div className="project-preview__heading">
              <div>
                <span>SUPPORT ANALYTICS</span>
                <strong>Ticket intelligence</strong>
              </div>
              <span className="project-preview__date">WORKSPACE <i>↗</i></span>
            </div>

            <div className="project-preview__signals">
              <div className="project-preview__signal">
                <span>01 / CATEGORY PREDICTION</span>
                <div className="project-preview__signal-graphic project-preview__signal-graphic--nodes" aria-hidden="true">
                  <i /><i /><i /><b /><b />
                </div>
                <strong>Ticket classification</strong>
              </div>
              <div className="project-preview__signal">
                <span>02 / SENTIMENT</span>
                <div className="project-preview__signal-graphic project-preview__signal-graphic--sentiment" aria-hidden="true">
                  <i /><i /><i /><i /><i /><i /><i /><i /><i />
                </div>
                <strong>Sentiment analysis</strong>
              </div>
            </div>

            <div className="project-preview__insights">
              <div className="project-preview__insights-copy">
                <span>03 / INTERACTIVE DASHBOARD</span>
                <strong>Support insights</strong>
                <small>Patterns, surfaced from ticket data.</small>
              </div>
              <div className="project-preview__chart" aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-preview__caption">
        <span><i /> Illustrative product preview</span>
        <span>Ticket → insight</span>
      </div>
    </div>
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
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a className="site-nav__contact" href="#contact">
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
                  <GitHubIcon />
                </span>
                Find me on GitHub <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <footer className="hero__footer" aria-label="Page footer">
          <span>Always learning. Building steadily.</span>
          <a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
          <span className="hero__footer-index">01 <i /> 05</span>
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
          <span>02 <i /> 05</span>
        </div>
      </section>

      <section className="skills-section" id="skills" aria-labelledby="skills-title">
        <div className="skills-section__inner">
          <div className="skills-section__heading">
            <p className="section-label"><span>03</span> / Skills &amp; technologies</p>
            <div className="skills-section__intro">
              <h2 className="skills-section__title" id="skills-title">
                A toolkit <span>in progress.</span>
              </h2>
              <p className="skills-section__description">
                Technologies I’m learning and working with as I explore software development.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>
                <div className="skill-card__topline">
                  <span className="skill-card__number">{group.number} / 04</span>
                  <span className="skill-card__symbol" aria-hidden="true">{group.symbol}</span>
                </div>
                <h3 className="skill-card__title">{group.name}</h3>
                <ul className="skill-card__technologies">
                  {group.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <span className="skill-card__corner" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
        <div className="skills-section__footer" aria-hidden="true">
          <span>Learn it. Try it. Understand it.</span>
          <span>03 <i /> 05</span>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="projects-section__inner">
          <div className="projects-section__heading">
            <p className="section-label"><span>04</span> / Selected work</p>
            <h2 className="projects-section__title" id="projects-title">
              Things I’ve built.<br />
              <span>Things I’m learning.</span>
            </h2>
            <p className="projects-section__intro">
              This project is a practical way to apply what I’m learning in programming and software engineering—and explore how the pieces fit together.
            </p>
          </div>

          <article className="project-feature" aria-labelledby="supportiq-title">
            <div className="project-feature__visual">
              <div className="project-feature__visual-label">
                <span>01 <i /> 01</span>
                <span>Featured project</span>
              </div>
              <SupportIQPreview />
              <div className="project-feature__visual-footer">
                <span>Machine learning <i /> Customer analytics</span>
                <span>PROJECT 01</span>
              </div>
            </div>

            <div className="project-feature__details">
              <p className="project-feature__category">
                <span>01</span>
                <span>Machine learning / Analytics</span>
              </p>
              <h3 className="project-feature__title" id="supportiq-title">
                SupportIQ
                <span>Customer Support Intelligence</span>
              </h3>
              <p className="project-feature__description">
                An ML-powered customer support analytics application that processes support tickets, predicts ticket categories, analyzes sentiment and provides insights through an interactive dashboard.
              </p>
              <div className="project-feature__stack-wrap">
                <span className="project-feature__stack-label">Built with</span>
                <ul className="project-feature__stack" aria-label="Technologies used">
                  {['Python', 'FastAPI', 'Streamlit', 'Scikit-learn', 'Pandas', 'TF-IDF', 'Logistic Regression'].map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
              <a
                className="project-feature__link"
                href="https://github.com/siddharth0444/supportiq-customer-support-intelligence"
                target="_blank"
                rel="noreferrer"
              >
                View repository <ArrowIcon diagonal />
              </a>
            </div>
          </article>
        </div>
        <div className="projects-section__footer" aria-hidden="true">
          <span>One project. A lot to learn from.</span>
          <span>04 <i /> 05</span>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-section__glow" aria-hidden="true" />
        <div className="contact-section__inner">
          <p className="section-label"><span>05</span> / Contact</p>
          <div className="contact-section__status">
            <span className="availability-dot" aria-hidden="true" />
            <span>Open to opportunities</span>
            <i aria-hidden="true">/</i>
            <span>Currently learning &amp; building</span>
          </div>

          <div className="contact-section__main">
            <div className="contact-section__copy">
              <h2 className="contact-section__title" id="contact-title">
                Have an idea?<br />
                <span>Let’s build something.</span>
              </h2>
              <p className="contact-section__description">
                I’m always interested in learning, collaborating, and exploring interesting ideas in technology. Feel free to reach out.
              </p>
              <a className="button contact-section__button" href={githubUrl} target="_blank" rel="noreferrer">
                Get in touch <ArrowIcon diagonal />
              </a>
            </div>

            <nav className="contact-section__socials" aria-label="Find Siddharth online">
              <p>Elsewhere</p>
              <a className="contact-social" href={githubUrl} target="_blank" rel="noreferrer">
                <GitHubIcon />
                <span>GitHub</span>
                <small>@siddharth0444</small>
                <ArrowIcon diagonal />
              </a>
              <LinkedInLink className="contact-social" />
            </nav>
          </div>
        </div>

        <footer className="site-footer">
          <div className="site-footer__main">
            <div className="site-footer__identity">
              <a className="wordmark" href="#top" aria-label="Siddharth Rajak, back to top">
                <span className="wordmark__mark">S<span>.</span></span>
                <span className="wordmark__name">Siddharth Rajak</span>
              </a>
              <span className="site-footer__role">Software Developer</span>
            </div>
            <nav className="site-footer__links" aria-label="Footer links">
              <a href={githubUrl} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
              <LinkedInLink className="site-footer__linkedin" />
            </nav>
          </div>
          <div className="site-footer__bottom">
            <span>Designed &amp; built with curiosity.</span>
            <span>© {new Date().getFullYear()} Siddharth Rajak</span>
          </div>
        </footer>
      </section>
    </main>
  )
}

export default App
