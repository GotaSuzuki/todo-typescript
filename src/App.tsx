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
  const [completeTodo, setCompleteTodo] = useState<Todo[]>([
    { todo: "ddd", id: "3" }
  ]);

  return (
    <div className="App">
      <InputTodo
        incompleteTodo={incompleteTodo}
        setIncompleteTodo={setIncompleteTodo}
      />
      <IncompleteTodo
        incompleteTodo={incompleteTodo}
        setIncompleteTodo={setIncompleteTodo}
        completeTodo={completeTodo}
        setCompleteTodo={setCompleteTodo}
      />
      <CompleteTodo completeTodo={completeTodo} />
    </div>
  );
}

export default App;
