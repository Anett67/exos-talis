const clockElement = document.getElementById("clock");
setInterval(() => {
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}, 1000);
