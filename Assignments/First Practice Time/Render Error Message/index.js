// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMessage = document.getElementById("error")
console.log(errorMessage)

function purchase(){
    console.log("Button clicked")
    errorMessage.textContent = "Sorry! Something went wrong, please check and try again."
}
