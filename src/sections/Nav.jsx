import { useEffect, useState } from 'react'
import { links, navItems } from '../data.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons.jsx'
import './Nav.css'

// Highlight the nav item for whichever section crosses the middle of the screen.
function useActiveSection() {
  const [active, setActive] = useState(navItems[0].href)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

export default function Nav() {
  const active = useActiveSection()

  return (
    <header className="nav">
      <a className="nav__logo" href="#top" aria-label="Siddharth Rajak, back to top">
        S
      </a>

      <nav className="nav__links" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={item.href === active ? 'is-active' : undefined}
            aria-current={item.href === active ? 'location' : undefined}
          >
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
