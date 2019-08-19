const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let array2 = [];
  for( let i = 1; i < array.length; i++) {
    array2.push(array[i]);
  }
  return array2;
}

console.log(tail([1,2,3,4,5,6,7,8,9,10]));

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!