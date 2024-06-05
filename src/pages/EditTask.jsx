/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function EditTask() {
  const task = useLoaderData();
  const [date, setDate] = useState(task.dueDate);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);

  const id = task._id;

  const data = {
    title,
    description,
    priority,
    status,
    date,
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch(`https://task-server-gamma-pied.vercel.app/task/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((d) => {
        navigate("/dashboard/all-tasks");
        e.target.reset();
      });
  };
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
              placeholder="Enter a title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
              placeholder="Enter a description"
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Due Date
              </label>
              <input
                type="date"
                name="date"
                id=""
                className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="priority"
              >
                Priority
              </label>
              <select
                name=""
                id=""
                className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option defaultValue={"Low"} value="Low">
                  Low
                </option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              name=""
              id=""
              className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option defaultValue={"Pending"} value="Pending">
                Pending
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black focus:outline hover:border-[3px] border-black mt-4"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
