//if all the numbers in the array summed up are equal with the largest number in the array

function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop(); //returns the highest number

  let number = 0;
  tempArr.forEach(item => (number += item));
  return largest === number;
}

console.log(ArraySum([1, 2, 4, 6, 13]));
//returns true 1+2+4+6 = 13
console.log(ArraySum([1, 2, 4, 34, 22]));
//returns false 1+2+4+22 = 29 29!=34
