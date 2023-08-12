import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoValues(text) {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1 className="todoTitle"> Todo App</h1>
      <TodoForm addTodoValues={addTodoValues} />
      <TodoList
        deleteTodo={deleteTodo}
        toggleTodoComplete={toggleTodoComplete}
        todos={todos}
      />
    </div>
  );
}

export default App;
