/**
 * 1. Hämta alla kort och sätt en eventlistener på varje kort
 * 2. När jag klickar på ett kort så sätt klassen flip och spara undan kortet
 * 3. Om jag har klickat på två kortet så hämta data-card och jämför värden
 *   a. Om samma öka hittade par med 1
 *   b. Annars ta bort klassen flip från både korten
 * 4. Om antal hittade par är 8 så visa att man vann
 * 5. Shuffla korten.
 */
const memoryCards = document.querySelectorAll('.memory-card');
let pickedCards = [];
let foundPairs = 0;
function flipBack() {
    pickedCards[0].classList.toggle('flip');
    pickedCards[1].classList.toggle('flip');
}
function hasWon() {
    if (foundPairs === 8) {
        const overlayElem = document.querySelector('.overlay');
        overlayElem.classList.toggle('show');
    }
}
function checkIfMatch() {
    if (pickedCards[0].getAttribute('data-card') ===
        pickedCards[1].getAttribute('data-card')) {
        foundPairs++;
        pickedCards = [];
        hasWon();
    }
    else {
        setTimeout(() => {
            flipBack();
            pickedCards = [];
        }, 1000);
    }
}
function shuffle() {
    memoryCards.forEach((memoryCard) => {
        const index = Math.floor(Math.random() * 16);
        const card = memoryCard;
        card.style.order = index.toString();
    });
}
memoryCards.forEach((memoryCard) => {
    memoryCard.addEventListener('click', (event) => {
        const card = event.target;
        if (pickedCards.length < 2) {
            card.classList.toggle('flip');
            pickedCards.push(card);
        }
        if (pickedCards.length === 2) {
            checkIfMatch();
        }
    });
});
shuffle();
