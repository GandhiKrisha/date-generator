let items = [
    '🎲 Game night',
    '🎨 Clay date',
    '🛍️ Shopping',
    '🎳 Monte bowling',
    '🍗 Corners'
];

function randomDateIdeas(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let button = document.getElementById("spinButton");
let result = document.getElementById("result");
let popSound = document.getElementById("popSound");

button.addEventListener("click", function() {
    let counter = 0;

    let spinning = setInterval(function() {
        result.textContent = randomDateIdeas(items);
        counter++;

        if (counter === 15) {
            clearInterval(spinning);

            let finalChoice = randomDateIdeas(items);
            result.textContent = "Tonight's date is: " + finalChoice + " 💕";

            popSound.currentTime = 0;
            popSound.play();

            createConfetti();
        }
    }, 100);
});

function createConfetti() {
    let confettiIcons = ["🎉", "✨", "💖", "💕", "⭐"];

    for (let i = 0; i < 20; i++) {
        let confetti = document.createElement("span");

        confetti.classList.add("confetti");

        confetti.textContent = confettiIcons[Math.floor(Math.random() * confettiIcons.length)];

        confetti.style.setProperty("--x", (Math.random() * 500 - 250) + "px");
        confetti.style.setProperty("--y", (Math.random() * 500 - 250) + "px");

        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 1000);
    }
}