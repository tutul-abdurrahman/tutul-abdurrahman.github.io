import { EMAIL, MAIL_PROJECT } from "../data/site";
import Arrow from "./Arrow";

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="shell foot-top">
        <div className="foot-id">
          <a className="brand" href="index.html">
            <span className="brand-mark" aria-hidden="true">
              AT
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
              <a href="work.html">Client work</a>
            </li>
            <li>
              <a href="demos.html">Demo library</a>
            </li>
            <li>
              <a href="index.html#services">Services and rates</a>
            </li>
            <li>
              <a href="index.html#about">About</a>
            </li>
          </ul>
        </div>

        <div className="foot-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a className="foot-mail" href={MAIL_PROJECT}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a href="https://www.srwebstudio.com/" target="_blank" rel="noopener">
                SR Web Studio
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tutul-abdurrahman"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell foot-base">
        <p>© 2026 Abdur Rahman Tutul. All rights reserved.</p>
        <p>
          Hand-built in React and CSS.{" "}
          <a href={MAIL_PROJECT} className="accent">
            Available for work <Arrow diag />
          </a>
        </p>
      </div>
    </footer>
  );
}
