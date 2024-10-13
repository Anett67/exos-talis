function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log("The car is starting");
    };
}

// Créer deux voitures différentes
let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Tesla", "Model 3", 2022);

// Afficher les informations et démarrer les voitures
console.log(car1.brand);  // Affiche "Toyota"
car1.start();  // Affiche "The car is starting"

console.log(car2.brand);  // Affiche "Tesla"
car2.start();  // Affiche "The car is starting"
