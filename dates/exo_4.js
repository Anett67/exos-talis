function daysUntil(date) {
    const time1 = new Date().getTime()
    const time2 = new Date(date).getTime()
    return Math.floor((time2 - time1) / (1000 * 60 * 60 * 24))
}

console.log(daysUntil("2024-12-25"))