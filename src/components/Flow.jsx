/* Two-way sync diagram. `rows` is a list of paths, each path a list of stops,
   so the card can show the same record travelling in both directions. */
export default function Flow({ rows, label }) {
  return (
    <div className="flow" aria-label={label}>
      {rows.map((row, rowIndex) => (
        <span className="flow-row" key={rowIndex}>
          {row.map((stop, index) => (
            <span key={`${stop}-${index}`}>
              {stop}
              {index < row.length - 1 ? <i aria-hidden="true"> →</i> : null}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
