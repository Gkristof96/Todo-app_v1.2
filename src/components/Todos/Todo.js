import { ImCheckboxChecked, ImCheckboxUnchecked, ImBin } from "react-icons/im";
import style from "./Todo.module.css";
import { firestore } from "../../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const Todo = ({ title, checked, id }) => {
  const docref = doc(firestore, "todos", id);

  const handleCheckTodo = () => {
    updateDoc(docref, {
      checked: !checked,
    })
      .then(() => {
        console.log("checked changed");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const removeTodo = () => {
    console.log("delete");
    deleteDoc(docref)
      .then(() => {
        console.log("deleted");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className={style.todo}>
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
      </div>
      <div className={style.btns}>
        {checked && (
          <ImBin className={style["action-btn"]} onClick={() => removeTodo()} />
        )}
        {checked ? (
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
