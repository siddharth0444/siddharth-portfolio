import { certifications, education } from '../data.js'
import { ArrowUpRight } from '../icons.jsx'
import './Education.css'

export default function Education() {
  return (
    <section className="education" id="education" aria-labelledby="education-title">
      <div className="education__head">
        <p className="hand education__margin">where i learned it</p>
        <h2 className="education__title" id="education-title">
          Education <span className="education__amp">&amp;</span> certifications
        </h2>
      </div>

      <div className="education__grid">
        <article className="degree">
          <span className="tape tape--left" aria-hidden="true" />
          <span className="tape tape--right" aria-hidden="true" />
          <p className="mono-label degree__years">{education.years}</p>
          <h3 className="degree__title">{education.degree}</h3>
          <p className="degree__field">{education.field}</p>
          <p className="degree__school">{education.school}</p>
          <p className="hand degree__place">{education.place}</p>
        </article>

        <ul className="certs" aria-label="Certifications">
          {certifications.map((cert) => (
            <li key={cert.title} className="cert" style={{ '--accent': `var(--${cert.color})` }}>
              <p className="mono-label cert__issuer">
                {cert.issuer} <span aria-hidden="true">·</span> {cert.date}
              </p>
              <p className="cert__title">{cert.title}</p>
              {cert.verify && (
                <a className="mono-label cert__verify" href={cert.verify} target="_blank" rel="noreferrer">
                  Verify <ArrowUpRight />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
