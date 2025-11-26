import React from "react";
export default function Details({ task, setPage }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>Status: {task.status}</p>

      <br />
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}
