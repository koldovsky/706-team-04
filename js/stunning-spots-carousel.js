(function () {
    const prevButton = document.getElementById("spots-carousel__button-prev"),
      nextButton = document.getElementById("spots-carousel__button-next"),
      spotsSlides = document.querySelectorAll(".spots__carousel-slide");
  
    slideIdx = 0;
  
    const activeSlide = (n) => {
      console.log(n);
      for (let spotsSlide of spotsSlides) {
        spotsSlide.classList.remove("active");
      }
      spotsSlides[n].classList.add("active");
    };
  
    const spotsNextSlide = () => {
      if (slideIdx == spotsSlides.length - 1) {
        slideIdx = 0;
      } else {
        slideIdx++;
        activeSlide(slideIdx);
      }
    };
  
    const spotsPrevSlide = () => {
      if (slideIdx == 0) {
        slideIdx = spotsSlides.length - 1;
      } else {
        slideIdx--;
        activeSlide(slideIdx);
      }
    };
  
    nextButton.addEventListener('click', spotsNextSlide);
    prevButton.addEventListener('click', spotsPrevSlide);
  })();
  