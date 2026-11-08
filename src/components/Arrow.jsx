export default function Arrow({ diag = false }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={
          diag
            ? "M5 11 11 5M11 5H6.2M11 5v4.8"
            : "M3.2 8h9.4M9.4 4.6 12.8 8l-3.4 3.4"
        }
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
