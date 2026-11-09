import { EMAIL, GITHUB, LINKEDIN, MAIL_PROJECT, SR_STUDIO } from "../data/site";
import Arrow from "./Arrow";

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="shell foot-top">
        <div className="foot-id">
          <a className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              ART
            </span>
            <span className="brand-text">
              <b>Abdur Rahman Tutul</b>
              <i>Product designer · Dhaka</i>
            </span>
          </a>
          <p>
            Designing and building products from Dhaka since 2022. Course
            platforms, event systems and the admin screens behind them.
          </p>
        </div>

        <div className="foot-col">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="/work/">Client work</a>
            </li>
            <li>
              <a href="/prompt-kit/">Prompt kits</a>
            </li>
            <li>
              <a href="/#services">Services and rates</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
          </ul>
        </div>

        <div className="foot-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a className="foot-mail" href={MAIL_PROJECT}>
                Email
              </a>
            </li>
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={GITHUB} target="_blank" rel="noopener">
                GitHub
              </a>
            </li>
            <li>
              <a href={SR_STUDIO} target="_blank" rel="noopener">
                SR Web Studio
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell foot-base">
        <p>© 2026 Abdur Rahman Tutul. All rights reserved.</p>
        <p>
          Hand-built in React and CSS.{" "}
          <a href={`mailto:${EMAIL}`} className="accent">
            Available for work <Arrow diag />
          </a>
        </p>
      </div>
    </footer>
  );
}
