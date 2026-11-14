import { isFilled } from '../lib/content';

export default function Placeholder({ value, label, block = false }) {
  if (isFilled(value)) {
    return block ? <p>{value}</p> : value;
  }

  const text = label || (typeof value === 'string' && value.startsWith('[') ? value : '[To be added]');
  if (block) {
    return <p className="placeholder-block">{text}</p>;
  }
  return <span className="placeholder">{text}</span>;
}
