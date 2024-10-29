const images = document.querySelectorAll('.thumbnail')
const mainImage = document.getElementById('mainImage')
images.forEach(image => {
    image.addEventListener('click', function (event) {
        mainImage.setAttribute('src', event.target.getAttribute('src'))
    })
})