// Get all the word-item elements
const wordItems = document.querySelectorAll('.word-item');

// Get the area where the word will be displayed
const showWord = document.getElementById('show-word');

// Add click event to each word item
wordItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the id of the clicked item and display the corresponding word
        const id = item.id;
        let word;

        if (id === 'apple') {
            word = 'Apple';
        } else if (id === 'dog') {
            word = 'Dog';
        } else if (id === 'cat') {
            word = 'Cat';
        }

        // Update the text content to show the word
        showWord.textContent = `You selected: ${word}`;
    });
});
