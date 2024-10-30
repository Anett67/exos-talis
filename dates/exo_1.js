// Calcul de l'âge
function calculateAge(birthDate) {
    const date = new Date(birthDate)
    const currentDate = new Date()

    console.log(Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365)))
}

calculateAge('1990-05-15')
