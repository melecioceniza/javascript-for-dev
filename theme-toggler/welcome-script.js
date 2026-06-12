// 1. Store the webpage element in a constant variable
const headingElement = document.getElementById('welcomeHeading');
const nameInputField = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');

// 2. Create a string variable for a username
//let currentVisitor = "Future Full-Stack Dev Nice";
function handleGreeting() {
    // Grab the current text inside the input box using '.value'
    const userTypeName = nameInputField.value;

    // Check if the user actually type something (not empty)
    if (userTypeName !== "") {
        headingElement.innerText = "Hello, " + userTypeName + "!"
    } else {
        headingElement.innerText = "Please type a name first";
    }
}

// Attached the function to the button click event
 submitBtn.addEventListener('click', handleGreeting)

// // 3. Use JavaScript to change the text on the screen dynamically
// headingElement.innerText = "Hello, " + currentVisitor + "!";
