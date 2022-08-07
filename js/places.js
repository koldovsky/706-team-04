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

(function () {
const timeEl = document.getElementById('weather__time');
const dateEl = document.getElementById('weather__date');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// api.openweathermap.org/data/2.5/weather?lat=59&lon=10&appid=8fbd07319fd7ee47a25f9adba2146de4&units=metric
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

let weather = {
  apiKey: "8fbd07319fd7ee47a25f9adba2146de4",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, feels_like, temp_min, temp_max, humidity, pressure } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;
    document.querySelector(".weather__city").innerText = "Weather in " + name + ", " + country;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".weather__description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".feels_like").innerText = "Feels like: " + feels_like + "°C";
    document.querySelector(".temp_min").innerText = "Min temperature: " + temp_min + "°C";
    document.querySelector(".temp_max").innerText = "Max temperature: " + temp_max + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".pressure").innerText = "Pressure: " + pressure + " hPa";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
  //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Oslo");
})();