var a = document.getElementById("city");
var b = document.getElementById("temperature");
var c = document.getElementById("climate");
var d = document.getElementById("humidity");
var image = document.getElementById("image");
var apikey = "365124a20bf79015ed73a9bb0f520a09";
var unsplashKey = "QMUyoq4OrbO6jX9YoAqdfzgk__rHOduczGPZdoQ7bdc";
async function fetchRandomImage(query) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${unsplashKey}&query=${query}`
    );
    const data = await response.json();
    return `url('${data.urls.full}')`;
  } catch (error) {
    console.error("Error fetching random image:", error);
    return "url('https://i.pinimg.com/1200x/de/c0/e1/dec0e1d86817d93e3a89b4f25cb15ab7.jpg')";
  }
}

async function getLocation() {
  var city = document.getElementById("location-input").value;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    if (!resp.ok) {
      alert("City not found. Please enter a valid city.");
      return;
    }
    var data = await resp.json();

    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    a.innerHTML = data.name;
    b.innerHTML = Math.floor(data.main.temp) + "<sup>o</sup> C";
    c.innerHTML = data.weather[0].description;
    d.innerHTML = "Humidity: " + data.main.humidity + "%";

    const weatherDescription = data.weather[0].description;
    const backgroundImage = await fetchRandomImage(weatherDescription);
    document.body.style.backgroundImage = backgroundImage;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
