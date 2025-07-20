import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../feature/task/taskSlice";

export const FilterTask = () => {
  const filter = useSelector((state) => state.task.filters);

  const dispatch = useDispatch();

  return (
    <div className="filter">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={`button ${filter === "all" ? "active" : ""} `}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        className={`button ${filter === "completed" ? "active" : ""} `}
      >
        Completed
      </button>
    </div>
  );
};
