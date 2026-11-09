import Arrow from "./Arrow";
import Reveal from "./Reveal";
import { MAIL_INTEGRATION, integrations } from "../data/site";

export default function IntegrationPanel() {
  return (
    <Reveal className="int-panel glass">
      <div className="int-lead">
        <div className="stack-sm">
          <p className="label">Integrations</p>
          <h2>
            The wiring under <em>the product.</em>
          </h2>
        </div>
        <div className="int-note">
          <p>
            Most of my build work happens between two systems that should already
            agree. I map the fields, write the connector, handle the retries and
            the failed lookups, then test it against the live API before calling
            it done.
          </p>
          <p className="int-cred">
            <b>Swoogo Pro service-provider core developer team</b>
            <span>
              The SR Web Studio team. These connectors were built against the
              platform itself, not a wrapper around it.
            </span>
          </p>
        </div>
      </div>

      <div className="int-grid">
        {integrations.map((group) => (
          <div className="int-col" key={group.group}>
            <span className="label">{group.group}</span>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="int-foot">
        <p>Scoped per connector, from $450. One to two weeks including testing.</p>
        <a className="arrow-link" href={MAIL_INTEGRATION}>
          Talk about an integration
          <Arrow />
        </a>
      </div>
    </Reveal>
  );
}
