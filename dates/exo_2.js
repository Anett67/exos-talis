// 2. Vérification de la validité d'une date
function isValidDate(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = addZero(date.getMonth() + 1)
    const day = addZero(date.getDate())

    console.log(`${year}-${month}-${day}` === dateString)
}

function addZero(number) {
    return number < 10 ? `0${number}` : number
}

isValidDate('2023-02-29')