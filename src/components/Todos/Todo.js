import { ImCheckboxChecked, ImCheckboxUnchecked, ImBin } from "react-icons/im";
import style from "./Todo.module.css";
import { firestore } from "../../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { auth } from "../../firebase";
import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const Todo = ({ title, checked, id, onDeleteTodo }) => {
  const docref = doc(firestore, `users/${auth.currentUser.uid}/todos`, id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCheckTodo = () => {
    updateDoc(docref, {
      checked: !checked,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  const removeTodo = () => {
    deleteDoc(docref)
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Fragment>
      {isModalOpen && (
        <Modal>
          <h1>Are you sure delete this Todo?</h1>
          <div>
            <Button size='small' variant='filled' onClick={() => removeTodo()}>
              Delete
            </Button>
            <Button
              size='small'
              variant='outlined'
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      )}
      <div className={style.todo}>
        <div className={style.content}>
          <h2 className={style.title}>{title}</h2>
        </div>
        <div className={style.btns}>
          {checked && (
            <ImBin
              className={style["action-btn"]}
              onClick={() => setIsModalOpen(true)}
            />
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
    </Fragment>
  );
};

export default Todo;
