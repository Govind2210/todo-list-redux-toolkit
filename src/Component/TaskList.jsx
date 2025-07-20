import React from "react";
import { useSelector } from "react-redux";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { items, filters } = useSelector((state) => state.task);

  const filteredItems = items.filter((item) => {
    if (filters === "completed") {
      return item.completed;
    }
    return true;
  });

  return (
    <div>
      <ul>
        {filteredItems?.map((item, index) => (
          <TaskItem key={item?.id} task={item} />
        ))}
      </ul>
    </div>
  );
};
