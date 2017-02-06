import { countries } from 'country-data';

const API_KEY = 'd2341686276744b6ff8c8d867076041b';
const API_URL = 'http://api.openweathermap.org/data/2.5';

const request = url => {
    return fetch(url)
        .then(response => {
          if (response.status >= 400) {
            return Promise.reject('Invalid response');
          }

          return response.json();
        })
        .then(json => {
          if (parseInt(json.cod) !== 200) {
            return Promise.reject('Invalid response');
          }

          return json;
        });
}

const formatWeatherinCity = data => ({
    id: data.id,
    city: data.name,
    country: countries[data.sys.country].name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    weatherType: data.weather[0].id,
    weatherName: data.weather[0].main,
    weatherDescription: data.weather[0].description,
});

export const fetchWeatherInCity = city => {
    return request(`${API_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(formatWeatherinCity);
}
