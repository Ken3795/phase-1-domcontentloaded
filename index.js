// Your code goes here
// Set up an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    // Target the paragraph element with id="text"
    const textElement = document.getElementById("text");
    
    // Replace the text content of the paragraph
    textElement.textContent = "This is really cool!";
    
    console.log("The DOM has loaded, and the text has been updated.");
  });
  
  // This console.log will fire immediately when index.js is loaded
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  