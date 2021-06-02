import "./App.css";
import Input from "./components/Input";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="task-container">
      <h1>Task Manager</h1>
      <Input />
      <Tasks />
    </div>
  );
}

export default App;
