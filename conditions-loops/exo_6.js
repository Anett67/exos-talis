let number = 29
let isPrime = true
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false
        break
    }
}
if (isPrime) {
    console.log(number + " est un nombre premier")
} else {
    console.log(number + " n'est pas un nombre premier")
}
