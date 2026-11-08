export default function SectionHead({ label, title, note, action }) {
  return (
    <div className="section-head">
      <div className="stack-sm">
        <p className="label">{label}</p>
        <h2>{title}</h2>
      </div>
      {note ? <p className="sm">{note}</p> : null}
      {action}
    </div>
  );
}
