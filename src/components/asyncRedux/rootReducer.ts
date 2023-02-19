import { combineReducers } from "redux";
import pokemonReducer from "./pokemon/pokemonReducers";

const rootReducer=combineReducers({
    pokemon:pokemonReducer
})
export default rootReducer;