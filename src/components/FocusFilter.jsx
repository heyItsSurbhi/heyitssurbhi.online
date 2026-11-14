import { focuses } from '../data/focuses';

export default function FocusFilter({ value, onChange }) {
  return (
    <div
      className="filter-bar"
      role="radiogroup"
      aria-label="Explore by focus"
    >
      {focuses.map((focus) => (
        <button
          key={focus.id}
          type="button"
          role="radio"
          aria-checked={value === focus.id}
          onClick={() => onChange(focus.id)}
        >
          {focus.shortLabel}
        </button>
      ))}
    </div>
  );
}
