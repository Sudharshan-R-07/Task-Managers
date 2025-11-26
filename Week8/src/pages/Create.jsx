import React from "react";
import { useState } from "react";

export default function Create({ addTask, setPage }) {
  const [title, setTitle] = useState("");

  const submit = () => {
    addTask({
      id: Date.now(),
      title,
      status: "Todo",
    });
    setPage("home");
  };

  return (
    <div className="p-6">
      <input
        className="border p-2"
        placeholder="Task title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />
      <button className="bg-blue-600 text-white p-2" onClick={submit}>
        Create
      </button>
    </div>
  );
}
