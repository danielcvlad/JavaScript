//unique values using Set() data structure

function unique(str) {
  return new Set(str).size === str.length;
  // let tempStr = new Set();
  // for (let letter of str) {
  //   if (tempStr.has(letter)) {
  //     return false;
  //   }
  //   tempStr.add(letter);
  // }
  // return true;
}
console.log(unique("abcd"));
// true
console.log(unique("abcdade"));
// false - ad = duplicate
