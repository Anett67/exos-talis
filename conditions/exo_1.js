let total = 85; // Montant des achats
let discount = 0;

if (total >= 100) {
    discount = total * 0.10; // 10% de remise
} else if (total >= 50) {
    discount = total * 0.05; // 5% de remise
}

total -= discount; // Soustraction de la remise
console.log("Le montant après remise est de " + total + "€.");

