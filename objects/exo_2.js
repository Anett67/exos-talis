let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};

// Appeler la méthode greet
person.greet();  // Affiche "Hello, my name is John Doe"
