import React from "react";

const Employees = (props) => {
  let { name, id } = props;
  console.log(`props ${props}`);
  return (
    <>
      <h2>{`NAME : ${name}`}</h2>
      <h2>{`ID : ${id}`}</h2>
    </>
  );
};

export default Employees;
