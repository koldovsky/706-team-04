(function () {

    const clockContainer = document.querySelector('.clock');

    function updateClock() {
        clockContainer.innerHTML = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);

    const slides = [
        `<div class="testimonials-slider__slide">
            <img src="img/user__photo-1.jpg" alt="First User Photo" class="bottom-user-photo">
            <p class="bottom-user-name">Cole Tiers</p>
            <p class="bottom-user-text">I wanted to see Norway since childhood when I saw a
                stylish house right in the middle of the Norwegian forest in some magazine. I thought then
                that I also want to live in such a house. This dream came true a few months ago on a tour of
                Norway. I am very happy! Thanks, guys!</p>
             <p class="bottom-user-date">October 28, 2018</p> 
        </div>`,
        `<div class="testimonials-slider__slide">
            <img src="img/user__photo-2.png" alt="First User Photo" class="bottom-user-photo">
            <p class="bottom-user-name">Lilland Forester</p>
            <p class="bottom-user-text">We went on this tour with our daughter, she was 5
                years old. I was worried that it would be difficult for her but everything went great. We
                spent nights in good hotels with excellent breakfasts. My daughter always had something to
                eat, and the nature in Norway fascinated her even more than us!</p>
            <p class="bottom-user-date">May 13, 2019</p>
        </div>`,
        `<div class="testimonials-slider__slide">
            <img src="img/user__photo-3.jpg" alt="First User Photo" class="bottom-user-photo">
            <p class="bottom-user-name">Alice Hendricks</p>
            <p class="bottom-user-text">I still can't believe I have seen the Northern Lights
                with my own eyes! That was incredible! When we arrived in Tromsø, it was constantly snowing,
                the weather was bad, and the guide said that we were out of luck, most likely. But on the
                last night, right at midnight, the clouds left, and I saw it! It was magical!</p>
            <p class="bottom-user-date">January 12, 2020</p>
        </div>`
    ];

    let currentSlideIdx = 0;


    function renderSlider() {
        const slideContainer = document.querySelector('.testimonials-slider__slides');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlider();
    }

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlider();
    }

    const prevButton = document.querySelector('.testimonials-slider__bth-prev');
    prevButton.addEventListener('click', prev);


    const nextButton = document.querySelector('.testimonials-slider__bth-next');
    nextButton.addEventListener('click', next);

    renderSlider();

})();