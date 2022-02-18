let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let thisDay = document.querySelector("#date");
thisDay.innerHTML = `${
  days[now.getDay()]
}, ${now.getHours()}:${now.getMinutes()}`;

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let thisDay = document.querySelector("#date");
thisDay.innerHTML = `${
  days[now.getDay()]
}, ${now.getHours()}:${now.getMinutes()}`;

function showCurrentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector(".currentTemp");
  currentTemp.innerHTML = ` ${temperature}°C`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let currentCity = document.querySelector(".currentCity");
  currentCity.innerHTML = `${searchInput.value}`;
  let apiKey = "31e5b9dd68806e676a842f8101cf3a4e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&apiid=${apiKey}`).then(showCurrentWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function handlePosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = `31e5b9dd68806e676a842f8101cf3a4e`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);
}

navigator.geolocation.getCurrentPosition(handlePosition);
