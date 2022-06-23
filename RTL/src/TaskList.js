import React, { useState, useEffect } from "react";
import { getTasks } from "./taskService";
// import Task from "./Task";
// import "./tasklist.css";

const TaskList = () => {
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await getTasks();
        setTasks(response.data.items);
        console.log("In the UseEffect", response.data.items);
        setError(null);
      } catch (error) {
        setError("Failed to fetch tasks");
      }
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <h2 className="tasklist">Task List</h2>
      {error && <h4 className="error">{error}</h4>}
      {tasks.map((task) => (
        <div key={task.id}>{task.login}</div>
      ))}
    </div>
  );
};

export default TaskList;
