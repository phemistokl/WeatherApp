import { fetchWeatherInCity } from '../api';

export const ADD_LOCATION = 'ADD_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = city => ({
  type: FETCH_WEATHER_REQUEST
});

export const fetchWeatherSuccess = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  weather
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  error
});
//
// export const fetchWeather = city => dispatch => {
//   dispatch(fetchWeatherRequest());
//
//   return fetchWeatherInCity(city)
//     .then(weather => dispatch(fetchWeatherSuccess(weather)))
//     .catch(error => dispatch(fetchWeatherFailure(error)));
// }
//
// export const addLocation = city => ({
//   type: ADD_LOCATION,
//   id: Date.now(),
//   city
// });
//
// export default removeLocation = id => ({
//   type: REMOVE_LOCATION,
//   id
// });

export const fetchWeatherBySearch = search => dispatch => {
    dispatch(fetchWeatherRequest());

    return fetchWeatherInCity(search)
      .then(weather => dispatch(fetchWeatherSuccess(weather)))
      .catch(error => dispatch(fetchWeatherFailure(error)));
}
