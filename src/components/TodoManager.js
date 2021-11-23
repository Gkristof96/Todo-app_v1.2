import { useState } from "react";
import style from "./TodoManager.module.css";
import Todo from "./Todos/Todo";

const TodoManager = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addNewTodo = () => {
    if (todoInput.length > 0) {
      setTodos([
        ...todos,
        { title: todoInput, checked: false, id: Date.now() },
      ]);
      setTodoInput("");
    }
  };
  return (
    <div className={style.card}>
      <h1 className={style.title}>Todos</h1>
      <div className={style.input}>
        <input
          type='text'
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
          placeholder='Type todo...'
        />
        <button onClick={() => addNewTodo()}>Add</button>
      </div>
      {todos.length > 0 && <div className={style["horizontal-line"]}></div>}
      <div className={style["todos-list"]}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isTodoChecked={todo.checked}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoManager;
