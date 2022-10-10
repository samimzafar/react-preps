import React from "react";
import { CallbackHookAndMemo, ContextHook, LayoutEffect } from "./Hooks";
import ReducerHook from "./Hooks/useReducer/ReducerHook";
import SpreadOperator from "./SpreadOperator/SpreadOperator";

const App = () => {
  // return <CallbackHookAndMemo />;
  // return <LayoutEffect />;
  // return <ContextHook />;
  // return <SpreadOperator />;
  return <ReducerHook />;
};

export default App;
