const mixed = [5, -3, 8, -1, 7];
const positives = [];

for (const num of mixed) {
  if (num >= 0) {
    positives.push(num);
  }
}
console.log(positives);
