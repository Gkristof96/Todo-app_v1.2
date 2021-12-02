import React, { Fragment, useState, useEffect } from "react";
import style from "./TodoPage.module.css";
import { firestore } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import Todo from "../components/Todos/Todo";
import ErrorMessage from "../components/UI/ErrorMessage";
import { auth } from "../firebase";

const TodoPage = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const todosref = collection(firestore, `users/${auth.currentUser.uid}/todos`);

  useEffect(() => {
    onSnapshot(todosref, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    // eslint-disable-next-line
  }, []);

  const addNewTodo = () => {
    if (todoInput.length > 0) {
      setErrorMessage("");
      addDoc(todosref, {
        todo: todoInput,
        checked: false,
        createdAt: serverTimestamp(),
      }).then(() => {
        setTodoInput("");
      });
    } else {
      setErrorMessage("Please fill the todo field!");
    }
  };

  return (
    <Fragment>
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
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {todos.length > 0 && <div className={style["horizontal-line"]}></div>}
        <div className={style["todos-list"]}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.todo}
              checked={todo.checked}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default TodoPage;
