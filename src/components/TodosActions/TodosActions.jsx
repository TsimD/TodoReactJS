import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import style from "./TodosActions.module.css";
import Button from "../UI/Button";

function TodosActions({ resetTodos, completedTodosDelete, complitedTodos }) {
  return (
    <div className={style.todoAction}>
      <Button onClick={resetTodos} title="Reset todos">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={completedTodosDelete}
        disabled={!complitedTodos}
        title="Clear completed todos"
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
