// Audio files for the words
const audioFiles = {
    apple: new Audio('https://www.soundjay.com/button/beep-07.wav'),
    dog: new Audio('https://www.soundjay.com/button/beep-09.wav'),
    cat: new Audio('https://www.soundjay.com/button/beep-10.wav'),
    banana: new Audio('https://www.soundjay.com/button/beep-12.wav'),
    ball: new Audio('https://www.soundjay.com/button/beep-13.wav')
};

// Play audio for the word
function playAudio(word) {
    audioFiles[word].play();
}

// Game Logic
let selectedImage = null;

document.querySelectorAll('.game-item').forEach(item => {
    item.addEventListener('click', function() {
        if (selectedImage) {
            if (this.id === `${selectedImage}-picture`) {
                document.getElementById('message').textContent = `Correct! You matched the ${selectedImage}!`;
            } else {
                document.getElementById('message').textContent = `Oops! Try again!`;
            }
            selectedImage = null;
        } else {
            selectedImage = this.id.replace('-picture', '');
        }
    });
});

// Show word when clicking on pictures
const wordItems = document.querySelectorAll('.word-item');
const showWord = document.getElementById('show-word');

wordItems.forEach(item => {
    item.addEventListener('click', () => {
        const word = item.id;
        showWord.textContent = `You selected: ${word.charAt(0).toUpperCase() + word.slice(1)}`;
    });
});
