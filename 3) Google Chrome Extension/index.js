let inputBtn = document.getElementById("input-btn")

/*
The addEventListener() method is used to attach an event handler to a particular element. It does not override the existing event handlers. Events are said to be an essential part of the JavaScript. A web page responds according to the event that occurred.

Syntax:
element.addEventListener(event, function, useCapture);  

Although it has three parameters, the parameters event and function are widely used. The third parameter is optional to define. The values of this function are defined as follows:
event: It is a required parameter. It can be defined as a string that specifies the event's name.
function: It is also a required parameter. It is a JavaScript function which responds to the event occur.
*/
inputBtn.addEventListener("click", function(){
    console.log("Button Clicked")
})
