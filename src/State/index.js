import {createStore, combineReducers} from "redux";
import {cityReducer} from './CityReducer.js'


const reducers = combineReducers({
    state: cityReducer,
})

const store = createStore(reducers);

export default store;