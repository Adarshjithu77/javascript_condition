const word = "javascript";
const vowels = "aeiou";
let countVowels = 0;

for (const char of word) {
  if (vowels.includes(char)) {
    countVowels++;
  }
}
console.log(countVowels);
