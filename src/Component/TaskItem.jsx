import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../feature/task/taskSlice";

export const TaskItem = ({ id, task }) => {
  //   const [items, filters] = useSelector((state) => state.task);
  const disptach = useDispatch();

  return (
    <div>
      <li className={`task ${task.completed ? 'completed' : ''}`} >
        {task.text}
        <div>
          <button
            className="button"
            onClick={() => disptach(toggleTask(task?.id))}
          >
            {task?.completed ? "Undo" : "Done"}
          </button>
          <button
            className="button delete"
            onClick={() => disptach(removeTask(task?.id))}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};
