import importanceFigure from '../assets/figures/credit-importance.png'
import diwaliFigure from '../assets/figures/aqi-diwali-profiles.png'
import { skills } from '../data.js'
import './About.css'

function Polaroid({ src, alt, caption, side }) {
  return (
    <figure className={`polaroid polaroid--${side}`}>
      <span className="tape tape--left" aria-hidden="true" />
      <span className="tape tape--right" aria-hidden="true" />
      <img src={src} alt={alt} loading="lazy" />
      <figcaption className="hand">{caption}</figcaption>
    </figure>
  )
}

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <p className="hand about__margin">about me!</p>

      <div className="about__grid">
        <Polaroid
          side="left"
          src={importanceFigure}
          alt="Bar chart of the features that most drive the credit default model, led by recent payment status"
          caption="what drives default?"
        />

        <div className="about__body">
          <h2 className="about__title" id="about-title">what’s up</h2>
          <p className="hand about__text">
            I’m a data scientist who gets a little too excited about turning raw data into a clear answer.
            <span className="about__spark" aria-hidden="true"> ✦ </span>
            I care about the boring-but-important parts: honest baselines, leakage checks, calibration, and writing down what a model <u>can’t</u> do.
          </p>
          <p className="about__plain">
            Fresh BTech CSE graduate (2026) in Jaipur, available to join immediately. Every project below ships with tests, CI and a write-up of its limits.
          </p>
        </div>

        <Polaroid
          side="right"
          src={diwaliFigure}
          alt="Hourly pollution profiles around Diwali compared with a two-sided seasonal baseline"
          caption="diwali, hour by hour"
        />
      </div>

      <ul className="skills" aria-label="Skills and tools">
        {skills.map((skill) => (
          <li key={skill.name} className="skills__item">
            <span className="brush" style={{ background: `var(--${skill.color})`, color: skill.dark ? '#fff' : 'var(--ink)' }}>
              {skill.name}
            </span>
            <span className="brush brush--icon" style={{ background: `var(--${skill.color})` }} aria-hidden="true">
              {skill.icon}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
