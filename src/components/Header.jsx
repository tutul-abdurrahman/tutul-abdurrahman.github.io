import { useEffect, useState } from "react";
import { MAIL_PROJECT, nav } from "../data/site";
import Arrow from "./Arrow";
import ThemeToggle from "./ThemeToggle";

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      AT
    </span>
  );
}

export default function Header({ current = "home" }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (key) =>
    (current === "home" && key === "home") || current === key;

  return (
    <header className={`site-head${stuck ? " is-stuck" : ""}`}>
      <div className="shell head-inner">
        <a className="brand" href="index.html" aria-label="Abdur Rahman Tutul, home">
          <Mark />
          <span className="brand-text">
            <b>Abdur Rahman Tutul</b>
            <i>Product designer · Dhaka</i>
          </span>
        </a>

        <nav className="nav-desk" aria-label="Primary">
          <a href="index.html" aria-current={isActive("home") ? "page" : undefined}>
            Home
          </a>
          <a href="work.html" aria-current={isActive("work") ? "page" : undefined}>
            Work
          </a>
          <a href="demos.html" aria-current={isActive("demos") ? "page" : undefined}>
            Demos
          </a>
          <a href="index.html#services">Services</a>
          <a href="index.html#about">About</a>
        </nav>

        <div className="head-actions">
          <ThemeToggle />
          <a className="btn btn-lime btn-sm" href={MAIL_PROJECT}>
            Start a project
            <Arrow />
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`menu-panel${open ? " is-open" : ""}`}>
        <div className="shell menu-inner">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <Arrow />
            </a>
          ))}
          <a className="btn btn-lime" href={MAIL_PROJECT} onClick={() => setOpen(false)}>
            Start a project
            <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}
