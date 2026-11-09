import { useEffect, useState } from "react";
import { MAIL_PROJECT, nav } from "../data/site";
import Arrow from "./Arrow";
import ThemeToggle from "./ThemeToggle";

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      ART
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

  /* On the home page the section is already rendered, so scroll to it here.
     On any other page we let the link travel to /#id and Home picks it up. */
  const onSectionLink = (event, href) => {
    const [path, hash] = href.split("#");
    if (!hash || path !== "/") return;
    const onHome =
      window.location.pathname === "/" ||
      window.location.pathname === "/index.html";
    if (!onHome) return;

    const node = document.getElementById(hash);
    if (!node) return;

    event.preventDefault();
    node.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${hash}`);
    setOpen(false);
  };

  return (
    <header className={`site-head${stuck ? " is-stuck" : ""}`}>
      <div className="shell head-inner">
        <a className="brand" href="/" aria-label="Abdur Rahman Tutul, home">
          <Mark />
          <span className="brand-text">
            <b>Abdur Rahman Tutul</b>
            <i>Product designer · Dhaka</i>
          </span>
        </a>

        <nav className="nav-desk" aria-label="Primary">
          <a href="/" aria-current={isActive("home") ? "page" : undefined}>
            Home
          </a>
          <a href="/work/" aria-current={isActive("work") ? "page" : undefined}>
            Work
          </a>
          <a
            href="/prompt-kit/"
            aria-current={isActive("prompt-kit") ? "page" : undefined}
          >
            Prompt kits
          </a>
          <a
            href="/#services"
            onClick={(event) => onSectionLink(event, "/#services")}
          >
            Services
          </a>
          <a href="/#about" onClick={(event) => onSectionLink(event, "/#about")}>
            About
          </a>
        </nav>

        <div className="head-actions">
          <ThemeToggle />
          <a className="btn btn-primary btn-sm" href={MAIL_PROJECT}>
            Start a project
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
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                onSectionLink(event, item.href);
                setOpen(false);
              }}
            >
              {item.label}
              <Arrow />
            </a>
          ))}
          <a className="btn btn-primary" href={MAIL_PROJECT} onClick={() => setOpen(false)}>
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
