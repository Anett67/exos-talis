let number = 1234
let reversed = 0
while (number !== 0) {
    let digit = number % 10
    reversed = reversed * 10 + digit
    number = Math.floor(number / 10)
}
console.log("Le nombre inversé est : " + reversed)
