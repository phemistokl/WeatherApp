import { countries } from 'country-data';

const API_KEY = 'd2341686276744b6ff8c8d867076041b';
const API_URL = 'https://api.openweathermap.org/data/2.5';

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

const formatWeather = data => ({
    id: data.id,
    city: data.name,
    imageType: data.weather[0].icon,
    country: countries[data.sys.country].name,
    temperature: Math.round(data.main.temp),
    humidity: data.main.humidity,
    weatherType: data.weather[0].id,
    weatherName: data.weather[0].main,
    weatherDescription: data.weather[0].description,
});

export const fetchWeatherByCity = city => {
    return request(`${API_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(formatWeather);
}

export const fetchWeatherById = id => {
    return request(`${API_URL}/weather?q=${id}&units=metric&appid=${API_KEY}`)
        .then(formatWeather);
}
