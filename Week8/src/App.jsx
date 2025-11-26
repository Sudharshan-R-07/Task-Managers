import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Details from "./pages/Details";

export default function App() {
  const [page, setPage] = useState("home");
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Load from LocalStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updated) => {
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
  };

  const markDone = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: "Done" } : t
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setPage={setPage} />

      {page === "home" && (
        <Home
          tasks={tasks}
          markDone={markDone}
          setPage={setPage}
          setSelectedTask={setSelectedTask}
        />
      )}

      {page === "create" && (
        <Create addTask={addTask} setPage={setPage} />
      )}

      {page === "edit" && (
        <Edit
          task={selectedTask}
          updateTask={updateTask}
          setPage={setPage}
        />
      )}

      {page === "details" && (
        <Details task={selectedTask} setPage={setPage} />
      )}
    </div>
  );
}
