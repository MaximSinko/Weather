const apiKey = '81d3ce6b183ee0d5f9cff6c9f04d5b2e';
const cityInput = document.querySelector('.city')
const button = document.querySelector('.btn')






function setUI(data) {
    const weatherBox = document.querySelector('.weather');
    weatherBox.innerHTML = `  
        <div class="dataSys">
            <h2 class="cityName">${data.name}</h2>
            <h2 class="country">${data.sys.country}</h2>
        </div>
        <div class="dataTemp">
            <h4 class="temp">Фактична темп. ${Math.round(data.main.temp - 273.15)}</h4>
            <h4 class="tempFeel">Відчувається як ${Math.round(data.main.feels_like - 273.15)}</h4>
        </div>
        <div class="dataWeather">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h4 class="description">${data.weather[0].description}</h4>
        </div>
        <div class="dataWind">
            <h4 class="windDeg" style="transform: rotate(${data.wind.deg}deg)>⭣</h4>
            <h4 class="windSpeed">${data.wind.speed}</h4>
        </div>`;
}

function setBackgroundColor(temp) {
    let image = "";

    if (temp <= 0) {
        image = 'url("img/blue.png")';
    } else if (temp > 0 && temp <= 10) {
        image = 'url("img/green.jpg")';
    } else if (temp > 10 && temp <= 40) {
        image = 'url("img/red.jpg")';
    }

    document.body.style.backgroundImage = image;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";


}




function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log('Temaperature:', data.main.temp - 273.15, '°C');
            setUI(data)
            setBackgroundColor(data.main.temp - 273.15);

        })

}

button.addEventListener('click', () => {
    let city = cityInput.value;
    getWeather(city);
})


// getWeather('Lviv');

