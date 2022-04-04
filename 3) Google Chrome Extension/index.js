let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
/*
The addEventListener() method is used to attach an event handler to a particular element. It does not override the existing event handlers. Events are said to be an essential part of the JavaScript. A web page responds according to the event that occurred.

Syntax:
element.addEventListener(event, function, useCapture);  

Although it has three parameters, the parameters event and function are widely used. The third parameter is optional to define. The values of this function are defined as follows:
event: It is a required parameter. It can be defined as a string that specifies the event's name.
function: It is also a required parameter. It is a JavaScript function which responds to the event occur.
*/
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""//To clear out the inpit field by assigning it to an empty string
    renderLeads()
})


function renderLeads(){
    //Creating a variable, listItems, to hold all the HTML for the list items and assign it to an empty string to begin with
    let listItems = " "
    //Logging out the lead values
    for(let i=0; i<myLeads.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
