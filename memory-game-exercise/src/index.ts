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
let pickedCards: HTMLElement[] = [];
let foundPairs: number = 0;

function flipBack(): void {
  pickedCards[0].classList.toggle('flip');
  pickedCards[1].classList.toggle('flip');
}

function hasWon(): void {
  if (foundPairs === 8) {
    const overlayElem = document.querySelector('.overlay') as HTMLElement;
    overlayElem.classList.toggle('show');
  }
}

function checkIfMatch(): void {
  if (
    pickedCards[0].getAttribute('data-card') ===
    pickedCards[1].getAttribute('data-card')
  ) {
    foundPairs++;
    pickedCards = [];
    hasWon();
  } else {
    setTimeout(() => {
      flipBack();
      pickedCards = [];
    }, 1000);
  }
}

function shuffle(): void {
  memoryCards.forEach((memoryCard: Element) => {
    const index: number = Math.floor(Math.random() * memoryCards.length);
    const card = memoryCard as HTMLElement;
    card.style.order = index.toString();
  });
}

memoryCards.forEach((memoryCard: Element) => {
  memoryCard.addEventListener('click', (event: Event) => {
    const card = event.target as HTMLElement;

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
