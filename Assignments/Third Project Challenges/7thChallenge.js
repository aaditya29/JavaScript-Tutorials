/*  TRUTHY AND FALSY VALUES

Truthy values are expressions that evaluate to the boolean value of true, and falsy values are expressions that evaluate to the boolean value of false.
Following expressions are considered as falsy values:
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN
Anything other than these six expressions is considered a truthy value.

*/

let currentViewers = null

currentViewers = ["jane", "nick"]

currentViewers = null

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers")
}