import { useState } from "react";
import style from "./TodoManager.module.css";
import Todo from "./Todos/Todo";
import { firestore } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const TodoManager = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const todosref = collection(firestore, "todos");

  getDocs(todosref).then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  });

  const addNewTodo = () => {
    if (todoInput.length > 0) {
      addDoc(todosref, {
        todo: todoInput,
      }).then(() => {
        setTodoInput("");
      });
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
