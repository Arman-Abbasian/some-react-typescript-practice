import { Action } from "./index";
import {DELETE_ONE_COST_FAILURE, DELETE_ONE_COST_SUCCESS, EDIT_ONE_COST_FAILURE, EDIT_ONE_COST_SUCCESS, FETCH_COSTS_FAILURE, FETCH_COSTS_REQUEST, FETCH_COSTS_SUCCESS, FILTER_COSTS, POST_ONE_COST_FAILURE, POST_ONE_COST_SUCCESS } from "./costsType";

type InitialState={
    counts:
}

const initialState={
    counts:[],
    error:"",
    laoding:false,
}
export const countReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_COSTS_REQUEST:{
            return {costs:[],error:"",laoding:true}
        };
        case FETCH_COSTS_SUCCESS:{
            const filteredItems= filterValue(action.payload,state.filters);
            console.log(action.payload,state.filters)
            return {costs:filteredItems,error:"",laoding:false}
        };
        case FETCH_COSTS_FAILURE:{
            return {costs:[],error:action.payload,laoding:false}
        }
        case POST_ONE_COST_SUCCESS:{
            const filteredItems=filterValue(action.payload);
            return {costs:filteredItems,error:"",laoding:false}
        };
        case POST_ONE_COST_FAILURE:{
            return {costs:[],error:action.payload,laoding:false}
        };

        //
        case DELETE_ONE_COST_SUCCESS:{
            const filteredItems=filterValue(action.payload,state.filters);
            return {costs:filteredItems,error:"",laoding:false}
        };
        case DELETE_ONE_COST_FAILURE:{
            return {costs:[],error:action.payload,laoding:false,filters:state.filters}
        };
        case EDIT_ONE_COST_SUCCESS:{
            const filteredItems=filterValue(action.payload);
            return {costs:filteredItems,error:"",laoding:false}
        };
        case EDIT_ONE_COST_FAILURE:{
            return {costs:[],error:action.payload,laoding:false}
        };
        case FILTER_COSTS:{
            return {costs:state.costs,error:state.error,laoding:state.laoding,filters:action.payload}
        }
        
            
        default:
            return state;
    }
}
export default costsReducer;
