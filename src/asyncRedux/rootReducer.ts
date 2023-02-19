import { combineReducers } from "redux";
import todoReducer from "./todo/todoReducers";
import pokemonReducer from "./todo/todoReducers";

const rootReducer=combineReducers({
    todo:todoReducer
})
export default rootReducer;