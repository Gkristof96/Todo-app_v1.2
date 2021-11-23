import { ImCheckboxChecked, ImCheckboxUnchecked, ImBin } from "react-icons/im";
import style from "./Todo.module.css";

const Todo = ({ title, isTodoChecked, id, todos, setTodos }) => {
  const handleCheckTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };
  const removeTodo = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <div className={style.todo}>
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <h3 className={style.subheader}>{id}</h3>
      </div>
      <div className={style.btns}>
        {isTodoChecked && (
          <ImBin className={style["action-btn"]} onClick={() => removeTodo()} />
        )}
        {isTodoChecked ? (
          <ImCheckboxChecked
            className={style["action-btn"]}
            onClick={() => handleCheckTodo()}
          />
        ) : (
          <ImCheckboxUnchecked
            className={style["action-btn"]}
            onClick={() => handleCheckTodo()}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
