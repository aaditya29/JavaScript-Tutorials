let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// Storing the delete button in deleteBtn vairable
const deleteBtn = document.getElementById("delete-btn")
//Getting the leads from the localStorage using json.parse and storing it in a variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))//JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
const tabBtn = document.getElementById("tab-btn")

// Checking if the leads from the localStorage are truthy
// if yes then set myLeads to its value and then call the renderLeads
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    //Grabbing the URL of the current tab

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {//calling query method from the chrome tab
                        //active: true specifies the active tab query and currentWindow which is active in case multiple windows are active and passing tabs variable
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
   })
    
})
function render(leads){
    //Creating a variable, listItems, to hold all the HTML for the list items and assign it to an empty string to begin with
    let listItems = " "
    //Logging out the lead values
    for(let i=0; i<leads.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


// Listening for double clicks on the delete button
deleteBtn.addEventListener("dblclick", function(){
    //Clearing localStorage, myLeads, and the DOM after button is clicked double
    localStorage.clear()//Clear localStorage
    myLeads =[]// Cleared my leads array after assinging it to an empty array
    render(myLeads)//Calling renderLeads array to clear DOM because it is empty
})

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
    //Saving the myLeads array to the localStorage
    localStorage.setItem("myLeads",JSON.stringify(myLeads))//localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date

    render(myLeads)
})
