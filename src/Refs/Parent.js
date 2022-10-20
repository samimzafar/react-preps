import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  let inputRef = useRef(null);
  function updateInput() {
    inputRef.current.value = "1000";
  }
  return (
    <>
      <h1>Forward Ref</h1>
      <Child ref={inputRef} />
      <button onClick={updateInput}>Update input box</button>
    </>
  );
};

export default Parent;
