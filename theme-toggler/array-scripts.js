// 1. Gra our HTML elements
const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addBtn');
const visitorListUI = document.getElementById('visitorList');
const visitorCountUI = document.getElementById('visitorCount') // New element!

// 2. Create an empty Array to store our list of names
const visitors = [];

// 3. Define a function to add a name and update the screen
function addVisitor() {
    const newName = nameInput.value.trim();

    if (newName !== "") {
        // Add the new name to the end of our visitors array
        visitors.push(newName);
        // clear the text box so it's ready for the next name
        nameInput.value = "";
        // update the visual list on the website
        renderList();

    }
}
// Function to display the array items along with a delete button
function renderList() {
    // Update the counter text using the array's built-in .length property
    visitorCountUI.innerText = visitors.length;
    // Clear the old visual list so we don't get duplicates
    visitorListUI.innerHTML = "";

    // The loop now tracks both the visitorName AND its index (0, 1, 2, etc.)
    visitors.forEach((visitorName, index) => {
        // 1. Create a container element for the list row
        const listItem = document.createElement('li');
        listItem.innerText = visitorName + " "; // Add space before button

        // 2. Create a brand new button element
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        
        // 3. Define what happens when this specific delete button is clicked
        deleteButton.addEventListener('click', () => {
            // Remove 1 item starting at the current index position
            visitors.splice(index, 1);
            
            // Re-render the list on screen to match the updated array
            renderList();
        });

        // 4. Put the button inside the <li> item, then put the <li> in the <ul>
        listItem.appendChild(deleteButton);
        visitorListUI.appendChild(listItem);
    });
}

// 🧠 The Core Concept: visitors.splice(index, 1)Arrays assign a number to every item, starting at 0.If you have ["Alex", "Sam", "Charlie"], Alex is index 0, Sam is 1, and Charlie is 2.The .splice() method modifies arrays directly.The first number inside .splice(index, 1) tells JavaScript where to start cutting, and the second number tells it how many items to remove.

// 5. Finally attach the event to listener to the button
addButton.addEventListener('click', addVisitor)

// Note:
// 🧠 Two Critical Concepts Used Here:
// visitors.push(newName): The .push() method is how you add a new item to the very end of an array.
// visitors.forEach(...): This is a loop. It tells JavaScript to look at every single item inside the array, one by one, and run a block of code for it.