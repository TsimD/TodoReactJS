import style from "./TodoList.module.css";
import Todo from "../Todo/Todo";

function TodoList({ todos, deleteTodo, toggleTodoComplete }) {
  return (
    <div className={style.todoListContainer}>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todotext={todo.text}
            id={todo.id}
            deleteTodo={deleteTodo}
            isCompleted={todo.isCompleted}
            toggleTodoComplete={toggleTodoComplete}
          />
        ))
      ) : (
        <h3 className={style.noTodo}>No todos </h3>
      )}
    </div>
  );
}
export default TodoList;
