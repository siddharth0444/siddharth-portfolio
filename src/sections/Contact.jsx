import { links } from '../data.js'
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from '../icons.jsx'
import './Contact.css'

const year = new Date().getFullYear()

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__card">
        <span className="tape tape--left" aria-hidden="true" />
        <span className="tape tape--right" aria-hidden="true" />

        <p className="hand contact__hello">psst — i’m hiring-ready</p>
        <h2 className="contact__title" id="contact-title">
          Got a data problem?<br />
          <span>Let’s talk.</span>
        </h2>
        <p className="contact__text">
          I’m looking for entry-level Data Scientist and ML Engineer roles where I can work on real data with an experienced team. Available to start immediately.
        </p>

        <a className="button button--dark contact__mail" href={`mailto:${links.email}`}>
          <span className="button__icon"><MailIcon /></span>
          {links.email}
        </a>

        <div className="contact__links">
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="note" style={{ background: 'var(--pink)', color: '#fff' }}>
            <LinkedInIcon /> LinkedIn <ArrowUpRight />
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className="note" style={{ background: 'var(--yellow)' }}>
            <GitHubIcon /> GitHub <ArrowUpRight />
          </a>
        </div>
      </div>

      <footer className="footer mono-label">
        <span>© {year} Siddharth Rajak</span>
        <span>Jaipur, Rajasthan, India</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  )
}
