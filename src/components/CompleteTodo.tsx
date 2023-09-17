import React from "react";
import { Todo } from "../types/todo";

interface CompleteTodoProps {
  incompleteTodo: Todo[];
  setIncompleteTodo: (todo: Todo[]) => void;
  completeTodo: Todo[];
  setCompleteTodo: (todo: Todo[]) => void;
}

const CompleteTodo: React.FC<CompleteTodoProps> = ({
  incompleteTodo,
  setIncompleteTodo,
  completeTodo,
  setCompleteTodo
}) => {
  const handleBack = (index: number) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);
    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setCompleteTodo(newCompleteTodo);
    setIncompleteTodo(newIncompleteTodo);
  };

  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      {completeTodo.map((todo, index) => (
        <ul key={todo.id}>
          <div className="list-row">
            <li>{todo.todo}</li>
            <button onClick={() => handleBack(index)}>戻す</button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default CompleteTodo;
