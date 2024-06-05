import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";

export default function AllTasks() {
  const [data, setData] = useState([]);
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(`https://task-server-gamma-pied.vercel.app/tasks`, {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [token]);

  const handleDeleteTask = (id) => {
    setData(data.filter((d) => d._id !== id));
  };
  let filteredData;
  filteredData = data.filter((task) => {
    const statusMatch = status === "All" || task.status === status;
    const priorityMatch = priority === "All" || task.priority === priority;
    const searching =
      search === "" || task.title.toLowerCase().includes(search.toLowerCase());
    return statusMatch && priorityMatch && searching;
  });

  return (
    <div className="relative">
      <div className="gap-10 items-center lg:flex ">
        <div className="">
          <h1 className="text-black lg:text-2xl font-semibold pb-4">
            Filter on priority
          </h1>
          <select
            name=""
            id=""
            className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="">
          <h1 className="text-black lg:text-2xl font-semibold pb-4">
            Filter on Status
          </h1>
          <select
            name=""
            id=""
            className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="">
          <label
            className="block text-black lg:text-2xl font-semibold pb-4"
            htmlFor="search"
          >
            Search
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
            placeholder="Search with title..."
            required
          />
        </div>
      </div>

      <div className="bg-black w-fit p-4 lg:p-6 rounded-full absolute -top-16 -right-12 lg:top-0 lg:right-1 cursor-pointer">
        <Link to={`add-task`}>
          <FaPlus />
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-10">
        {filteredData.map((t) => (
          <TaskCard key={t._id} data={t} onDelete={handleDeleteTask} />
        ))}
      </div>
    </div>
  );
}
