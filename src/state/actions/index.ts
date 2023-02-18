import { ActionType } from "../action-types"

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