const container = document.querySelector('.container')
const list = document.querySelector('.list-items')

 
list.addEventListener('click', function(event) {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log('list clicked')
})
container.addEventListener('click', function(event) {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log('container clicked')
})
