export function capitalize(word) {
  return !word.length
    ? ""
    : `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
}
