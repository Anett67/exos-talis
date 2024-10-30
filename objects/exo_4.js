let car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2022,
    start: function() {
        console.log("The car is starting");
    },
    info: function() {
        console.log("Car: " + this.brand + " " + this.model + ", Year: " + this.year);
    }
};

// Appeler les méthodes
car.start();  // Affiche "The car is starting"
car.info();   // Affiche "Car: Tesla Model 3, Year: 2022"
