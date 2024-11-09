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

