import React, { forwardRef } from "react";
import { useState } from "react";

const Child = (props, ref) => {
  const [first, setfirst] = useState(null);
  return (
    <>
      <input type="text" ref={ref} onChange={(e) => setfirst(e.target.value)} />
      <button onClick={() => props.updateInput(first)}>Update input box</button>
    </>
  );
};

export default forwardRef(Child);
