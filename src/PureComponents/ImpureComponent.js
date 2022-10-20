// import React from "react";

// class ImpureComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };

//     // The value of Counter is updated to same value during continues interval

//     setInterval(() => {
//       console.log("render");
//       this.setState({
//         counter: 0,
//       });
//     }, 1000);
//   }

//   render() {
//     return <b>Counter Value: {this.state.counter}</b>;
//   }
// }

// export default ImpureComponent;

// import React, { useState } from "react";
// const ImpureComponent = () => {
//   const [count, setCount] = useState(0);
//   setInterval(() => {
//     console.log("render");
//     setCount(0);
//   }, [1000]);
//   return <div>ImpureComponent</div>;
// };
// export default ImpureComponent;
