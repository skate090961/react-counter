import {combineReducers} from "redux";
import {counterReducer} from "./counterReducer/counterReducer";

export const rootReducer = combineReducers({
    counter: counterReducer
})