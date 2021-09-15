let mainNav = document.getElementById('js-menu')

let navBarTog = document.getElementById('js-navbar-toggle')

navBarTog.addEventListener('click', () => {
    mainNav.classList.toggle('active')
})