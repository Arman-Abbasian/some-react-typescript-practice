import { TodoDispatchTypes, TodosType, TODOS_FAIL, TODOS_LOADING, TODOS_SUCCESS } from "./todoTypes";

  
  interface DefaultStateI {
    loading: boolean,
    todo?: TodosType
  }
  
  const defaultState: DefaultStateI = {
    loading: false
  };
  
  const todoReducer = (state: DefaultStateI = defaultState, action: TodoDispatchTypes) : DefaultStateI => {
    switch (action.type) {
      case TODOS_FAIL:
        return {
          loading: false,
        }
      case TODOS_LOADING:
        return {
          loading: true,
        }
      case TODOS_SUCCESS:
        return {
          loading: false,
          todo: action.payload
        }
      default:
        return state
    }
  };
  
  
  export default todoReducer;