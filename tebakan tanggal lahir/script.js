// --- DOM Elements ---
const gameArea = document.getElementById('gameArea');
const questionCard = document.getElementById('questionCard');
const questionText = document.getElementById('questionText');
const numberSetDiv = document.getElementById('numberSetDiv');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const resultArea = document.getElementById('resultArea');
const thinkingText = document.getElementById('thinkingText');
const resultText = document.getElementById('resultText');
const resetBtn = document.getElementById('resetBtn');
const themeSelector = document.getElementById('themeSelector'); // Theme selector element

// --- Game Logic ---
const numberSets = [
    // Set 1 (Value 1 - Bit 0)
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    // Set 2 (Value 2 - Bit 1)
    [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31],
    // Set 3 (Value 4 - Bit 2)
    [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31],
    // Set 4 (Value 8 - Bit 3)
    [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31],
    // Set 5 (Value 16 - Bit 4)
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
];

let currentQuestionIndex = 0;
let guessedNumber = 0;

// --- Utility Functions ---

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy to avoid modifying original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Helper function for ordinal numbers (1st, 2nd, 3rd, etc.)
function getOrdinal(n) {
     const s = ["th", "st", "nd", "rd"];
     const v = n % 100;
     return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// --- Main Functions ---

function displayQuestion(index) {
    if (index < numberSets.length) {
        questionText.textContent = `Pertanyaan ${index + 1} dari ${numberSets.length}: Apakah tanggal lahir kamu termasuk dalam daftar ini?`;
        numberSetDiv.innerHTML = ''; // Clear previous numbers
        
        // Shuffle the numbers in the current set before displaying
        const shuffledNumbers = shuffleArray(numberSets[index]);
        
        shuffledNumbers.forEach(num => {
            const span = document.createElement('span');
            span.textContent = num;
            numberSetDiv.appendChild(span);
        });
        
        questionCard.classList.remove('hidden');
        resultArea.classList.add('hidden'); // Hide result area during questions
        resultArea.classList.remove('visible'); // Ensure animation class is removed
    } else {
        // All questions asked, show result
        showResult();
    }
}

function handleAnswer(isYes) {
    if (isYes) {
        // Add the value corresponding to the current question's set
        guessedNumber += Math.pow(2, currentQuestionIndex);
    }
    currentQuestionIndex++;
    // Add a small delay for visual feedback before showing the next question
    setTimeout(() => {
         displayQuestion(currentQuestionIndex);
    }, 150); // 150ms delay
}

function showResult() {
    questionCard.classList.add('hidden');
    resultArea.classList.remove('hidden');
    resultText.textContent = ''; // Clear previous result text
    thinkingText.textContent = 'menghitung... 🤔';
    thinkingText.style.display = 'block'; // Make sure thinking text is visible

    // Simulate thinking time
    setTimeout(() => {
        thinkingText.textContent = 'Aha! Aku pikir aku sudah mengerti... 💡';
    }, 1000);

    setTimeout(() => {
        if (guessedNumber > 0 && guessedNumber <= 31) {
             resultText.textContent = `tanggal kelahiran mu adalah ${getOrdinal(guessedNumber)}! 🎉`;
        } else {
             // Handle the case where the user consistently answers "No" (guessedNumber = 0)
             if (guessedNumber === 0) {
                 resultText.textContent = "Kamu mengatakan ‘Tidak’ untuk semua pilihan! Apakah kamu yakin sedang memikirkan tanggal antara 1 dan 31? 🤔";
             } else {
                 resultText.textContent = "Hmm, ada yang salah, atau mungkin kamu tidak memikirkan tanggal antara 1 dan 31? 🤔 Ayo coba lagi!";
             }
        }
        thinkingText.style.display = 'none'; // Hide thinking text after result
        resultArea.classList.add('visible'); // Trigger fade-in animation
    }, 2500);
}

function resetGame() {
    currentQuestionIndex = 0;
    guessedNumber = 0;
    resultArea.classList.add('hidden');
    resultArea.classList.remove('visible'); // Reset animation classes
    displayQuestion(currentQuestionIndex);
}

// --- Theme Switching Logic ---
function applyTheme(themeName) {
    document.body.dataset.theme = themeName;
    localStorage.setItem('birthdayGuesserTheme', themeName);
}

// Event listener for theme selector change
themeSelector.addEventListener('change', (event) => {
    applyTheme(event.target.value);
});

// Function to load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('birthdayGuesserTheme') || 'default';
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);
}

// --- Event Listeners ---
yesBtn.addEventListener('click', () => handleAnswer(true));
noBtn.addEventListener('click', () => handleAnswer(false));
resetBtn.addEventListener('click', resetGame);

// --- Initial Load ---
loadSavedTheme(); // Load saved theme first
displayQuestion(currentQuestionIndex); // Start the game
