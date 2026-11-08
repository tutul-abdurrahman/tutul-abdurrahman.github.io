import Atmosphere from "../components/Atmosphere";
import Arrow from "../components/Arrow";
import Clock from "../components/Clock";
import ContactPanel from "../components/ContactPanel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntegrationPanel from "../components/IntegrationPanel";
import ProductCards from "../components/ProductCards";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import { featured } from "../data/work";
import { MAIL_PROJECT, services, stats, steps, studios, tools } from "../data/site";

function FeatureCard({ item }) {
  if (item.size === "text") {
    return (
      <Reveal className="wcard wcard-text glass">
        <div className="body">
          <p className="label">{item.client}</p>
          <h3>{item.name}</h3>
          <p>{item.role}</p>
        </div>
        <div className="flow" aria-label="Integration flow: Swoogo to dashboard to CRM">
          {item.flow.map((step, index) => (
            <span key={step}>
              {step}
              {index < item.flow.length - 1 ? <i aria-hidden="true"> →</i> : null}
            </span>
          ))}
        </div>
        <span className="chip chip-mute">Behind a login</span>
      </Reveal>
    );
  }

  if (item.size === "all") {
    return (
      <Reveal as="a" className="wcard wcard-all glass" href="work.html">
        <div className="body">
          <p className="label">{item.client}</p>
          <p className="big">
            12 projects.
            <br />
            <em>One ground.</em>
          </p>
        </div>
        <span className="arrow-link">
          Open the ledger
          <Arrow />
        </span>
      </Reveal>
    );
  }

  return (
    <Reveal
      as="a"
      className={`wcard glass${item.size === "wide" ? " wcard-wide" : ""}${
        item.size === "half" ? " wcard-half" : ""
      }`}
      href={item.href}
      target="_blank"
      rel="noopener"
    >
      <div className="wcard-shot">
        <img src={item.img} alt={item.name} loading="lazy" />
      </div>
      <div className="wcard-body">
        <div className="wcard-top">
          <p className="label">{item.client}</p>
          <span className="wcard-arrow" aria-hidden="true">
            <Arrow diag />
          </span>
        </div>
        <h3>{item.name}</h3>
        <p>{item.role}</p>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Atmosphere />
      <Header current="home" />

      <main>
        <section className="hero">
          <div className="shell">
            <div className="hero-bento">
              <Reveal className="hero-copy glass">
                <p className="eyebrow">Dhaka, Bangladesh · open for work</p>
                <h1 className="display">
                  I design the product. <em>Then I build it.</em>
                </h1>
                <p className="lede">
                  Four years of UX, design systems and CMS work. It started at
                  SR Web Studio in Dhaka, then grew into work with teams in the
                  Netherlands and Spain, and university clients in Australia.
                  From the first flow to the admin screen someone uses every
                  day.
                </p>
                <div className="cta-row">
                  <a className="btn btn-lime" href="#work">
                    See client work
                    <Arrow />
                  </a>
                  <a className="btn btn-ghost" href={MAIL_PROJECT}>
                    Start a project
                    <Arrow />
                  </a>
                </div>
                <div className="hero-meta">
                  <span className="chip chip-live">Open for new work</span>
                  <span className="chip">Figma to code</span>
                  <span className="chip">Dhaka · EU and AU hours</span>
                </div>
              </Reveal>

              <Reveal className="hero-portrait glass" delay={90}>
                <div className="portrait-media">
                  <img
                    src="/assets/casual-dot-nobg.png"
                    alt="Abdur Rahman Tutul"
                    width="373"
                    height="669"
                  />
                </div>
                <span className="portrait-tag">Dhaka · 2026</span>
                <div className="portrait-meta">
                  <span className="portrait-now">Open for work</span>
                  <h2>Abdur Rahman Tutul</h2>
                  <p>Product designer and builder</p>
                </div>
              </Reveal>

              <Reveal className="stats-bar glass" delay={140}>
                {stats.map((item) => (
                  <div className="stat" key={item.label}>
                    <b>{item.value}</b>
                    <span>{item.label}</span>
                  </div>
                ))}
                <Clock />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="collab" aria-label="Studios and collaborators">
          <div className="shell">
            <div className="collab-panel glass">
              <div className="collab-head">
                <p className="label">The team behind the work</p>
                <p>
                  One studio in Dhaka, then two engagements that came through
                  it. Three working relationships, all closed in 2026. The
                  products are still live.
                </p>
              </div>
              <ul className="collab-rail">
                {studios.map((studio) => (
                  <li
                    className={`collab-item${studio.ground ? " is-ground" : ""}`}
                    key={studio.name}
                  >
                    <div className="collab-top">
                      <span className="collab-logo">
                        <img src={studio.logo} alt={studio.name} loading="lazy" />
                      </span>
                      {studio.ground ? (
                        <span className="collab-flag">The ground</span>
                      ) : null}
                    </div>
                    <span className="collab-meta">
                      <b>{studio.name}</b>
                      <i>{studio.role}</i>
                    </span>
                    <span className="collab-period">
                      {studio.place} · {studio.period}
                    </span>
                    <span className="collab-sub">{studio.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="shell">
            <SectionHead
              label="Selected client work"
              title={
                <>
                  Shipped, <em>not shelved.</em>
                </>
              }
              note="Live sites and platforms I designed, built or maintained. Every card opens the real thing. No mockups, no case-study theatre."
            />

            <div className="work-mosaic">
              {featured.map((item, index) => (
                <FeatureCard item={item} key={item.name} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="shell">
            <SectionHead
              label="Products of my own"
              title={
                <>
                  Built for myself, <em>not for a brief.</em>
                </>
              }
              note="One is software I use every month. The other is a kit other designers use to start faster."
            />

            <ProductCards />
          </div>
        </section>

        <div className="shell">
          <div className="band">
            <p>
              <strong>Want range instead of clients?</strong> There are 18
              self-initiated landing pages and portfolio layouts, all hand-coded
              and live.
            </p>
            <a className="btn btn-ghost" href="demos.html">
              See the demo library
              <Arrow />
            </a>
          </div>
        </div>

        <section className="section" id="services">
          <div className="shell">
            <SectionHead
              label="Services"
              title={
                <>
                  Clear scope. <em>Fixed price.</em>
                </>
              }
              note="Prices in USD. 50% to start, 50% at delivery. Bigger, stranger or ongoing, say so and I will quote it properly."
            />

            <div className="rate glass">
              {services.map((service) => (
                <div className="rate-row" key={service.name}>
                  <div className="rate-name">
                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>
                  </div>
                  <ul className="rate-facts">
                    {service.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                  <div className="rate-price">
                    <b>{service.price}</b>
                    <span>{service.time}</span>
                  </div>
                </div>
              ))}
              <div className="rate-foot">
                <p className="sm">
                  White-label work, a retainer or a migration nobody wants to
                  touch. Tell me the outline and I will price it honestly.
                </p>
                <a className="btn btn-ghost" href={MAIL_PROJECT}>
                  Ask for a quote
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="integrations">
          <div className="shell">
            <IntegrationPanel />
          </div>
        </section>

        <section className="section" id="process">
          <div className="shell">
            <SectionHead
              label="Process"
              title={
                <>
                  How it <em>actually runs.</em>
                </>
              }
              note="Most sites take 10 to 14 days from scope to live. Product work runs longer, in weekly slices you can see."
            />

            <div className="steps">
              {steps.map((step) => (
                <Reveal className="step" key={step.title}>
                  <span className="n">{step.when}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="shell about-grid">
            <div className="about-copy">
              <p className="label">About</p>
              <h2>
                Designer, builder, and <em>the person on the call.</em>
              </h2>
              <p>
                I am Abdur Rahman Tutul, a product designer in Dhaka. I started
                at <strong>SR Web Studio</strong> in 2022, and that team is still
                the ground under everything. The <strong>Rebelslab</strong> work
                in the Netherlands and the <strong>Zephyr Events</strong> work in
                Spain both came through SR, including <strong>Uniloop</strong>,
                the platform Zephyr runs for Australian universities.
              </p>
              <p>
                A lot of that work is unglamorous on purpose: the admin screen
                where a client uploads a course, the integration bridge that keeps
                Swoogo and a CRM in sync, the CMS a non-technical team has to use
                without calling me. That is usually where a product succeeds or
                fails.
              </p>
              <p>
                I design in Figma and Miro, build in HTML, CSS, Tailwind and React,
                and hand off with enough detail that a developer does not have to
                guess. When a project needs an integration, I do not just draw the
                screen. I wire it up and test it against the real API.
              </p>
              <p>
                You work with me directly. The person on the first call is the
                person who designs the screens and tests the integration. That is
                the whole team.
              </p>
              <p className="signature">Abdur</p>
            </div>

            <div className="tools-panel glass">
              <p className="label" style={{ marginBottom: 12 }}>
                Tools and range
              </p>
              <div className="tools-list">
                {tools.map((tool) => (
                  <div key={tool.label}>
                    <span>{tool.label}</span>
                    <span>{tool.value}</span>
                  </div>
                ))}
              </div>
              <a
                className="arrow-link"
                style={{ marginTop: 18 }}
                href="https://www.srwebstudio.com/"
                target="_blank"
                rel="noopener"
              >
                SR Web Studio
                <Arrow diag />
              </a>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="shell">
            <ContactPanel />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
