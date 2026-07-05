import Nav from "../components/Nav";
import HeroCanvas from "../components/HeroCanvas";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import LocalTime from "../components/LocalTime";
import { site, about, experience, projects, skills, education } from "../lib/content";

function SectionHead({
  eyebrow,
  title,
  count,
}: {
  eyebrow: string;
  title: string;
  count?: string;
}) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {count && <span className="section-count">{count}</span>}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <Nav />
      <Reveal />

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <HeroCanvas />
          <div className="wrap hero-content">
            <p className="hero-eyebrow">
              {site.role} · {site.location}
            </p>
            <h1>
              <span className="line">
                <span>Sameer</span>
              </span>
              <span className="line">
                <span>Bin Raees</span>
              </span>
            </h1>
            <p className="hero-sub">{site.intro}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                View work
              </a>
              <a className="btn btn-ghost" href={`mailto:${site.email}`}>
                Get in touch
              </a>
              <span className="status-chip">
                <span className="dot" /> {site.availability}
              </span>
            </div>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-inner">
              <span>NODE.JS · REACT · AWS · SERVERLESS</span>
              <span className="scroll-hint">SCROLL</span>
            </div>
          </div>
        </section>

        <div className="wrap">
          {/* ================= ABOUT ================= */}
          <section className="section" id="about">
            <SectionHead eyebrow="About" title="Who I am" />
            <div className="about-grid">
              <div className="about-copy" data-reveal>
                <h3>{about.heading}</h3>
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <dl className="fact-list" data-reveal data-reveal-delay="120">
                {about.facts.map((f) => (
                  <div className="fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* ================= PROJECTS ================= */}
          <section className="section" id="work">
            <SectionHead
              eyebrow="Selected work"
              title="Things I have shipped"
              count={`${String(projects.length).padStart(2, "0")} projects`}
            />
            <div className="project-grid">
              {projects.map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} />
              ))}
            </div>
          </section>

          {/* ================= EXPERIENCE ================= */}
          <section className="section" id="experience">
            <SectionHead eyebrow="Experience" title="Where I have worked" />
            <div className="xp-list">
              {experience.map((xp) => (
                <div className="xp-item" data-reveal key={`${xp.company}-${xp.period}`}>
                  <div className="xp-when">
                    <span className="period">{xp.period}</span>
                    {xp.location}
                  </div>
                  <div className="xp-body">
                    <h3>{xp.role}</h3>
                    <p className="xp-co">
                      {xp.company} <em>· {xp.descriptor}</em>
                    </p>
                    <ul className="xp-points">
                      {xp.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <div className="chip-row">
                      {xp.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SKILLS ================= */}
          <section className="section" id="skills">
            <SectionHead eyebrow="Toolkit" title="What I work with" />
            <div className="skills-grid" data-reveal>
              {skills.map((g) => (
                <div className="skill-col" key={g.group}>
                  <h4>{g.group}</h4>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ================= EDUCATION ================= */}
          <section className="section" id="education">
            <SectionHead eyebrow="Education" title="Background" />
            <div className="edu-card" data-reveal>
              <div>
                <h3>{education.degree}</h3>
                <p>{education.school}</p>
              </div>
              <div className="edu-meta">
                {education.period}
                <span>{education.location}</span>
              </div>
            </div>
          </section>

          {/* ================= CONTACT ================= */}
          <section className="contact" id="contact">
            <div data-reveal>
              <span className="section-eyebrow">Contact</span>
              <h2 className="contact-title">
                <a href={`mailto:${site.email}`}>Let&apos;s build something.</a>
              </h2>
              <p className="contact-sub">
                I am currently {site.availability.toLowerCase()}. If you have a system that needs
                to scale, an integration that needs to exist, or a product that needs shipping,
                my inbox is open.
              </p>
              <div className="social-row">
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </section>

          {/* ================= FOOTER ================= */}
          <footer className="footer">
            <div className="footer-inner">
              <span>
                © {new Date().getFullYear()} {site.name}
              </span>
              <LocalTime />
              <span>Designed and built with intent</span>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
