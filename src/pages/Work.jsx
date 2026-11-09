import Atmosphere from "../components/Atmosphere";
import ContactPanel from "../components/ContactPanel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntegrationPanel from "../components/IntegrationPanel";
import ProductCards from "../components/ProductCards";
import Reveal from "../components/Reveal";
import Flow from "../components/Flow";
import { rebelslab, zephyr } from "../data/work";
import { studios } from "../data/site";

function Card({ item }) {
  if (item.img) {
    return (
      <Reveal
        as="a"
        className="pcard glass"
        href={item.href}
        target="_blank"
        rel="noopener"
      >
        <div className="pcard-shot">
          <img src={item.img} alt={item.name} loading="lazy" />
          {item.live ? <span className="chip chip-live">Live</span> : null}
        </div>
        <div className="pcard-body">
          <span className="label">{item.client}</span>
          <h3>{item.name}</h3>
          <p>{item.role}</p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal as="article" className="pcard pcard-plain glass">
      <div className="body">
        <span className="label">{item.client}</span>
        <h3>{item.name}</h3>
        <p>{item.role}</p>
      </div>
      {item.flow ? (
        <Flow
          rows={item.flow}
          label="Two-way sync between Swoogo and the CRM, through the dashboard"
        />
      ) : null}
      <div className="body">
        {item.facts ? (
          <ul className="mini-facts">
            {item.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        ) : null}
        {item.state ? <span className="chip chip-mute">{item.state}</span> : null}
      </div>
    </Reveal>
  );
}

function Rows({ rows }) {
  return (
    <div className="row-list">
      {rows.map((row) => (
        <article key={row.name}>
          <h3>{row.name}</h3>
          <p>{row.role}</p>
          <span className={`chip ${row.live ? "chip-live" : "chip-mute"}`}>
            {row.state}
          </span>
        </article>
      ))}
    </div>
  );
}

export default function Work() {
  return (
    <>
      <Atmosphere />
      <Header current="work" />

      <main>
        <section className="page-hero">
          <div className="shell">
            <a className="back" href="/">
              ← Back to home
            </a>

            <div className="work-hero-grid">
              <div className="work-title">
                <p className="eyebrow">Client work · 2022 to now</p>
                <h1 className="display">
                  Twelve projects. <em>Built to keep running.</em>
                </h1>
                <p className="lede">
                  Course platforms, event systems, dashboards and the marketing
                  sites around them. All of it started at SR Web Studio in Dhaka,
                  then moved out to teams in the Netherlands and Spain. Where a
                  link exists, it opens the real product.
                </p>
                <div className="work-chips">
                  <span className="chip">12 projects</span>
                  <span className="chip">3 studio teams</span>
                  <span className="chip">6 live products</span>
                  <span className="chip chip-live">Two closed in 2026</span>
                </div>
              </div>

              <aside className="ledger glass" aria-label="Engagement index">
                <div className="ledger-head">
                  <span>Engagement index</span>
                  <span>2022 to now</span>
                </div>
                <ul className="ledger-list">
                  {studios.map((studio) => (
                    <li
                      key={studio.name}
                      className={studio.current ? "is-ground" : ""}
                    >
                      <div className="ledger-top">
                        <b>{studio.name}</b>
                        <i>{studio.period}</i>
                      </div>
                      <span>{studio.role}</span>
                      <span className="ledger-count">{studio.place}</span>
                    </li>
                  ))}
                </ul>
                <div className="ledger-foot">
                  <span className="ledger-avatar">
                    <img src="/assets/tutul.png" alt="Abdur Rahman Tutul" />
                  </span>
                  <span className="ledger-who">
                    <b>Abdur Rahman Tutul</b>
                    <span>Product designer · Dhaka</span>
                  </span>
                  <span className="ledger-total">
                    12 projects
                    <br />
                    delivered by 2026
                  </span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="ground-block" id="sr">
          <div className="shell">
            <div className="ground-card">
              <div className="ground-head">
                <span className="ground-logo">
                  <img src={studios[0].logo} alt="SR Web Studio" loading="lazy" />
                </span>
                <span className="ground-flag">Current team</span>
              </div>
              <div className="ground-body">
                <p className="label">SR Web Studio · Dhaka</p>
                <h2>Where the work started.</h2>
                <p>
                  Web Designer and UI/UX Designer since January 2022, and still
                  on the team. Responsive builds, usability testing and Tailwind,
                  plus the V1 and V2 dashboards. The onboarding redesign cut
                  setup time by 30%. Rebelslab and Zephyr both came through this
                  team.
                </p>
              </div>
              <ul className="ground-facts">
                <li>Jan 2022 to now</li>
                <li>Web Designer &amp; UI/UX Designer</li>
                <li>Dashboards V1 and V2</li>
                <li>Onboarding cut by 30%</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="group-block" id="rebelslab">
          <div className="shell">
            <div className="group-head">
              <div>
                <p className="label">Through SR Web Studio · 6 projects</p>
                <h2>Rebelslab</h2>
              </div>
              <p className="group-tag">
                Netherlands · <b>Nov 2022 to Mar 2026</b>
              </p>
            </div>

            <p className="group-lede">{rebelslab.lede}</p>

            <div className="pgrid two">
              {rebelslab.cards.map((item) => (
                <Card item={item} key={item.name} />
              ))}
            </div>

            <Rows rows={rebelslab.rows} />
          </div>
        </section>

        <section className="group-block" id="zephyr">
          <div className="shell">
            <div className="group-head">
              <div>
                <p className="label">Through SR Web Studio · 6 projects</p>
                <h2>Zephyr Events</h2>
              </div>
              <p className="group-tag">
                Spain · <b>Dec 2023 to May 2026</b>
              </p>
            </div>

            <p className="group-lede">{zephyr.lede}</p>

            <div className="pgrid">
              {zephyr.cards.map((item) => (
                <Card item={item} key={item.name} />
              ))}
            </div>

            <Rows rows={zephyr.rows} />

            <p className="group-note">
              <strong>Uniloop is Zephyr work.</strong> {zephyr.note}
            </p>
          </div>
        </section>

        <section className="group-block" id="own">
          <div className="shell">
            <div className="group-head">
              <div>
                <p className="label">Products of my own</p>
                <h2>Built by me</h2>
              </div>
              <p className="group-tag">Two products</p>
            </div>

            <ProductCards />
          </div>
        </section>

        <section className="group-block" id="integrations">
          <div className="shell">
            <IntegrationPanel />
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
