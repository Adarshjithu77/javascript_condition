const nested = [[1, 2], [3, 4]];
for (const inner of nested) {
  for (const num of inner) {
    console.log(num);
  }
}
