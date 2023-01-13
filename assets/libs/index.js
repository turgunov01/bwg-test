AOS.init()
const notActiveSlideInnerHtml = []

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
    },
    speed: 1500, // More speed required for full page scroll in any device
    keyboard: true,
    transition: 0,
    duration: 0,
    preventInteractionOnTransition: true,
    simulateTouch: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    speed: 1000,
    keyboard: true,
    transition: 1000,
    duration: 1000,
    slidesPerView: 1.5,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        }
    }
});
var swiper22 = new Swiper(".mySwiper22", {
    speed: 1000,
    keyboard: true,
    transition: 1000,
    duration: 1000,
    slidesPerView: 1.5,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        }
    }
});
var swiper3 = new Swiper(".mySwiper3", {
    speed: 1000,
    keyboard: true,
    transition: 1000,
    duration: 1000,
    slidesPerView: 1.5,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        }
    }
});
var swiper33 = new Swiper(".mySwiper33", {
    speed: 1000,
    keyboard: true,
    transition: 1000,
    duration: 1000,
    slidesPerView: 1.5,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        }
    },
});

const cards = document.querySelectorAll('.person__card')

function cardVisible() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('mouseover', function () {
            addOut(this)
        })

        cards[i].addEventListener('mouseout', function () {
            removeOut()
        })
    }
}

cardVisible()

function addOut(elem) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('out')
    }

    elem.classList.remove('out')
}

function removeOut() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('out')
    }
}


function nextSlide() {
    swiper.slideNext()
    console.log('Slide is changed \n')
}

const removeActions = () => {
    if (navigator.userAgent === 'Safari') {
        console.log('It is ' + navigator.userAgent)
    } else {
        console.log('It is ' + navigator.userAgent)
    }
}

removeActions()




console.log('Function did work!')