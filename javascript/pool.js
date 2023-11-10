const item = document.querySelector('#list')

const button = document.querySelector('#toggler')

const roi = document.querySelector('#liquidity')

const roitoggler = document.querySelector('#liquid')
const roitoggler1 = document.querySelector('#liquid1')
const roitoggler3 = document.querySelector('#liquid3')
const roitoggler2 = document.querySelector('#liquid2')
const roitoggler4 = document.querySelector('#liquid4')

const closeicon =document.querySelector('#close')

button.addEventListener('click', function(){
    item.classList.toggle('hidden')
})    

roitoggler.addEventListener('click',function(){
    roi.classList.toggle('hidden')
})

closeicon.addEventListener('click', function(){
    roi.classList.toggle('hidden')
})   
 roitoggler1.addEventListener('click',function(){
    roi.classList.toggle('hidden')
})
roitoggler2.addEventListener('click',function(){
    roi.classList.toggle('hidden')
})
roitoggler3.addEventListener('click',function(){
    roi.classList.toggle('hidden')
})
roitoggler4.addEventListener('click',function(){
    roi.classList.toggle('hidden')
})