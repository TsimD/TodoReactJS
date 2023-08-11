import style from "./TodoList.module.css";
import Todo from "../Todo/Todo";

function TodoList({ todoValues, deleteTodo }) {
  return (
    <div className={style.todoListContainer}>
      {todoValues.length ? (
        todoValues.map((text, index) => (
          <Todo
            key={index}
            todotext={text}
            index={index}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <h3 className={style.noTodo}>No todos </h3>
      )}
    </div>
  );
}
export default TodoList;
