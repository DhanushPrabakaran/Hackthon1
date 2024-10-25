var a = document.getElementById("city");
var b = document.getElementById("temperature");
var c = document.getElementById("climate");
var d = document.getElementById("humidity");
var image = document.getElementById("image");
var apikey = "365124a20bf79015ed73a9bb0f520a09";

async function getLocation() {
  var city = document.getElementById("location-input").value;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );
    if (!resp.ok) {
      alert("City not found. Please enter a valid city.");
      return;
    }
    var data = await resp.json();

    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    a.innerHTML = data.name;
    b.innerHTML = Math.floor(data.main.temp - 273) + "<sup>o</sup> C";
    c.innerHTML = data.weather[0].description;
    d.innerHTML = "Humidity: " + data.main.humidity + "%";
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
}
