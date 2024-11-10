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
  
  
  
  
  
  
  
  