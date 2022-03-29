// document.getElementById("count-el").innerText = 5

let count=0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")//Grabbing the save-el paragrah and storing it in a variable called saveEl

console.log(saveEl)


/*The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
Here the element 'count-el' matches the specified string in the index.html.
*/

function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    //Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countString = count = "-"
    //Render the variable in the saveEl using innerText
    saveEl.textContent += countString
    countEl.textContent=0
    count = 0

    console.log(count)
}

