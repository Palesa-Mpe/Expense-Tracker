const balloonContainer = document.querySelector('main') as HTMLElement;
let balloon: HTMLImageElement;


function createBalloon() {
  balloon = document.createElement('img');
  balloon.src = '/images/Balloon.png'; // Replace with your balloon image source
  balloon.alt = 'Balloon';
  balloon.className = 'balloon';
  balloon.style.left = `${Math.random() * 90}%`;
  balloon.style.zIndex = `${Math.floor(Math.random() * 2) + 1}`

  balloonContainer.appendChild(balloon);
}

// Create multiple balloons
const numBalloons = 1;
for (let i = 0; i < numBalloons; i++) {
  createBalloon();
}

recreateBalloon()

function recreateBalloon() {
  setTimeout(() => {
    balloon.remove();
    createBalloon();
    recreateBalloon()
  }, 15000);
}
