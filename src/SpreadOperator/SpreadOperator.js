import React from "react";
import Employees from "./Employees";
const student = [{ name: "samim", id: "abc" }];
const SpreadOperator = () => {
  // const arr1 = [0, 1, 2, 3, 4];
  // const arr2 = [5, 6, 7];
  // let a, b, rest;
  // [a, b, ...rest] = [10, 20, 30, 40, 50];
  // console.log("rest  -", rest);
  // const arr3 = [...arr1, ...arr2, 8, 9];

  // const arr3 = [10, 20, ...arr2, 50];
  // console.log(arr3);
  // return <CallbackHookAndMemo />;
  // return <LayoutEffect />;
  // return <ContextHook />;
  let first = student[0];
  return (
    <div>
      <h1>SpreadOperator</h1>
      <Employees {...first} />
    </div>
  );
};

export default SpreadOperator;
