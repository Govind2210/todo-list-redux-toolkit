import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Task.css";
import { addtask } from "../feature/task/taskSlice";

export const AddTask = () => {
  const [text, setText] = useState("");

  //  dispatch invokes the reducer dunction in the slice
  const dispatch = useDispatch(); // Import useDispatch from react-redux

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("text==>", text);
    dispatch(addtask(text))
    setText(""); // Clear the input field after adding the task
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={text}
          className="input"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="button" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};
