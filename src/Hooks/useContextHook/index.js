import React from "react";
import ComponentA from "./ComponentA";
export const UserContext = React.createContext();
const index = () => {
  return (
    <>
      <UserContext.Provider value={"Context API "}>
        <ComponentA />
      </UserContext.Provider>
    </>
  );
};

export default index;
