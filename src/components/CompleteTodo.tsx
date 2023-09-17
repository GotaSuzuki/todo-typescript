import React from "react";
import { useRecoilState } from "recoil";
import { completeTodoState } from "../store/completeTodoState";
import { incompleteTodoState } from "../store/incompleteTodoState";
import { Todo } from "../types/todo";

const CompleteTodo = () => {
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState<Todo[]>(incompleteTodoState);
  const [completeTodo, setCompleteTodo] =
    useRecoilState<Todo[]>(completeTodoState);

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
      <p style={{ textAlign: "center" }}>
        残りの数：<span style={{ color: "red" }}>{completeTodo.length}</span>
      </p>
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
