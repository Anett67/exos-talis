const link = document.getElementById("externalLink");
const message = document.getElementById("message");

link.addEventListener("click", function(event) {
    event.preventDefault();
    
    message.textContent = "Redirection empêchée. Vous restez sur cette page.";
});