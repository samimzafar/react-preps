import React, { useEffect, useState } from "react";
import { CallbackHookAndMemo, ContextHook, LayoutEffect } from "./Hooks";
import ReducerHook from "./Hooks/useReducer/ReducerHook";
import SpreadOperator from "./SpreadOperator/SpreadOperator";
import ImpureComponent from "./PureComponents/ImpureComponent";
import ForwardRef from "./Refs/Parent";
import Parent from "./ParentChild/Parent";
const App = () => {
  // const arr = [1, 2, 3];
  // const [result, setResult] = useState([]);
  // const handleResponse = async () => {
  // arr.map((value, index) => {
  //   let URL = `https://jsonplaceholder.typicode.com/todos/${value}`;
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let { title } = data;
  //       setResult((prevValues) => [...prevValues, title]);
  //     })
  //     .catch((err) => console.log(`ERR ${err}`));
  // });
  // for (var a = 1; a <= 3; a++) {
  //   let URL = `https://jsonplaceholder.typicode.com/todos/${a}`;
  // fetch(URL)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     let { title } = data;
  //     setResult((prevValues) => [...prevValues, title]);
  //   })
  //   .catch((err) => console.log(`ERR ${err}`));
  //     const response = await fetch(URL);
  //     const data = response.json();
  //     data.then((res) => console.log(res));
  //   }
  // };

  // console.log(["lahore", ...data]);
  // return <CallbackHookAndMemo />;
  // return <LayoutEffect />;
  // return <ContextHook />;
  // return <SpreadOperator />;
  // return <ReducerHook />;
  // return <ImpureComponent />;
  // return <ForwardRef />;

  // var record = {
  //   name: "sami",
  //   city: "us",
  //   sal: 50,
  //   job: "IT",
  // };

  // var bio = {
  //   id: 1,
  //   ...record,
  //   age: 26,
  // };

  // var arr = [1, 2, 3];
  // // console.log(` bios ${JSON.stringify(bio)}`);
  // return arr.map((it) => <p>{it}</p>);

  //   return (
  //     <>
  //       <button onClick={handleResponse}>Click</button>
  //       {result
  //         ? result.map((value) => {
  //             return (
  //               <>
  //                 <h1>{value}</h1>
  //                 <hr />
  //                 <br />
  //               </>
  //             );
  //           })
  //         : null}
  //     </>
  //   );
  // };

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I have rendered {count} times!</h1>;
};
export default App;
