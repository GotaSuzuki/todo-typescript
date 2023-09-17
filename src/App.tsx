import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import CompleteTodo from "./components/CompleteTodo";
import IncompleteTodo from "./components/IncompleteTodo";
import { Todo } from "./types/todo";

function App() {
  const [incompleteTodo, setIncompleteTodo] = useState<Todo[]>([
    { todo: "aaa", id: "1" },
    { todo: "bbb", id: "2" }
  ]);
  const [ccompleteTodo, setCompleteTodo] = useState<Todo[]>([
    { todo: "ddd", id: "3" }
  ]);
  return (
    <div className="App">
      <InputTodo />
      <IncompleteTodo incompleteTodo={incompleteTodo} />
      <CompleteTodo completeTodo={ccompleteTodo} />
    </div>
  );
}

export default App;
