let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
welcomeEl.innerText = welcomeEl.innerText + "👋"
//alternative and better way to write previous line of code
//welcomeEl.innerText += "👋"