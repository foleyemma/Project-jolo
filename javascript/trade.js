const navTogglerButton = document.querySelector('#navToggler')

const openNavIcon = document.querySelector('#openNav')

const closeNavIcon = document.querySelector("#closeNav")

const mainNavWidget = document.querySelector("#mainNav")

navTogglerButton.addEventListener('click', toggleMenu)


function toggleMenu() {
    openNavIcon.classList.toggle('hidden')
    closeNavIcon.classList.toggle('hidden')
    mainNavWidget.classList.toggle('hidden')
}


const scrollToTopButton = document.querySelector('#scrollToTop')


scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: "0", behavior: 'smooth'
    })
})

const openMenunav = document.querySelector('#chainToggle')

const ToggleButton = document.querySelector('#chainToggle1')

ToggleButton.addEventListener('click', function () {
    openMenu.classList.toggle ('hidden')
})

