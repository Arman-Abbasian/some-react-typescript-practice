import { useReducer } from "react"

  
  // An interface for our actions
  type CountActionWithPayload= {
    type: 'increment'|'decrement';
    payload: number;
  }
  type CountActionWithoutPayload= {
    type: 'reset';
  }
  
  // An interface for our state
  type CounterState= {
    count: number;
  }
  const initialState={count:0}
  // Our reducer function that uses a switch statement to handle our actions
  const reducer=(state: CounterState, action: CountActionWithPayload|CountActionWithoutPayload)=> {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          count: state.count + action.payload,
        };
      case 'decrement':
        return {
          ...state,
          count: state.count - action.payload,
        };
        case 'reset':
            return {
              ...state,
              count: initialState.count
            };
      default:
        return state;
    }
  }
  
  const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <p>{state.count}</p>
            <button onClick={()=>dispatch({type:'increment',payload:10})}>+</button>
            <button onClick={()=>dispatch({type:'decrement',payload:5})}>-</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
     );
}
 
export default Counter;