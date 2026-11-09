import { useState } from "react";

/* Inline pagination for a product card. The media box keeps one fixed
   aspect ratio, so the card never changes height between slides. */
export default function ProductCarousel({ name, alt, slides }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  if (!total) return null;

  return (
    <div
      className="pcarousel"
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
