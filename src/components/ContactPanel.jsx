import Arrow from "./Arrow";
import Reveal from "./Reveal";
import { EMAIL, MAIL_PROJECT, SR_STUDIO } from "../data/site";

export default function ContactPanel() {
  return (
    <Reveal className="contact-panel glass">
      <div className="contact-grid">
        <div className="contact-main">
          <p className="label">Next project</p>
          <h2>
            Yours could be <em>the next one.</em>
          </h2>
          <p className="lede">
            Tell me what you are building and when it needs to be live. I will
            reply within a day with a scope and a price.
          </p>
          <div>
            <a className="contact-mail" href={MAIL_PROJECT}>
              {EMAIL}
            </a>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href={MAIL_PROJECT}>
              Start a project
              <Arrow />
            </a>
            <a
              className="btn btn-ghost"
              href={SR_STUDIO}
              target="_blank"
              rel="noopener"
            >
              Studio site
              <Arrow diag />
            </a>
          </div>
        </div>

        <div className="contact-next">
          <p className="label">What happens next</p>
          <ul>
            <li>You send the brief, or book a 15-minute call.</li>
            <li>I reply within a day with a one-page scope and a fixed price.</li>
            <li>You approve it, and the first screen lands inside a week.</li>
          </ul>
        </div>
      </div>
    </Reveal>
  );
}