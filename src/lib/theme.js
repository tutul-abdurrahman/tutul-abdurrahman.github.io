const KEY = "tutul-theme";
const LIGHT_BG = "#f1f2e8";
const DARK_BG = "#06090a";

function apply(theme) {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = next;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", next === "light" ? LIGHT_BG : DARK_BG);

  return next;
}

export function getTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function setTheme(theme, { persist = true } = {}) {
  const next = apply(theme);

  if (persist) {
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* storage can be blocked; the live theme still applies */
    }
  }

  return next;
}

export function toggleTheme() {
  return setTheme(getTheme() === "light" ? "dark" : "light");
}

/* Runs on load: ?theme=light|dark wins, then the saved choice, then dark. */
export function initTheme() {
  let theme = "dark";

  try {
    const fromUrl = new URLSearchParams(window.location.search).get("theme");
    const saved = localStorage.getItem(KEY);

    if (fromUrl === "light" || fromUrl === "dark") theme = fromUrl;
    else if (saved === "light" || saved === "dark") theme = saved;
  } catch {
    /* private mode or bad URL, keep the default */
  }

  return setTheme(theme);
}
