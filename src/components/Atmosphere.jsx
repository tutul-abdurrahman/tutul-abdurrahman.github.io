import { useEffect, useRef } from "react";

/* One soft light follows the pointer on pointer devices. CSS hides it on touch. */
export default function Atmosphere() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    const onMove = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${event.clientX}px`);
        el.style.setProperty("--my", `${event.clientY}px`);
        frame = 0;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="spot" ref={ref} aria-hidden="true" />;
}
