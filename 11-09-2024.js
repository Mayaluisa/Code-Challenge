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

/**
 * When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

Input: 1

Output: "One".
 */

function switchItUp(number){
    switch (number){
      case 0: 
        return("Zero");
        break;
      case 1: 
        return("One");
        break;
      case 2:
          return("Two");
          break;
      case 3:
        return("Three");
        break;
      case 4:
        return("Four");
        break;
      case 5:
        return("Five");
        break;
      case 6:
        return("Six");
        break;
      case 7:
        return("Seven");
        break;
      case 8:
        return("Eight");
        break;
      case 9:
        return("Nine");
        break;
      default:
        console.log("Not a covered number.")
        }
  }

/**
* noteworthy alternative 
*/

switchItUp = n => ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]*[n]

/**
 * Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
 */

class Kata {
    static getVolumeOfCuboid(length, width, height) {
     return length*width*height
    }
  }
