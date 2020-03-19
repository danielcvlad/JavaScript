function capitalizeWords(str) {
  let words = str.split(" ").map(word => {
    // let firstLetter = word.slice(0, 1);
    // let restOfString = word.slice(1);
    // firstLetter = firstLetter.toUpperCase();
    // console.log(firstLetter, restOfString);
    // return `${firstLetter}${restOfString}`;
    return word.charAt(0).toUppercase() + word.slice(1);
  });

  return words.join(" ");
}

console.log(capitalizeWords("I woke up early today"));
console.log(capitalizeWords("I went straight to the beach"));
