const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.header__nav__link');

// navbar responsive
(function () {
    let button = $('#header__icon')
    let sidebarOpened = false;

    button.on('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        sidebarOpened = true;
        $('body').toggleClass('with--sidebar')
    })

    document.body.addEventListener('click', function () {
        if (sidebarOpened) {
            document.body.classList.remove('with--sidebar')
            header.style.opacity = "100%";
            links.forEach(link => {
                link.style.color = "white";
            });
        }
    })
})()

// navbar
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        header.style.background = "rgb(47, 37, 75)";
        header.style.opacity = "80%";
        header.style.transitionDuration = "1s";
        // header.style.padding = "10px";
        links.forEach(link => {
            link.style.color = "white";
            link.addEventListener("mouseover", function (evt) {
                evt.target.style.color = "white"
                setTimeout(function () {
                    evt.target.style.color = "blue";
                },500);
            }, false);
            link.addEventListener("mouseout", function (evt) {
                evt.target.style.color = "white"
                setTimeout(function () {
                    evt.target.style.color = "white";
                },500);
            }, false);
        })
    } else {
        header.style.background = "white";
        header.style.transitionDuration = "1s";
        // header.style.padding = "30px";
        header.style.opacity = "100%";
        links.forEach(link => {
            link.style.color = "black";
            link.addEventListener("mouseover", function (evt) {
                evt.target.style.color = "black"
                setTimeout(function () {
                    evt.target.style.color = "blue";
                },500);
            }, false);
            link.addEventListener("mouseout", function (evt) {
                evt.target.style.color = "black"
                setTimeout(function () {
                    evt.target.style.color = "black";
                },500);
            }, false);
        })
    }
}



// bar de progression competences
const progressBarCompetence = () => {
    let progressAll = document.querySelectorAll('.progressBar');

    progressAll.forEach((progress) => {
            let pourcent = parseInt(progress.getAttribute('data-progress').replace('%', ''));
            let valueStop = parseInt(progress.getAttribute('data-value'));
            let timer = setInterval(() => {
            pourcent += 1;
            progress.setAttribute('data-progress', pourcent + '%');
            progress.style.setProperty('width', pourcent + '%');
            // console.log(pourcent);
            if (pourcent === valueStop) {
                clearInterval(timer);
            }
        }, 20)
    })
}

progressBarCompetence();

// Modale page certificats
let modal = null
const focussableSelector = "button, a, input, textarea"
let focusables = []
let previouslyFocusedElement = null

const openModal = function (e) {
    e.preventDefault()
    modal = document.querySelector(e.target.getAttribute('href'))
    focusables = Array.from(modal.querySelectorAll(focussableSelector))
    previouslyFocusedElement = document.querySelector(':focus')
    focusables[0].focus()
    modal.style.display = null
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

const closeModal = function (e) {
    if (modal === null) return
    if (previouslyFocusedElement !== null) previouslyFocusedElement.focus()
    e.preventDefault()
    // window.setTimeout(function () {
    //     modal.style.display = "none"
    //     modal = null
    // }, 500)
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    const hideModal = function () {
        modal.style.display = "none"
        modal.removeEventListener('animationend', hideModal)
        modal = null
    }
    modal.addEventListener('animationend', hideModal)
}

const stopPropagation = function (e) {
    e.stopPropagation();
}

const focusInModal = function (e) {
    e.preventDefault()
    let index = focusables.findIndex(f =>  f === modal.querySelector(':focus'))
    if (e.shiftKey === true) {
        index --
    } else {
        index ++
    }
    if (index >= focusables.length) {
        index = 0
    }
    if (index < 0) {
        index.focusables.length -1
    }
    focusables[index].focus()
}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
    
})

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }

    if (e.key === "Tab" && modal !== null) {
        focusInModal(e)
    }
})

// Animation au scroll apparition des éléments
let logo = document.getElementById('logo-contact');
let alert = document.getElementById('alert');

if (alert) {
    logo.style.top = '200px';
}
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry, progressBars) {
    if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
      // html.classList.add('progress-bar__html')
      // css.classList.add('progress-bar__css')
      // js.classList.add('progress-bar__js')
      // php.classList.add('progress-bar__php')
        observer.unobserve(entry.target)
    } else {
      // console.log(entry.target.classList.value)
      // entry.target.classList.add('reveal')
      // html.classList.remove('progress-bar__html')
      // css.classList.remove('progress-bar__css')
      // js.classList.remove('progress-bar__js')
      // php.classList.remove('progress-bar__php')
      // observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function(r) {
    observer.observe(r)
})



