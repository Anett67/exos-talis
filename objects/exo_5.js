let car1 = new Object();
car1.brand = "Toyota"
car1.model = "Corolla"
car1.year = 2022
car1.start = function() {
    console.log('The car is starting')
} 

console.log(car1.model);  
car1.start();  

let car2 = new Object();
car2.brand = "Toyota"
car2.model = "Yaris"
car2.year = 2020
car2.start = function() {
    console.log('The car is starting')
} 

console.log(car2.model);  
car2.start();  



function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log("The car is starting");
    };
}

let car3 = new Car("Toyota", "Corolla", 2020);
let car4 = new Car("Tesla", "Model 3", 2022);

console.log(car3.brand);  
car1.start();  

console.log(car4.brand); 
car2.start();  

