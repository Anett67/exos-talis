// 3. Prochaine date dans une semaine
function addOneWeek(date) {
    const dateObject =  new Date(date)
    dateObject.setDate(dateObject.getDate() + 7)
    console.log(dateObject)
}

addOneWeek('2024-10-28')