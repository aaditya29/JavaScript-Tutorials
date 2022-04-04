/*
Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.

Without template literals, when you want to combine output from expressions with strings, you’d concatenate them using the "+" (plus sign) (addition operator):
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

That can be hard to read – especially when you have multiple expressions.

With template literals, you can avoid the concatenation operator — and improve the readability of your code — by using placeholders of the form "${expression}" to perform substitutions for embedded expressions

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

*/

const recipient = "James"

// Refactor the email string to use template strings
const email = `Hey ${recipient}! How is it going? Cheers Per`

console.log(email)