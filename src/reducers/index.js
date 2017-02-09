import { combineReducers } from 'redux';

import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    SAVE_LOCATION,
    REFRESH_SAVED_LOCATION_SUCCESS
} from '../actions';

// const initialState = {
//     name: '',
//     weather: null,
//     isFetching: false,
//     lastSync: null,
//     error: null,
// };
//
// function location(state = initialState, action) {
//     switch (action.type) {
//         case FETCH_WEATHER_REQUEST: {
//             return {
//                 ...state,
//                 isFetching: true,
//             };
//         }
//
//         case FETCH_WEATHER_SUCCESS: {
//             return {
//                 ...state,
//                 isFetching: false,
//                 name: action.name,
//                 weather: action.wether,
//                 lastSync: new Date(),
//             };
//         }
//
//         case FETCH_WEATHER_FAILURE: {
//             return {
//                 ...state,
//                 isFetching: false,
//                 error: action.error,
//             };
//         }
//
//         default {
//             return state;
//         }
//     }
// }
function savedLocations(state = {}, action) {
    switch (action.type) {
        case REFRESH_SAVED_LOCATION_SUCCESS:
        case SAVE_LOCATION: {
            return {
                ...state,
                [action.id]: action.weather,
            };
        }

        default: {
            return state;
        }
    }
}

function currentWeather(state = { weather: null, isFetching: false, error: null }, action) {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case FETCH_WEATHER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                weather: action.weather,
            };
        }

        case FETCH_WEATHER_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        }

        default: {
            return state;
        }
    }
}

// export default function locations(state = {}, action) {
//     switch (action.type) {
//         case FETCH_WEATHER_REQUEST:
//         case FETCH_WEATHER_SUCCESS:
//         case FETCH_WEATHER_FAILURE: {
//             return {
//                 ...state,
//                 [action.id]: location(state[action.id], action),
//             };
//         }
//
//         default: {
//             return state;
//         }
//     }
// }
//
export default combineReducers({ savedLocations, currentWeather });
