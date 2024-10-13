let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// Mise à jour de la propriété age
person.age = 30;
console.log(person.age);  // Affiche 30

// Suppression de la propriété lastName
delete person.lastName;
console.log(person.lastName);  // Affiche undefined
