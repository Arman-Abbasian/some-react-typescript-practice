import { combineReducers } from "redux";
import { reducer } from "./bankReducer";



const rootReducer=combineReducers({
    counts:reducer
});
export default rootReducer;
export type State=ReturnType <typeof rootReducer>