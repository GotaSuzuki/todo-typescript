import React from "react";
import { Todo } from "../types/todo";

interface IncompleteTodoProps {
  incompleteTodo: Todo[];
  setIncompleteTodo: (todo: Todo[]) => void;
  completeTodo: Todo[];
  setCompleteTodo: (todo: Todo[]) => void;
}

const IncompleteTodo: React.FC<IncompleteTodoProps> = ({
  incompleteTodo,
  setIncompleteTodo,
  completeTodo,
  setCompleteTodo
}) => {
  const handleComplete = (index: number) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);
    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };

  const handleDelete = (index: number) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);
    setIncompleteTodo(newIncompleteTodo);
  };

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      {incompleteTodo.map((todo, index) => (
        <ul key={todo.id}>
          <div className="list-row">
            <li>{todo.todo}</li>
            <button onClick={() => handleComplete(index)}>完了</button>
            <button onClick={() => handleDelete(index)}>削除</button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default IncompleteTodo;
