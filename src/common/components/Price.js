export function Price({ price, prefix }) {
  return (
    <span>
      {prefix}
      {price.toFixed(2)}
    </span>
  );
}
