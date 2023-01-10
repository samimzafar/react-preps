import React from 'react';
import { useState } from "react";
const Child = ({ changeState }) => {
  const [text, setText] = useState('');
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={changeState(text)}>Change Parent State</button>
    </>
  );
};
const App = () => {
  const [name, setName] = useState('');
  const changeState = (value) => {
    setName(value);
  };
  return (
    <>
      <h1>Parent state -- {name}</h1>
      <Child changeState={changeState} />
    </>

  );
};

export default App;