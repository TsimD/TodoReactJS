import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todoValues, setTodoValues] = useState([]);

  function addTodoValues(text) {
    setTodoValues([...todoValues, text]);
  }

  function deleteTodo(index) {
    setTodoValues(todoValues.filter((todo, i) => i !== index));
  }

  return (
    <div className="App">
      <h1 className="todoTitle"> Todo App</h1>
      <TodoForm addTodoValues={addTodoValues} />
      <TodoList deleteTodo={deleteTodo} todoValues={todoValues} />
    </div>
  );
}

export default App;
