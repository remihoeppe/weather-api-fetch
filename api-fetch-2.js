
const weatherCity = (city) => {
  const weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=15ed9dae5fd26c275b50f29358c2c018&units=metric`)
  console.log('city has mad a request', city);
  weather 
      .then(response => response.json())
      .then(data => {
        console.log('city has a response', city);
        let weatherData = data;
        const weatherElements = document.getElementById(city);

        weatherElement(weatherElements, `Temperature (C): ${weatherData.main.temp}`);
        weatherElement(weatherElements, `It feels like (C): ${weatherData.main.feels_like}`);
        weatherElement(weatherElements, `Max Temperature (C): ${weatherData.main.temp_max}`);
        weatherElement(weatherElements, `Min Temperature (C): ${weatherData.main.temp_min}`);
        weatherElement(weatherElements, `Humidity (%): ${weatherData.main.humidity}`);

      })
    };

const weatherElement = (elements, string) => {
  const weatherTemp = document.createElement('p')
  weatherTemp.innerText = string;
  elements.append(weatherTemp);
}
   
const cityWeather = (cities) => {
    for (let i = 0; i < cities.length; i++) {
      weatherCity(cities[i]);
    }
  }

cityWeather (['Barcelona', 'London', 'Austin', 'Sydney', 'San Fransisco']);

