const pressButton = document.querySelector('.button1')

const item = document.querySelector('.list')



pressButton.addEventListener('click' , function () {
    item.classList.toggle("hidden")
   
})


const cable = document.querySelector('.pick')

const WALLET = document.querySelector('#pack')



cable.addEventListener('click' , function () {
    WALLET.classList.toggle("hidden")
   
})


const navTogglerButton = document.querySelector('.navToggler')

const openNavIcon = document.querySelector('.openNav')

const closeNavIcon = document.querySelector('.closeNav')

const mainNavWidget = document.querySelector('#mainNav')


navTogglerButton.addEventListener('click' , function () {
    openNavIcon.classList.toggle("hidden")
    closeNavIcon.classList.toggle("hidden")
    mainNavWidget.classList.toggle("sm:hidden")
})



