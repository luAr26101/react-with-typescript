import { useReducer } from "react";
import { counterReducer, initialState } from "./reducer";
function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { count, status } = state;

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Status: {status}</h2>

      <div className='btn-container'>
        <button onClick={() => dispatch({ type: "increment" })} className='btn'>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })} className='btn'>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button
          onClick={() => dispatch({ type: "setStatus", payload: "active" })}
          className='btn'
        >
          Set Status to Active
        </button>
        <button
          className='btn'
          onClick={() => dispatch({ type: "setStatus", payload: "inactive" })}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
