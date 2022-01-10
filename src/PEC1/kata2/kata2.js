export default function sumPositiveElements(arr) {
  arr = arr.filter(function (x) {
    return x >= 0;
  });
  return arr.reduce((a, b) => a + b, 0);
}
