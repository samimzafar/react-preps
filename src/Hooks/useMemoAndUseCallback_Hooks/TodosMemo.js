import { memo } from "react";
const TodosMemo = ({ todos, addTodo }) => {
  console.log("Child Todo");
  return (
    <>
      <h2>My Todos</h2>
      {todos?.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};
///-----memo is imported and use to memorize and its HOC component function---////
export default memo(TodosMemo);
