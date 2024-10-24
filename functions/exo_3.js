function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

console.log(sumUpTo(5));  // Doit afficher 15 (1 + 2 + 3 + 4 + 5)
