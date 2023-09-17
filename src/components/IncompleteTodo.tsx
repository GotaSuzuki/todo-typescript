import React from "react";
import { Todo } from "../types/todo";

interface IncompleteTodoProps {
  incompleteTodo: Todo[];
}

const IncompleteTodo: React.FC<IncompleteTodoProps> = ({ incompleteTodo }) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      {incompleteTodo.map((todo) => (
        <ul key={todo.id}>
          <div className="list-row">
            <li>{todo.todo}</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default IncompleteTodo;
