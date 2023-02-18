import { combineReducers } from "redux";
import { amountReducer } from "./amount/amountReducer";




const rootReducer=combineReducers({
    amount:amountReducer
});
export default rootReducer;
export type State=ReturnType <typeof rootReducer>