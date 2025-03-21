document.addEventListener("DOMContentLoaded", function () {
    const drawBtn = document.getElementById("drawBtn");
    const userNumberEl = document.getElementById("userNumber");
    const winningNumberEl = document.getElementById("winningNumber");
    const resultEl = document.getElementById("result");
    const winCountEl = document.getElementById("winCount");
    const lossCountEl = document.getElementById("lossCount");
    const winSound = document.getElementById("winSound");
    const loseSound = document.getElementById("loseSound");

    let winCount = 0;
    let lossCount = 0;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; // Generates a number between 1 and 10
    }

    function animateNumber(element) {
        element.classList.add("animate");
        setTimeout(() => {
            element.classList.remove("animate");
        }, 500);
    }

    drawBtn.addEventListener("click", function () {
        const userNumber = generateRandomNumber();
        const winningNumber = generateRandomNumber();

        userNumberEl.textContent = userNumber;
        winningNumberEl.textContent = winningNumber;

        animateNumber(userNumberEl);
        animateNumber(winningNumberEl);

        if (userNumber === winningNumber) {
            resultEl.textContent = "🎉 Congratulations! You won!";
            resultEl.style.color = "green";
            winSound.play();
            winCount++;
            winCountEl.textContent = winCount;
        } else {
            resultEl.textContent = "❌ Sorry! Try again.";
            resultEl.style.color = "red";
            loseSound.play();
            lossCount++;
            lossCountEl.textContent = lossCount;
        }
    });
});

