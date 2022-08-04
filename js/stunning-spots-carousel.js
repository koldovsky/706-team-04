const spots__content = document.getElementById('spots__content');
const spotsSlides = document.querySelectorAll('.spots__slide');
const spotsLeftBtn = document.getElementById('spots-left');
const spotsRightBtn = document.getElementById('spots-right');

let spotsActiveSlide = 0;

spotsRightBtn.addEventListener('click', () => {
    spotsActiveSlide++

    if (spotsActiveSlide > spotsSlides.length - 1) {
        spotsActiveSlide = 0
    }
    setBg()
    setspotsActiveSlide()
})

spotsLeftBtn.addEventListener('click', () => {
    spotsActiveSlide--

    if (spotsActiveSlide < 0) {
        spotsActiveSlide = spotsSlides.length - 1
    }
    setBg()
    setspotsActiveSlide()
})

setBg()

function setBg () {
    spots__content.style.backgroundImage = spotsSlides[spotsActiveSlide].style.backgroundImage
}

function setspotsActiveSlide() {
    spotsSlides.forEach((slide) => slide.classList.remove('active'))

    spotsSlides[spotsActiveSlide].classList.add('active')
}
