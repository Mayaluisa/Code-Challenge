/**
 * Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
 */

function firstNonConsecutive (arr) {
    if(arr.length <= 1){ // guard clause: if the array is empty or has 1 element, return null.
      return null
    }
    
    for(let i = 0; i < arr.length-1; i++){ // iterate through the array
      let next = arr[i+1]; // init variable to store val for the next index
      let anticipated = arr[i] + 1 // init variable to store value of the next digit 
      if (anticipated !== next){ // use conditional to check if the next index holds the anticipated number
       return next // if so, return the "next" number
      }  // if the last number in an array is equal to the last number in an array, return next 
    } return null // remember to return null if all ele are consecutive 
  }
       