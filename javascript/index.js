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


const pressHarvestAll = document.querySelector('.harvest')

const confirm = document.querySelector('.holdTight')



pressHarvestAll.addEventListener('click' , function () {
    confirm.classList.toggle("hidden")
   
})

const pressRubyAll = document.querySelector('.ruby')

const intact = document.querySelector('.submit')



pressRubyAll.addEventListener('click' , function () {
    intact.classList.toggle("hidden")
   
})
