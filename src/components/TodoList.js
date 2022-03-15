import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToList, deleteTodo } from "../slices/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const getTodos = useSelector((state) => state.todo);
  console.log(getTodos);

  function handleAddTodo(e) {
    e.preventDefault();
    let newTodo = e.target[0].value;
    dispatch(addToList(newTodo));
  }

  function handleDeleteTodo(e, todoItem) {
    e.preventDefault();
    console.log(todoItem);
    dispatch(deleteTodo(todoItem));
  }

  return (
    <div>
      <h2>Todo</h2>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <input type="text" placeholder="Todo item"></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>Current todos: </p>

      {getTodos.length > 0 ? (
        getTodos.map((todo) => (
          <p>
            {todo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              onClick={(e) => {
                  let todoItem = getTodos.indexOf(todo)
                handleDeleteTodo(e, todoItem);
              }}
            >
              X
            </span>
          </p>
        ))
      ) : (
        <p>No todos</p>
      )}
    </div>
  );
}

export default TodoList;
