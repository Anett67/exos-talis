let weight = 70; // en kg
let height = 1.75; // en mètres
let bmi = weight / Math.pow(height, 2); // Calcul de l'IMC avec Math.pow

if (bmi < 18.5) {
    console.log("Insuffisance pondérale.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Poids normal.");
} else {
    console.log("Surpoids.");
}
