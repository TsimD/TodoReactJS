import { useState } from "react";
import style from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodoValues }) {
  const [inputValue, setInputValue] = useState("");

  function submitCh(e) {
    e.preventDefault();
    if (inputValue) {
      addTodoValues(String(inputValue));
      setInputValue("");
    }
  }

  function changeInputValue(text) {
    if (text && text !== " ") {
      setInputValue(text);
    }
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

      <Button className={style.button} type="submit" title="Sibmit">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
