// 1.) Fin the elements on the page using their IDs or tags
const customButton = document.getElementById('colorBtn');
const pageBody = document.body;

// 2.) Define a function that changes the color
function changeBackgroundColor() {
    // Generate a random backgroun color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    pageBody.style.backgroundColor = "#" + randomColor;
}

//3. Tell the button to listen for a click, then run the function
customButton.addEventListener('click', changeBackgroundColor);
