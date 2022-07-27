const countDownDate = new Date("Aug 15, 2022 00:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector(".countdown-timer").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-timer").innerHTML = "Booking is closed! Please come back later!";
  }
}, 1000);
