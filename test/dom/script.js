const btn = document.getElementById('button')
const title = document.getElementsByClassName('title')
const list = document.getElementsByTagName('ul')
const listItems = document.querySelectorAll('.list-item')
const link = document.getElementById('link')

link.setAttribute('href', 'https://google.com/')
link.textContent = 'Google'

const raisin = document.createElement('li')
const poire = listItems[1]
raisin.textContent = 'Raisin'
list[0].appendChild(raisin)

const image = document.createElement('img')
image.setAttribute('src', 'https://picsum.photos/200/300')

image.style.marginTop = '20px'

document.body.append(image)
raisin.remove()

const container = document.getElementById('container')
document.body.append(container)
btn.style.marginTop = '20px'

container.innerHTML = '<p>Hello</p>'

function sayHello() {
    alert('hello')
}

btn.addEventListener('click', function(event) {
    console.log(event.target)
})

// const input = document.getElementById('input')

// input.addEventListener('keyup', function() {
//     console.log(input.value)
// })