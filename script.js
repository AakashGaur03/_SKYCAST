let cityConditionIcon = document.getElementById('cityConditionIcon')
let cityName = document.getElementById('cityName')
let cityCondition = document.getElementById('cityCondition')
let cityTemp = document.getElementById('cityTemp')
let cityFeelsLike = document.getElementById('cityFeelsLike')
let cityWindSpeed = document.getElementById('cityWindSpeed')
let cityHumidity = document.getElementById('cityHumidity')
let cityWindDirection = document.getElementById('cityWindDirection')
let cityAtmosphericPressure = document.getElementById('cityAtmosphericPressure')
let cityLatitude = document.getElementById('cityLatitude')
let cityLongitude = document.getElementById('cityLongitude')
let searchbtn = document.getElementById('searchbtn')
let searchInput = document.getElementById('searchInput')
let city = ""


const api = async (city) => {
    if (city === undefined) {
        city = "Boston"
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=df4a82f0766e465cb20153214230410&q=${city}`;


    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        cityConditionIcon.innerHTML = `<img src="${result.current.condition.icon}" class="iconwidth card-img-top" alt="..." >`
        cityName.innerText = ` ${result.location.name.toUpperCase()}`
        cityCondition.innerText = ` ${result.current.condition.text.toUpperCase()}`
        cityTemp.innerText = `CURRENT TEMP : ${result.current.temp_c}`
        cityFeelsLike.innerText = `FEELS LIKE : ${result.current.feelslike_c}`
        cityWindSpeed.innerText = `WIND SPEED : ${result.current.gust_kph}`
        cityHumidity.innerText = `HUMIDITY :  \u00A0  ${result.current.humidity}`
        cityWindDirection.innerText = `WIND DIRECTION : ${result.current.wind_dir}`
        cityAtmosphericPressure.innerText = `AIR PRESSURE : ${result.current.pressure_in}`
        cityLatitude.innerText = `LATITUDE : ${result.location.lat}`
        cityLongitude.innerText = `LONGITUDE : ${result.location.lon}`


        if (result.current.condition.text === "Sunny") {

            document.body.style.backgroundImage = "url('Images/Sunny.jpg')";
        }

        else if (result.current.condition.text === "Clear") {
            document.body.style.backgroundImage = "url('Images/Clear.jpg')";
        }

        else if (result.current.condition.text === "Partly cloudy" || result.current.condition.text === "Cloudy") {
            document.body.style.backgroundImage = "url('Images/Partlycloudy.jpg')";
        }

        else if (result.current.condition.text === "Overcast") {
            document.body.style.backgroundImage = "url('Images/Overcast.avif')";
        }

        else if (result.current.condition.text === "Mist" || result.current.condition.text === "Fog" || result.current.condition.text === "Freezing fog") {
            document.body.style.backgroundImage = "url('Images/Mist.jpg')";
        }

        else if (result.current.condition.text === "Patchy rain possible" || result.current.condition.text === "Patchy light rain" || result.current.condition.text === "Light rain" || result.current.condition.text === "Moderate rain at times" || result.current.condition.text === "Moderate rain" || result.current.condition.text === "Heavy rain at times" || result.current.condition.text === "Heavy rain" || result.current.condition.text === "Light rain shower" || result.current.condition.text === "Moderate or heavy rain shower" || result.current.condition.text === "Torrential rain shower" || result.current.condition.text === "Patchy light drizzle" || result.current.condition.text === "Light drizzle") {
            document.body.style.backgroundImage = "url('Images/rain.jpg')";
        }

        else if (result.current.condition.text === "Patchy snow possible" || result.current.condition.text === "Blowing snow" || result.current.condition.text === "Patchy light snow" || result.current.condition.text === "Light snow" || result.current.condition.text === "Patchy moderate snow" || result.current.condition.text === "Moderate snow" || result.current.condition.text === "Patchy heavy snow" || result.current.condition.text === "Heavy snow" || result.current.condition.text === "Light snow showers" || result.current.condition.text === "Moderate or heavy snow showers") {
            document.body.style.backgroundImage = "url('Images/snow.jpg')";
        }

        else if (result.current.condition.text === "Patchy sleet possible" || result.current.condition.text === "Light sleet" || result.current.condition.text === "Moderate or heavy sleet" || result.current.condition.text === "Light sleet showers" || result.current.condition.text === "Moderate or heavy sleet showers" || result.current.condition.text === "Ice pellets" || result.current.condition.text === "Light showers of ice pellets" || result.current.condition.text === "Moderate or heavy showers of ice pellets") {
            document.body.style.backgroundImage = "url('Images/Icepellets.avif')";
        }

        else if (result.current.condition.text === "Patchy freezing drizzle possible" || result.current.condition.text === "Freezing drizzle" || result.current.condition.text === "Heavy freezing drizzle" || result.current.condition.text === "Light freezing rain" || result.current.condition.text === "Moderate or heavy freezing rain") {
            document.body.style.backgroundImage = "url('Images/freezingdrizzle.jpg')";
        }

        else if (result.current.condition.text === "Blizzard") {
            document.body.style.backgroundImage = "url('Images/Blizzard.jpg')";
        }

        else if (result.current.condition.text === "Thundery outbreaks possible") {
            document.body.style.backgroundImage = "url('Images/thundery.jpg')";
        }

        else if (result.current.condition.text === "Patchy light rain with thunder" || result.current.condition.text === "Moderate or heavy rain with thunder") {
            document.body.style.backgroundImage = "url('Images/rainwiththnder.jpg')";
        }


        else if (result.current.condition.text === "Patchy light snow with thunder" || result.current.condition.text === "Moderate or heavy snow with thunder") {
            document.body.style.backgroundImage = "url('Images/snowwiththunder.jpg')";
        }


    } catch (error) {
        console.error(error);
        console.log(`${city} not found`)
    }


}

searchbtn.addEventListener("click", (e, city) => {
    e.preventDefault();
    city = searchInput.value
    api(city)
});

window.onload = api()