// 1. Tell the text input field to listen for a key press
nameInputField.addEventListener('keydown', function (event) {
    
    // 2. Check if the pressed key is specifically the 'Enter' key
    if (event.key === 'Enter') {
        // 3. Prevent the default browser behavior (like refreshing the page)
        event.preventDefault();
        
        // 4. Run our existing greeting function!
        handleGreeting();
    }
});
