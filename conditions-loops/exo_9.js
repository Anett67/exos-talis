let number = 12345
let sumDigits = 0
while (number !== 0) {
    sumDigits += number % 10
    number = Math.floor(number / 10)
}
console.log("La somme des chiffres est : " + sumDigits)
