const nums = [10, 25, 3, 99, 45];
let largest = nums[0];
for (const num of nums) {
  if (num > largest) {
    largest = num;
  }
}
console.log(largest);
