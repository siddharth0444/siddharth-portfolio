import { ArrowUpRight } from '../icons.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__badge hero__badge--left" aria-hidden="true">
        <strong>0.780</strong>
        <span>ROC-AUC</span>
      </div>
      <div className="hero__badge hero__badge--right" aria-hidden="true">
        <strong>−39%</strong>
        <span>NO₂</span>
      </div>

      <div className="hero__nameplate">
        <span className="sticker hero__sticker hero__sticker--left" style={{ background: 'var(--mint)' }}>
          Built end to end
        </span>
        <span className="sticker hero__sticker hero__sticker--right" style={{ background: 'var(--yellow)' }}>
          Shows the math
        </span>

        <p className="hand hero__hello">my name is</p>

        <div className="hero__box">
          <h1 className="hero__name" id="hero-name">
            Siddharth
            <span className="visually-hidden"> Rajak</span>
          </h1>
          <svg className="hero__arrow hero__arrow--left" viewBox="0 0 40 30" aria-hidden="true">
            <path d="M2 28 C 14 26, 26 18, 36 4 M28 5 l8 -1 l-1 8" />
          </svg>
          <svg className="hero__arrow hero__arrow--right" viewBox="0 0 40 30" aria-hidden="true">
            <path d="M38 28 C 26 26, 14 18, 4 4 M12 5 l-8 -1 l1 8" />
          </svg>
        </div>

        <div className="hero__notes">
          <span className="note hero__note" style={{ background: 'var(--yellow)' }}>Data Scientist</span>
          <span className="mono-label hero__status">
            <i aria-hidden="true" /> Open to entry-level DS / ML roles
          </span>
          <span className="note hero__note hero__note--tilt" style={{ background: 'var(--mint)' }}>Jaipur, IN</span>
        </div>
      </div>

      <p className="hero__headline">
        I turn messy data into models
        <span className="hero__icon hero__icon--target" aria-hidden="true" />
        <br />
        people can actually use.
        <span className="hero__icon hero__icon--flower" aria-hidden="true">✿</span>
      </p>

      <p className="hero__sub">
        BTech CS graduate (2026). I clean the data, compare the models, say what they can’t do, and ship them behind an API or an app.
      </p>

      <div className="hero__actions">
        <a className="button button--dark" href="#projects">
          <span className="button__icon"><ArrowUpRight /></span>
          See the work
        </a>
        <a className="button button--light" href="#contact">Contact me</a>
      </div>

      <svg className="hero__curve" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 38 Q 500 -10 1000 30" />
      </svg>
    </section>
  )
}
