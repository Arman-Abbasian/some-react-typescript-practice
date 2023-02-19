import {Dispatch} from "redux";
import axios from "axios";
import { TodoDispatchTypes, TODOS_FAIL, TODOS_LOADING, TODOS_SUCCESS } from "./todoTypes";
import type {} from 'redux-thunk/extend-redux';

export const GetTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
  try {
    dispatch({
      type: TODOS_LOADING
    })
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    console.log(res.data)
    dispatch({
      type: TODOS_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: TODOS_FAIL
    })
  }
};