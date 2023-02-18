import { ActionType } from "./amountsType";
import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios";


export type Action=DepostAction|WithdrawAction|BankruptAction

export const depositMoney=(amount:number)=>{
    

interface  FetchCostsRequest{
        type:ActionType.FETCH_TODOS_REQUEST,

};
interface fetchCostsFailure{
        type:ActionType.FETCH_TODOS_FAILURE,
        payload:Object

};
interface fetchCostsSuccess{
        type:ActionType.FETCH_TODOS_SUCCESS,
        payload:Object
};

 interface postCostsFailure{
        type:ActionType.POST_ONE_TODO_FAILURE,
        payload:Object
};
interface postCostsSuccess{
        type:ActionType.POST_ONE_TODO_SUCCESS,
        payload:Object
    }
};
interface deleteCostsFailure{
        type:ActionType.DELETE_ONE_TODO_FAILURE,
        payload:Object
};
interface deleteCostsSuccess{
        type:ActionType.DELETE_ONE_TODO_SUCCESS,
        payload:Object
};
 interface editOneCostFailure{
        type:ActionType.EDIT_ONE_TODO_FAILURE,
        payload:Object
};
interface editOneCostSuccess{
        type:ActionType.EDIT_ONE_TODO_SUCCESS,
        payload:Object
};



export const fetchCosts=()=>{
    return function(dispatch){
        dispatch(fetchCostsRequest());
        axios.get(`http://localhost:4000/todos`)
        .then(res=>{
            dispatch(fetchCostsSuccess(res.data));
        })
        .catch(err=>{
            dispatch(fetchCostsFailure(err.message))
        })
    }
};
export const addOneCost=(payload)=>{
    return function(dispatch){
        axios.post(`http://localhost:4000/todos`,payload)
        .then(res=>{
            axios.get(`http://localhost:4000/todos`)
            .then(res=>{
                dispatch(postCostsSuccess(res.data));
            })  
        })
        .catch(err=>{
            dispatch(postCostsFailure(err.message))
        })
    }
};
export const deleteOneCost=(payload)=>{
    payload.e.stopPropagation();
    return function(dispatch){
        axios.delete(`http://localhost:4000/todos/${payload.id}`)
        .then(res=>{
            axios.get(`http://localhost:4000/todos`)
            .then(res=>{
                dispatch(deleteCostsSuccess(res.data));
            })   
        })
        .catch(err=>{
            dispatch(deleteCostsFailure(err.message))
        })
    }
};

export const putOneCost=(payload)=>{
    return function(dispatch){
        axios.put(`http://localhost:4000/todos/${payload.id}`,payload.formValues)
        .then(res=>{
            axios.get(`http://localhost:4000/todos`)
            .then(res=>{
                dispatch(editOneCostSuccess(res.data));
            })   
        })
        .catch(err=>{
            dispatch(editOneCostFailure(err.message))
        })
    }
};
