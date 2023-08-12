import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import style from "./Todo.module.css";

function Todo({ todotext, deleteTodo, toggleTodoComplete, id, isCompleted }) {
  return (
    <div className={`${style.todo} ${isCompleted ? style.completedTodo : ""}`}>
      <RiTodoFill className={style.todoIcon} />
      <div className={style.todoText}>{todotext}</div>
      <RiDeleteBin2Line
        className={style.deleteIcon}
        onClick={() => deleteTodo(id)}
      />
      <FaCheck
        className={style.checkIcon}
        onClick={() => toggleTodoComplete(id)}
      />
    </div>
  );
}

export default Todo;
