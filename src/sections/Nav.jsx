import { links, navItems } from '../data.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons.jsx'
import './Nav.css'

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__logo" href="#top" aria-label="Siddharth Rajak, back to top">
        S
      </a>

      <nav className="nav__links" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <a key={item.href} href={item.href} className={index === 0 ? 'is-active' : undefined}>
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav__social">
        <a className="nav__dot nav__dot--yellow" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a className="nav__dot nav__dot--pink" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a className="nav__dot nav__dot--green" href={`mailto:${links.email}`} aria-label="Email">
          <MailIcon />
        </a>
        <a className="nav__cta" href="#contact">
          <span aria-hidden="true">♥</span> Hire me
        </a>
      </div>
    </header>
  )
}
