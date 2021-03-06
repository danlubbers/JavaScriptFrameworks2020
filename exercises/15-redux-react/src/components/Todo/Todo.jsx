/**
 * Refactor this presentation components so that is using the props that is is getting
 * from its container. The container has already been completed for you.
 * @see src/components/Todo/TodoContainer.js
 *
 * As a bonus, see if you can get and set user input from the store as well
 */

import React, { Component, useState } from "react";
import ListItem from "./ListItem/ListItem";

function Todo(props) {
<<<<<<< HEAD
  console.log(props)
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState(props.todos);
=======
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716

  /**
   * This will be passed down from the container as props instead
   * (but you still need to prevent the form from submitting and pass up user input)
   */
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, userInput]);
    setUserInput("");
  };
  /**
   * This will be passed down from the container as props instead
   * (but you still need to pass up the todo index)
   */
  const deleteTodo = (todoIndex) => {
    setTodos(
      todos.filter((item, index) => {
        return index !== todoIndex;
      })
    );
  };
  return (
    <div className="mt-4">
      <h1 className="h3">Todo List</h1>
<<<<<<< HEAD
      <form className="form-group" onSubmit={props.addTodo}>
=======
      <form className="form-group" onSubmit={addTodo}>
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            aria-label="Enter text"
            aria-describedby="button-add"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="subimit" id="button-add">
              Add
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {/* The todos will be passed down as props */}
        {todos.map((text, index) => {
          const key = `todo-item-${index}`;
          return (
<<<<<<< HEAD
            <ListItem deleteTodo={props.deleteTodo} todoIndex={index} key={key}>
=======
            <ListItem deleteTodo={deleteTodo} todoIndex={index} key={key}>
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716
              {text}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
