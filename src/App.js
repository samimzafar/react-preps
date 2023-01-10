const { useState, useMemo, useCallback } = require("react");

function ChildComponent() {
  console.log("child component rendered");

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
function App() {
  const [num, setNum] = useState(0);
  const handleUpdateNum =useCallback(()=>{
       console.log("rnnnnninnnngggg ");
  },[])

  const getChildComp = useMemo(() => <ChildComponent handleUpdateNum={handleUpdateNum}/>, [handleUpdateNum]);

  return (
    <div>
      <h1>{num}</h1>
      {getChildComp}
      <button onClick={() => setNum(num + 1)}> Addition </button>
    </div>
  );
}
export default App