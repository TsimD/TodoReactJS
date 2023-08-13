import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodosActions from "./components/TodosActions/TodosActions";

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

  function resetTodos() {
    setTodos([]);
  }

  function completedTodosDelete() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const complitedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1 className="todoTitle"> Todo App</h1>
      <TodoForm addTodoValues={addTodoValues} />
      {todos.length ? (
        <TodosActions
          resetTodos={resetTodos}
          completedTodosDelete={completedTodosDelete}
          complitedTodos={!!complitedTodos}
        />
      ) : null}

      <TodoList
        deleteTodo={deleteTodo}
        toggleTodoComplete={toggleTodoComplete}
        todos={todos}
      />
      {complitedTodos ? (
        <h3 className="todoTitle">
          {`You have completed ${complitedTodos} ${
            complitedTodos > 1 ? "todos" : "todo"
          }`}
        </h3>
      ) : null}
    </div>
  );
}

export default App;
