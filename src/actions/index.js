import { fetchWeatherByCity, fetchWeatherById } from '../api';

export const SAVE_LOCATION = 'SAVE_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const REFRESH_SAVED_LOCATION_SUCCESS = 'REFRESH_SAVED_LOCATION_SUCCESS';

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

export const refreshSavedLocationSuccess = (weather, id) => ({
  type: REFRESH_SAVED_LOCATION_SUCCESS,
  weather,
  id
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
export const saveLocation = () => (dispatch, getState) => {
    const weather = getState().currentWeather.weather;
    dispatch({
      type: SAVE_LOCATION,
      id: weather.id,
      weather
    });
};
//
// export default removeLocation = id => ({
//   type: REMOVE_LOCATION,
//   id
// });

export const refreshSavedLocation = id => dispatch => {
    return fetchWeatherById(id)
      .then(weather => dispatch(refreshSavedLocationSuccess(weather, id)));
}

export const fetchWeatherBySearch = search => dispatch => {
    dispatch(fetchWeatherRequest());

    return fetchWeatherByCity(search)
      .then(weather => dispatch(fetchWeatherSuccess(weather)))
      .catch(error => dispatch(fetchWeatherFailure(error)));
}
