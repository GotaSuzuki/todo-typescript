import React, { useState } from "react";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { incompleteTodoState } from "../store/incompleteTodoState";

const InputTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] =
    useRecoilState<Todo[]>(incompleteTodoState);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoText === "") return;
    const newTodo = {
      todo: todoText,
      id: uuidv4()
    };
    setIncompleteTodo([...incompleteTodo, newTodo]);
    setTodoText("");
  };

  return (
    <div className="input-area">
      <form onSubmit={handleAdd}>
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodoText(e.target.value)
          }
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default InputTodo;
