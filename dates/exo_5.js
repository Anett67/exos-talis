
// 5. Formatage personnalisé d'une date
function formatCustomDate(date) {
    const dateObject = new Date(date)
    console.log(dateObject.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }))
}

formatCustomDate('2024-10-12')