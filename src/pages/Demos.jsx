import Atmosphere from "../components/Atmosphere";
import Arrow from "../components/Arrow";
import ContactPanel from "../components/ContactPanel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reveal from "../components/Reveal";
import { demoCount, landingPages, portfolioPages } from "../data/demos";

function DemoCard({ item }) {
  return (
    <Reveal
      as="a"
      className="demo-card glass"
      href={`/work/${item.slug}/`}
      target="_blank"
      rel="noopener"
    >
      <div className="demo-shot">
        <img
          src={`/assets/shots/${item.slug}.webp`}
          alt={`${item.name} demo page`}
          loading="lazy"
        />
      </div>
      <div className="demo-meta">
        <div>
          <h3>{item.name}</h3>
          <p>{item.kind}</p>
        </div>
        <span className="wcard-arrow" aria-hidden="true">
          <Arrow diag />
        </span>
      </div>
    </Reveal>
  );
}

function Group({ label, title, note, items }) {
  return (
    <section className="demo-group">
      <div className="demo-group-head">
        <div className="stack-sm">
          <p className="label">{label}</p>
          <h2>{title}</h2>
        </div>
        <p className="sm">{note}</p>
      </div>
      <div className="demo-grid">
        {items.map((item) => (
          <DemoCard item={item} key={item.slug} />
        ))}
      </div>
    </section>
  );
}

export default function Demos() {
  return (
    <>
      <Atmosphere />
      <Header current="demos" />

      <main>
        <section className="page-hero">
          <div className="shell">
            <a className="back" href="index.html">
              ← Back to home
            </a>

            <div className="demo-hero">
              <div className="work-title">
                <p className="eyebrow">Demo library · {demoCount} live pages</p>
                <h1 className="display">
                  Eighteen pages. <em>Eighteen briefs.</em>
                </h1>
                <p className="lede">
                  Self-initiated landing pages and portfolio layouts, each built
                  for a different business and a different visual language. Not a
                  template with the colours swapped.
                </p>
                <div className="work-chips">
                  <span className="chip">12 landing pages</span>
                  <span className="chip">6 portfolio sites</span>
                  <span className="chip chip-live">Every one is live</span>
                </div>
              </div>

              <aside className="demo-hero-note glass">
                <p className="label">How these were built</p>
                <p>
                  One HTML file per page, hand-written CSS, real copy and a complete
                  footer. Each one sets its own type, palette and layout before a
                  single section is written.
                </p>
                <p>
                  Useful if you want to see range rather than client logos.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <div className="shell">
          <Group
            label="Twelve landing pages"
            title="One page, one job."
            note="Product pages, studios, hospitality and a few businesses that only exist inside these files."
            items={landingPages}
          />
          <Group
            label="Six portfolio sites"
            title="For people, not products."
            note="Academic, legal, photography and developer portfolios. Different readers, different tone."
            items={portfolioPages}
          />
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
