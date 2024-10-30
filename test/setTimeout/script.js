const button = document.getElementById("showMessageButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    setTimeout(function() {
        message.textContent = "Voici le message après un délai de 3 secondes !";
    }, 3000); 
});