// Synchronus
console.log(" I ");
console.log(" eat ");
console.log("spoon");
console.log(" Ice Cream ");
console.log("with a");


//Asynchronous 


/** Arrow Function
 * An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
 * ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression.
  Example: Normal function:
  let add = function (x, y) {
	return x + y;
};

console.log(add(10, 20)); // 30

Arrow Function:
let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;
 */

/** setTimeout Function
 * The global setTimeout() a asynchronus function that sets a timer which executes a function or specified piece of code once the timer expires.
 * We can think of the method as a way to set a timer to run JavaScript code at a certain time.
  
    SYNTAX: 
    The setTimeout() method syntax is as follows:
    setTimeout(function, milliseconds, parameter1, parameter2, ...);
*/

// We will use previous two concepts in following example:
console.log(" I ");
console.log(" eat ");
setTimeout(() => {
    console.log("Icecream");
}, 4000);
console.log("with a");
console.log("spoon");
