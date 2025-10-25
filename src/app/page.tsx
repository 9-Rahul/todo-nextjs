"use client";
import ".//styles.css";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editModal, setEditModal] = useState(false);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const copyData = [...data];
    copyData.push(inputValue);
    setData(copyData);
    setInputValue("");
    // console.log(data);
  };

  const deleteHandler = (valueTobeDltd) => {
    const deleteTodo = data.filter((el, index, arr) => {
      return index !== valueTobeDltd;
    });

    setData(deleteTodo);
  };

  const editHandler = (e) => {
    setEditValue(e.target.value);
  };

  const confirmEdit = () => {
    const copyEditData = [...data];
    copyEditData[editIndex] = editValue;
    setData(copyEditData);
    setEditValue("");
    setEditIndex(null);
    toggleEditModal();
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  return (
    <div className="todoContainer">
      <div className="todo">
        <div className="todoTitleContainer">
          <span className="todoTitle">My Todo</span>
        </div>
        <div className="inputAddTodoContainer">
          <input
            onChange={inputHandler}
            value={inputValue}
            className="input"
            type="text"
          />

          <button onClick={addTodo} className="addTodoContainer">
            <span className="addTodoText">Add todo</span>
          </button>
        </div>
        {/*  */}
        {/* dynamic code */}
        {/*  */}
        {data.map((el, index, arr) => {
          return (
            <div key={index} className="todoPrintContainer">
              <div className="printTodo">
                <div className="todoTextContainer">
                  <div className="todoText">{el}</div>
                </div>
                <div className="todoDeleteEditContainer">
                  <button
                    onClick={() => {
                      deleteHandler(index);
                    }}
                    className="todoDeleteButton"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      toggleEditModal();
                      setEditIndex(index);
                      setEditValue(el);
                    }}
                    className="todoEditButton"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/*  */}

        {/*  */}
        {/*  */}
      </div>
      {/*  */}
      {/* edit modal */}
      {/*  */}

      {editModal ? (
        <div className="todoEditModalContainer">
          <div className="todoEditModal">
            <input
              onChange={editHandler}
              value={editValue}
              className="editInput"
              type="text"
            />
            <button onClick={confirmEdit} className="confirm">
              Confirm
            </button>
            <button onClick={toggleEditModal} className="close">
              Close
            </button>
          </div>
        </div>
      ) : null}

      {/*  */}
      {/*  */}
    </div>
  );
}
