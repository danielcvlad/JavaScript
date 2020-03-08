let products = [
  {
    title: "Iphone 8",
    company: " apple"
  },
  {
    title: "Galaxy",
    company: " Samsung"
  },
  {
    title: "Iphone 7",
    company: " apple"
  },
  {
    title: "Iphone XS",
    company: " apple"
  },
  {
    title: "HTC Phone",
    company: " htc"
  }
];

function getUnique(arr) {
  let tempArr = arr.map(item => item.company);
  return [...new Set(tempArr)];
}

console.log(getUnique(products));
