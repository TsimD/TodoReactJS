import { RiTodoFill } from "react-icons/ri";
import style from "./Todo.module.css";

function Todo({ todotext, deleteTodo, index }) {
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={style.iconItem} />
      <div className={style.todoItem}>{todotext}</div>
    </div>
  );
}

export default Todo;
