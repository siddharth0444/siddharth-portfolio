import creditCost from '../assets/figures/credit-cost-curve.png'
import aqiLockdown from '../assets/figures/aqi-lockdown-overview.png'
import { projects } from '../data.js'
import { ArrowUpRight } from '../icons.jsx'
import './Projects.css'

const figures = { creditCost, aqiLockdown }

function TicketPreview() {
  const tickets = [
    { text: 'Charged twice for my order, need refund asap', intent: 'Billing', mood: 'Negative', urgent: true },
    { text: 'How do I change my delivery address?', intent: 'Account', mood: 'Neutral' },
    { text: 'App crashes every time I open checkout', intent: 'Bug', mood: 'Negative', urgent: true },
  ]

  return (
    <div className="tickets" role="img" aria-label="Illustration of SupportIQ labelling three tickets with intent, sentiment and an urgent flag">
      <div className="tickets__bar">
        <span className="mono-label">supportiq / triage</span>
        <span className="mono-label tickets__tag">illustrative</span>
      </div>
      {tickets.map((ticket) => (
        <div className="tickets__row" key={ticket.text}>
          <p>{ticket.text}</p>
          <div className="tickets__labels">
            <span>{ticket.intent}</span>
            <span>{ticket.mood}</span>
            {ticket.urgent && <span className="tickets__urgent">Urgent</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className={`project project--${project.theme}`} style={{ '--i': index }} aria-labelledby={`${project.id}-title`}>
      <span className="project__tab mono-label">✦ Project {number}</span>

      <div className="project__copy">
        <p className="mono-label project__status">
          <i aria-hidden="true" /> {project.status}
        </p>
        <h3 className="project__title" id={`${project.id}-title`}>{project.title}</h3>
        <p className="project__tagline">{project.tagline}</p>

        <ul className="project__metrics" aria-label="Key results">
          {project.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>

        {project.note && <p className="project__note">{project.note}</p>}

        <p className="project__stack">{project.stack.join(' · ')}</p>

        <div className="project__links">
          <a href={project.code} target="_blank" rel="noreferrer" className="mono-label">
            View code <ArrowUpRight />
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="mono-label">
              Live demo <ArrowUpRight />
            </a>
          )}
        </div>
      </div>

      <div className="project__visual">
        <span className="tape tape--left" aria-hidden="true" />
        <span className="tape tape--right" aria-hidden="true" />
        {project.figure ? (
          <img src={figures[project.figure]} alt={project.figureAlt} loading="lazy" />
        ) : (
          <TicketPreview />
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__head">
        <p className="hand projects__margin">things i built</p>
        <h2 className="projects__title" id="projects-title">
          Selected work <span className="sticker" style={{ background: 'var(--pink)', color: '#fff' }}>real data</span>
        </h2>
      </div>

      <div className="projects__stack">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
