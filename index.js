// Your code goes here
// document.addEventListener('DOMcontentLoaded',messageForDom )

// function messageForDom(event){
//     console.log("the DOM has loaded")
// }

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let text = document.getElementById("text")
    text.textContent = "This is really cool!"
    console.log(text)
  }); 