/**
 * This kata (challenge) is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */

function simpleMultiplication(number) {
    if(number % 2 === 0){
     return number * 8
    } else return number * 9
  
}

/**
 * A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)
 */

function hero(bullets, dragons){
    if ((dragons *= 2) <= bullets) {
      return true 
    } else return false
  }

/**
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1 squared plus 2 squared plus 2 squared equals 9.
*/

function squareSum(numArr){
    let res = 0;
    for (let i = 0; i < numArr.length; i++){
      res += numArr[i]**2
    } return res
  }