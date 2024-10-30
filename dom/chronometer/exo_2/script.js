let countdown = 5;
const countdownElement = document.getElementById("countdown");

const intervalId = setInterval(() => {
    if (countdown > 0) {
        countdownElement.textContent = countdown;
        countdown--;
    } else {
        countdownElement.textContent = "Go !";
        clearInterval(intervalId);
    }
}, 1000);
