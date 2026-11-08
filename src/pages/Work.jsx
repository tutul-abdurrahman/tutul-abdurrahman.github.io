import Atmosphere from "../components/Atmosphere";
import Arrow from "../components/Arrow";
import ContactPanel from "../components/ContactPanel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntegrationPanel from "../components/IntegrationPanel";
import ProductCards from "../components/ProductCards";
import Reveal from "../components/Reveal";
import { rebelslab, zephyr } from "../data/work";

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
        <div className="flow" aria-label="Integration flow: Swoogo to dashboard to CRM">
          {item.flow.map((step, index) => (
            <span key={step}>
              {step}
              {index < item.flow.length - 1 ? <i aria-hidden="true"> →</i> : null}
            </span>
          ))}
        </div>
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
            <a className="back" href="index.html">
              ← Back to home
            </a>

            <div className="work-hero-grid">
              <div className="work-title">
                <p className="eyebrow">Client work · 2022 to 2026</p>
                <h1 className="display">
                  Twelve projects. <em>Built to keep running.</em>
                </h1>
                <p className="lede">
                  Course platforms, event systems, dashboards and the marketing
                  sites around them. Six with Rebelslab, six through Zephyr, all
                  delivered by 2026. Where a link exists, it opens the real
                  product.
                </p>
                <div className="work-chips">
                  <span className="chip">12 client projects</span>
                  <span className="chip">4 studios</span>
                  <span className="chip">6 live products</span>
                  <span className="chip chip-live">All closed in 2026</span>
                </div>
              </div>

              <aside className="ledger glass" aria-label="Engagement index">
                <div className="ledger-head">
                  <span>Engagement index</span>
                  <span>2022 to 2026</span>
                </div>
                <ul className="ledger-list">
                  <li>
                    <div>
                      <b>Rebelslab</b>
                      <span>6 projects · Netherlands</span>
                    </div>
                    <i>2023 to 2026</i>
                  </li>
                  <li>
                    <div>
                      <b>Zephyr</b>
                      <span>6 projects · Spain</span>
                    </div>
                    <i>2024 to 2026</i>
                  </li>
                  <li>
                    <div>
                      <b>Uniloop</b>
                      <span>Within Zephyr's six · Australia</span>
                    </div>
                    <i>2024 to 2026</i>
                  </li>
                  <li>
                    <div>
                      <b>SR Web Studio</b>
                      <span>Studio work · Bangladesh</span>
                    </div>
                    <i>2022 to 2026</i>
                  </li>
                </ul>
                <div className="ledger-foot">
                  <span className="ledger-avatar">
                    <img src="/assets/tutul.png" alt="" />
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

        <section className="group-block" id="rebelslab">
          <div className="shell">
            <div className="group-head">
              <div>
                <p className="label">First collaboration · 6 projects</p>
                <h2>Rebelslab</h2>
              </div>
              <p className="group-tag">
                Netherlands · <b>2023 to 2026</b>
              </p>
            </div>

            <p className="group-lede">{rebelslab.lede}</p>

            <div className="pgrid two">
              {rebelslab.cards.map((item) => (
                <Card item={item} key={item.name} />
              ))}
            </div>

            <Rows rows={rebelslab.rows} />

            <div className="band">
              <p>
                Six projects with Rebelslab since 2023, four of them still live.
                This was the first studio to put real product work in my hands.
              </p>
              <a className="arrow-link" href="#zephyr">
                Next: Zephyr
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="group-block" id="zephyr">
          <div className="shell">
            <div className="group-head">
              <div>
                <p className="label">Event technology · 6 projects</p>
                <h2>Zephyr</h2>
              </div>
              <p className="group-tag">
                Spain · <b>2024 to 2026</b>
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

            <div className="band">
              <p>
                Six projects delivered through Zephyr, five still live or in use.
                The platform work sits behind client logins, so I walk through it
                screen by screen on a call.
              </p>
              <a className="arrow-link" href="#integrations">
                Integration work
                <Arrow />
              </a>
            </div>
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
