let number = 98765
let digitsCount = 0
while (number !== 0) {
    number = Math.floor(number / 10)
    digitsCount++
}
console.log("Le nombre a " + digitsCount + " chiffres")

let number2 = 125

console.log(number2.toString().length)