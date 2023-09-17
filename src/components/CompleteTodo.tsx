import React from "react";
import { Todo } from "../types/todo";

interface CompleteTodoProps {
  completeTodo: Todo[];
}

const CompleteTodo: React.FC<CompleteTodoProps> = ({ completeTodo }) => {
  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      {completeTodo.map((todo) => (
        <ul key={todo.id}>
          <div className="list-row">
            <li>{todo.todo}</li>
            <button>戻す</button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default CompleteTodo;
