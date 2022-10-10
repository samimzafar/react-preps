import { useCallback, useState } from "react";
import TodosMemo from "./TodosMemo";

const CallbackHookAndMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };
  ///-----you can ARGS to useCallback hook fn while cant possible in useMemo hook---////
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "new Entry"]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, "new Entry"]);
  // };

  return (
    <>
      <TodosMemo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default CallbackHookAndMemo;
