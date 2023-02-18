import { combineReducers } from "redux";
import {reducer} from "./syncCounts/bankReducer";


const rootReducer=combineReducers({
    counts:reducer
});
export default rootReducer;
