import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [value, setValue] = useState(null);
  const handleValue = (name) => {
    setValue(name);
  };
  return (
    <>
      <h1>Chnage Parent from child button {value} </h1>
      <Child handleValue={handleValue} />
    </>
  );
};

export default Parent;
