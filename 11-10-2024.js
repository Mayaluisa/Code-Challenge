/**
 * In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.
 */


// ---------------------------------------------------------------
// ---------------------------------------------------------------

/*
 - P
Return a number: 

Given a current pop(ulation), p0, a percentage at which the pop increases, perc,
a flat rate at which the pop increases, aug,
and a target pop, p, determine how many years it will take for p0 to reach 
or surpass p. Return this value as a number. 

** p0 must always be a whole number. 

 - E
p0 = 40
percent = 2
aug = 50 
p = 300 

           .02     50
40 + (40 * perc) + aug = 90.8 // remember to call the .floor() method on your p0
values so you. can compare whole numbers. 

 90 + ( 90 * perc) + aug = 141.8

141 + (141 * perc) + aug = 193.82

193 + (193 * perc) + aug = 246.86

246 + (246 * perc) + aug = 300.92

numberYear(p0, percent, aug, p) => 5

 - D
 
numbers

 - A

init a varibale to store your percent as an integer
init a variable to count the number of years pop growth takes

init a while loop with a conditional that p0 must be equal to or greater than p
inside the loop: 
                 add p0 to the aug int, and the perc of p0 
                 reassign p0 to be the last value of p0.floor() to use whole numbers
                 restart the process with the updated value for p0
                 increment the year count each time the loop runs  
                 
outside the loop: return the year count when p0 is greater than or equal to p.
 - C
*/

function nbYear(p0, percent, aug, p) {
    let perc = percent/100;
    let years = 0;
    
    while (p > p0){
      p0 = Math.floor(p0 + (p0 * perc) + aug)
      years ++
    }
    return years 
  }
  

  /**
   * Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
*/
  

var min = function(list){
    let min = list[0];
      for (let i = 1; i < list.length; i++){
        if (list[i] < min){
          min = list[i]
        }
      }
    return min 
  }
  
  var max = function(list){
      let max = list[0];
    for (let i = 0; i < list.length; i++){
      if (list[i] > max){
        max = list[i]
      }
    }
    return max 
  }
  
/**
 * Write a function which converts the input string to uppercase.
 */
  
function makeUpperCase(str) {
    return str.toUpperCase();
  }

/**
* Make a simple function called greet that returns the most-famous "hello world!".
*/

/**
 * Trying out an anonymous function
 */

const greet = function () {
    return "hello world!"
  }

/**
* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(arr) {
    return arr.filter((ele) => typeof ele === "number")
  }

/**
 * You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
 */

function findNextSquare(sq) {
    let start = Math.sqrt(sq)
    let found = 0;
    
    if (start !== Math.floor(start)){
      return -1
    } 
    
    let nextSq = ++start ** 2
    
    return nextSq
  }