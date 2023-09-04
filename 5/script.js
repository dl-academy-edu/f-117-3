// отделили рабочие зоны
(function() {
    const contextMenu = document.querySelector(".contextmenu_js")
    if (!contextMenu) return;
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        contextMenu.style.top = `${e.clientY}px`
        contextMenu.style.left = `${e.clientX}px`

        window.addEventListener('click', clickHandler)
        window.addEventListener('keydown', escHandler)
        contextMenu.classList.toggle('contextmenu_hidden')
    })

    function clickHandler(e) {
        if (!contextMenu.contains(e.target)) {
            closeMenu();
        }
    }
    function escHandler(e) {
        if ( e.keyCode === 27) {
            closeMenu();
        }
    }
}
)();

(function() {
    const buttonToTop = document.querySelector(".button-to-top")
    if (!buttonToTop) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1000) {
            buttonToTop.classList.remove('button-to-top_hidden')
        } else {
            buttonToTop.classList.add('button-to-top_hidden')
        }
    })
    buttonToTop.addEventListener('click', () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    })
})()