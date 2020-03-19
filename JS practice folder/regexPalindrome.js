function checkPalindrome(str) {
  let tempStr = str
    .match(/[a-z0-9]+/gi)
    .join("")
    .toLowerCase();
  let second = tempStr
    .split("")
    .reverse()
    .join("");
  console.log(second);

  return tempStr === second;
}
console.log(checkPalindrome("Was it a car or a cat i saw"));
// //true
console.log(checkPalindrome("Red -rum-, sir, -is-murder"));
// //true
console.log(checkPalindrome("i got up early this morning"));
// false;
