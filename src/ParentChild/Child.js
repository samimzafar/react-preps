import React, { useState } from "react";

const Child = ({ handleValue }) => {
  const [name, setName] = useState(null);
  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => handleValue(name)}>Change</button>
    </>
  );
};

export default Child;
