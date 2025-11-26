import React from "react";
import { useState } from "react";

import Pagination from "../components/Pagination";

export default function Home({ tasks, markDone, setPage, setSelectedTask }) {
  const [pageNo, setPageNo] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const perPage = 5;

  const filteredTasks = tasks.filter((task) => {
    if (searchBy === "title") {
      return task.title.toLowerCase().includes(searchText.toLowerCase());
    }
    if (searchBy === "status") {
      return task.status.toLowerCase().includes(searchText.toLowerCase());
    }
    return true;
  });

  const totalPages = Math.ceil(filteredTasks.length / perPage);

  const visible = filteredTasks.slice(
    (pageNo - 1) * perPage,
    pageNo * perPage
  );

  return (
    <div className="p-6">

      {/* SEARCH */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-3">
          <select
            value={searchBy}
            onChange={(e) => {
              setSearchBy(e.target.value);
              setSearchText("");
              setPageNo(1);
            }}
            className="px-4 py-2 border rounded"
          >
            <option value="title">Search by Title</option>
            <option value="status">Search by Status</option>
          </select>

          <input
            type="text"
            placeholder={`Search by ${searchBy}`}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setPageNo(1);
            }}
            className="px-4 py-2 border rounded w-64"
          />
        </div>

        <button
          onClick={() => setPage("create")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + New Task
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-center">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="p-3">{t.title}</td>
              <td className="text-center">{t.status}</td>
              <td className="text-center space-x-2">
                <button onClick={() => markDone(t.id)}>✔</button>
                <button onClick={() => {
                  setSelectedTask(t);
                  setPage("details");
                }}>View</button>
                <button onClick={() => {
                  setSelectedTask(t);
                  setPage("edit");
                }}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination page={pageNo} total={totalPages} setPage={setPageNo} />
    </div>
  );
}
