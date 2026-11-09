import Reveal from "./Reveal";

export default function SectionHead({ label, title, note, action, delay = 0 }) {
  return (
    <Reveal className="section-head" delay={delay}>
      <div className="stack-sm">
        <p className="label">{label}</p>
        <h2>{title}</h2>
      </div>
      {note ? <p className="sm">{note}</p> : null}
      {action}
    </Reveal>
  );
}
