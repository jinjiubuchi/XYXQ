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

// Word Matching Game functionality
const words = ['apple', 'dog', 'cat', 'banana', 'ball'];
let gameItems = [];
let gameStarted = false;

// Function to start the matching game
function startGame() {
    if (gameStarted) return;
    
    gameStarted = true;
    document.getElementById('gameFeedback').textContent = 'Drag the images to the correct word!';
    const gameArea = document.getElementById('gameArea');
    
    // Randomize the game items
    const shuffledWords = shuffle([...words]);
    
    // Generate game items for the game area
    shuffledWords.forEach(word => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.setAttribute('draggable', 'true');
        gameItem.textContent = word.charAt(0).toUpperCase() + word.slice(1);
        gameItem.setAttribute('data-word', word);
        gameItem.ondragstart = (event) => dragStart(event);
        gameArea.appendChild(gameItem);
    });

    // Generate word containers for drag targets
    const targets = words.map(word => {
        const target = document.createElement('div');
        target.classList.add('game-item');
        target.textContent = word.charAt(0).toUpperCase() + word.slice(1);
        target.setAttribute('data-word', word);
        target.ondragover = (event) => event.preventDefault();
        target.ondrop = (event) => drop(event);
        return target;
    });

    targets.forEach(target => gameArea.appendChild(target));
}

// Shuffle function for randomizing the words
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Drag Start Function
function dragStart(event) {
    event.dataTransfer.setData('text', event.target.getAttribute('data-word'));
}

// Drop Function
function drop(event) {
    const draggedWord = event.dataTransfer.getData('text');
    const targetWord = event.target.getAttribute('data-word');

    if (draggedWord === targetWord) {
        event.target.style.backgroundColor = 'green';
        document.getElementById('gameFeedback').textContent = 'Correct! Well done!';
    } else {
        event.target.style.backgroundColor = 'red';
        document.getElementById('gameFeedback').textContent = 'Try again!';
    }
}
