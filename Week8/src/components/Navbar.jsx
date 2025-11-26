import React from "react";
export default function Navbar({ setPage }) {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <div className="space-x-4">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("create")}>Create</button>
      </div>
    </div>
  );
}
