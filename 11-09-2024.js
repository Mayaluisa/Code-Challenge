/**
 * In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
 */

function reverseList(list) {
    let res=[];
    for (let i = list.length-1; i >= 0; i--){
      res.push(list[i])
    } 
    return res
  }

/**
* In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
* 
* 
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

String.prototype.isUpperCase = function() {
    return !/[a-z]/.test(this);
  }

/**
* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/

function repeatStr (n, s) {
    let str = s;
    return str.repeat(n)
  }

