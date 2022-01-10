export default function removeFirstAndLast(str) {
  if (str.length > 2) {
    return str.slice(1, -1);
  } else {
    return str;
  }
}
