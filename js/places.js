(function () {
const countDownDate = new Date("Aug 15, 2022 00:00:00").getTime();
const intervalID = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector(".countdown-timer").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";
  if (distance < 0) {
    clearInterval(intervalID);
    document.querySelector(".countdown-timer").innerHTML = "Booking is closed! Please come back later!";
  }
}, 1000);
})();

(function () {
const tabs = document.querySelector(".places__tabs");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".places__tab-content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}
})();