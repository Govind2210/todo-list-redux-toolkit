import "./App.css";
import { AddTask } from "./Component/AddTask";
import { FilterTask } from "./Component/FilterTask";
import { TaskList } from "./Component/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
}

export default App;
