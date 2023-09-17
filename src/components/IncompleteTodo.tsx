import React from "react";
import { useRecoilState } from "recoil";
import { incompleteTodoState } from "../store/incompleteTodoState";
import { completeTodoState } from "../store/completeTodoState";
import { Todo } from "../types/todo";

const IncompleteTodo = () => {
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState<Todo[]>(incompleteTodoState);
  const [completeTodo, setCompleteTodo] =
    useRecoilState<Todo[]>(completeTodoState);

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
      <p style={{ textAlign: "center" }}>
        残りの数：<span style={{ color: "red" }}>{incompleteTodo.length}</span>
      </p>
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
