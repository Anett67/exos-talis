let num1 = Math.floor(Math.random() * 100) + 1; // Génère un nombre entre 1 et 100
let num2 = Math.floor(Math.random() * 100) + 1;

console.log("Premier nombre: " + num1);
console.log("Second nombre: " + num2);

if (num1 > num2) {
    console.log("Le premier nombre est plus grand.");
} else if (num2 > num1) {
    console.log("Le second nombre est plus grand.");
} else {
    console.log("Les deux nombres sont égaux.");
}
