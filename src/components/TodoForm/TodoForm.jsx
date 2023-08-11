import { useState } from "react";
import style from "./TodoForm.module.css";

function TodoForm({ addTodoValues }) {
  const [inputValue, setInputValue] = useState("");

  function submitCh(e) {
    e.preventDefault();
    if (inputValue) {
      addTodoValues(String(inputValue));
      setInputValue("");
    }
  }

  function changeInputValue(e) {
    setInputValue(e);
  }

  return (
    <form onSubmit={(e) => submitCh(e)}>
      <input
        onChange={(e) => {
          changeInputValue(e.target.value);
        }}
        value={inputValue}
        className={style.inputForm}
        placeholder="Enter new todo"
      />
      <button className={style.buttonForm} type="submit">
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
