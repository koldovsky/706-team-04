// const spotsSliderContent = document.getElementById('spots__slider-content');
// const spotsSlides = document.querySelectorAll('.spots__slide');
// const spotsLeftBtn = document.getElementById('spots-left-arrow');
// const spotsRightBtn = document.getElementById('spots-right-arrow');

// let spotsActiveSlide = 1;

// spotsRightBtn.addEventListener('click', () => {
//     spotsActiveSlide++;

//     if (spotsActiveSlide > spotsSlides.length - 1) {
//         spotsActiveSlide = 0
//     }
//     setBgToSpotsSliderContent()
//     setspotsActiveSlide()
// })

// spotsLeftBtn.addEventListener('click', () => {
//     spotsActiveSlide--

//     if (spotsActiveSlide < 0) {
//         spotsActiveSlide = spotsSlides.length - 1
//     }
//     setBgToSpotsSliderContent()
//     setspotsActiveSlide()
// })

// setBgToSpotsSliderContent()

// function setBgToSpotsSliderContent () {
//     spotsSliderContent.style.backgroundImage = spotsSlides[spotsActiveSlide].style.backgroundImage
// }

// function setspotsActiveSlide() {
//     spotsSlides.forEach((slide) => slide.classList.remove('active'))

//     spotsSlides[spotsActiveSlide].classList.add('active')
// }
