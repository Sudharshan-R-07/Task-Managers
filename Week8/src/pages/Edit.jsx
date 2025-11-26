import React from "react";
import { useState } from "react";

export default function Edit({ task, updateTask, setPage }) {
  const [title, setTitle] = useState(task.title);

  const save = () => {
    updateTask({ ...task, title });
    setPage("home");
  };

  return (
    <div className="p-6">
      <input
        className="border p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />
      <button className="bg-green-600 text-white p-2" onClick={save}>
        Save
      </button>
    </div>
  );
}
