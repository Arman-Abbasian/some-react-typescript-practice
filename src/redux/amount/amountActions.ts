import { ActionType } from "./amountsType";
import { Dispatch } from "@reduxjs/toolkit"


interface DepostAction{
    type:ActionType.DEPOSIT,
    payload:number
}
interface WithdrawAction{
    type:ActionType.WITHDRAW,
    payload:number
}
interface BankruptAction{
    type:ActionType.BANKRUPT,
}
export type Action=DepostAction|WithdrawAction|BankruptAction

export const depositMoney=(amount:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount
        })
    }
}
export const withdrawMoney=(amount:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}
export const bankrupt=()=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.BANKRUPT,
        })
    }
}