import Atmosphere from "../components/Atmosphere";
import Arrow from "../components/Arrow";
import ContactPanel from "../components/ContactPanel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Reveal from "../components/Reveal";
import { demoCount, kits } from "../data/demos";
import { KIT_LANDING_URL, KIT_PORTFOLIO_URL } from "../data/site";

const kitLinks = {
  landing: KIT_LANDING_URL,
  portfolio: KIT_PORTFOLIO_URL,
};

function DemoCard({ item, index = 0 }) {
  return (
    <Reveal
      as="a"
      className="demo-card glass"
      href={`/work/${item.slug}/`}
      target="_blank"
      rel="noopener"
      delay={Math.min(index * 60, 300)}
    >
      <div className="demo-shot">
        <img
          src={`/assets/shots/${item.slug}.webp`}
          alt={`${item.name} preview page`}
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

function Group({ label, title, note, items, href }) {
  return (
    <section className="demo-group">
      <Reveal className="demo-group-head">
        <div className="stack-sm">
          <p className="label">{label}</p>
          <h2>{title}</h2>
        </div>
        <div className="demo-group-aside">
          <p className="sm">{note}</p>
          {href ? (
            <a
              className="btn btn-ghost btn-sm"
              href={href}
              target="_blank"
              rel="noopener"
            >
              Get the kit
              <Arrow />
            </a>
          ) : null}
        </div>
      </Reveal>
      <div className="demo-grid">
        {items.map((item, itemIndex) => (
          <DemoCard item={item} key={item.slug} index={itemIndex} />
        ))}
      </div>
    </section>
  );
}

export default function PromptKits() {
  return (
    <>
      <Atmosphere />
      <Header current="prompt-kit" />

      <main>
        <section className="page-hero">
          <div className="shell">
            <a className="back" href="/">
              ← Back to home
            </a>

            <div className="demo-hero">
              <div className="work-title">
                <p className="eyebrow">
                  Prompt kits · 43 prompts · {demoCount} outputs
                </p>
                <h1 className="display">
                  Two kits. <em>Eighteen outputs.</em>
                </h1>
                <p className="lede">
                  Both are prompt sets I sell on Gumroad: one for landing pages,
                  one for one-page portfolios. Every file below came out of a
                  single prompt and was built to the last section, not mocked up.
                </p>
                <div className="work-chips">
                  <span className="chip">30+ landing prompts</span>
                  <span className="chip">13 portfolio prompts</span>
                  <span className="chip chip-live">
                    {demoCount} outputs shown
                  </span>
                </div>
              </div>

              <aside className="demo-hero-note glass">
                <p className="label">How a prompt works</p>
                <p>
                  One prompt fixes the business, the type, the palette, the
                  sections and the footer. Paste it into your model of choice and
                  one HTML file comes back that opens, edits and deploys as it is.
                </p>
                <p>
                  The pages on this page are the previews that ship with the kits,
                  so you can click through before you buy.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <div className="shell">
          {kits.map((kit) => (
            <Group
              key={kit.key}
              label={kit.label}
              title={kit.title}
              note={kit.note}
              items={kit.items}
              href={kitLinks[kit.key]}
            />
          ))}
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
