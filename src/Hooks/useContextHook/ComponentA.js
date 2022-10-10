import React from "react";
import { UserContext } from "./index";
const ComponentA = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return <div>UserContext -- {user}</div>;
      }}
    </UserContext.Consumer>
  );
};

export default ComponentA;
