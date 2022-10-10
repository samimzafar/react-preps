import React, { useReducer } from "react";
const initialState = 0;
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const reducer = (state, action) => {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
const ReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter value - {count}</h1>
      <button onClick={() => dispatch(INCREMENT)}>Increment</button>
      <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
      <button onClick={() => dispatch(RESET)}>Reset</button>
    </div>
  );
};

export default ReducerHook;
