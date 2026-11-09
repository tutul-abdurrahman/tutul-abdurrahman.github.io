import { useEffect, useRef, useState } from "react";

const STEP_MS = 2800;

/* Inline pagination for a product card. The media box keeps one fixed
   aspect ratio, so the card never changes height between slides.
   Slides advance on their own every 2.8s while the card is on screen, and
   stop the moment someone points at it, tabs into it, or leaves the page. */
export default function ProductCarousel({ name, alt, slides }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const rootRef = useRef(null);
  const heldRef = useRef(false);

  useEffect(() => {
    if (total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = rootRef.current;
    if (!el) return;

    let onScreen = false;
    let timer = 0;

    const run = () => {
      window.clearInterval(timer);
      if (!onScreen || heldRef.current || document.hidden) return;
      timer = window.setInterval(
        () => setIndex((current) => (current + 1) % total),
        STEP_MS
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        onScreen = entries[0]?.isIntersecting ?? false;
        run();
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    const hold = () => {
      heldRef.current = true;
      run();
    };
    const release = () => {
      heldRef.current = false;
      run();
    };

    el.addEventListener("pointerenter", hold);
    el.addEventListener("pointerleave", release);
    el.addEventListener("focusin", hold);
    el.addEventListener("focusout", release);
    document.addEventListener("visibilitychange", run);

    return () => {
      window.clearInterval(timer);
      io.disconnect();
      el.removeEventListener("pointerenter", hold);
      el.removeEventListener("pointerleave", release);
      el.removeEventListener("focusin", hold);
      el.removeEventListener("focusout", release);
      document.removeEventListener("visibilitychange", run);
    };
  }, [total]);

  if (!total) return null;

  return (
    <div
      className="pcarousel"
      ref={rootRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={`${alt} screens`}
    >
      <div className="pcarousel-track">
        {slides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={`${name}: ${slide.label}`}
            loading="lazy"
            className={slideIndex === index ? "is-active" : undefined}
            aria-hidden={slideIndex === index ? undefined : "true"}
          />
        ))}
      </div>

      {total > 1 ? (
        <div className="pcarousel-bar">
          <div className="pcarousel-dots">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                className={slideIndex === index ? "is-on" : undefined}
                aria-label={`Show ${slide.label}`}
                aria-current={slideIndex === index ? "true" : undefined}
                onClick={() => setIndex(slideIndex)}
              >
                <span />
              </button>
            ))}
          </div>
          <span className="pcarousel-label">{slides[index].label}</span>
        </div>
      ) : null}
    </div>
  );
}
