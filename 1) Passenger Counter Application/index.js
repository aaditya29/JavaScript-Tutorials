// document.getElementById("count-el").innerText = 5

let count=0

let countEl = document.getElementById("count-el")

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

