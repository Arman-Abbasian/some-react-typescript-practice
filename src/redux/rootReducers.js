import { combineReducers } from "redux";
import reducer from "./syncCounts/bankReducer.ts";


const rootReducer=combineReducers({
    counts:reducer
});
export default rootReducer;
