const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const timer = document.getElementById("timer");

let seconds = 0; 
let intervalId;

startButton.addEventListener("click", function() {
    seconds = 0;

    intervalId = setInterval(function() {
        seconds++;
        timer.textContent = "Temps écoulé : " + seconds + " secondes";
    }, 1000); 
});

stopButton.addEventListener("click", function() {
    clearInterval(intervalId);
    timer.textContent = "Minuterie arrêtée à " + seconds + " secondes.";
});