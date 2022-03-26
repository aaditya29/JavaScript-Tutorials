// document.getElementById("count-el").innerText = 5

let count=0

let countEl = document.getElementById("count-el")
/*The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
Here the 'count-el' matches the specified string in the index.html.
*/

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

