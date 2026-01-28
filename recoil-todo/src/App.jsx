import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Filter } from "./components/Filter";

function App() {
  return (
    <div>
      <h1>To-Do List com Recoil</h1>
      <TaskForm />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
