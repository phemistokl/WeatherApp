import { combineReducers } from 'redux';

import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE
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

export default function displayedWeather(state = { weather: null, isFetching: false, error: null }, action) {
    console.log(state, action);
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
                weather: action.wether,
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
// export default combineReducers({ location, locations });
