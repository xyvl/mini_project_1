import { combineReducers, createStore } from "redux"
import { count } from "./count/countReducer"
const rootReducer = combineReducers({count})

export const store = createStore(rootReducer)