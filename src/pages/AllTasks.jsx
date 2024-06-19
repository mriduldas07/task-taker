import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import TaskCard from "../components/TaskCard";

export default function AllTasks() {
  const [data, setData] = useState([]);
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  useEffect(() => {
    setLoading(true);
    fetch(`https://task-server-gamma-pied.vercel.app/tasks`, {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [token]);

  const handleDeleteTask = (id) => {
    setData(data.filter((d) => d._id !== id));
  };
  // let filteredData;
  // filteredData = data.filter((task) => {
  //   const statusMatch = status === "All" || task.status === status;
  //   const priorityMatch = priority === "All" || task.priority === priority;
  //   const searching =
  //     search === "" || task.title.toLowerCase().includes(search.toLowerCase());
  //   return statusMatch && priorityMatch && searching;
  // });

  let content;
  if (loading) {
    content = <Loading />;
  }

  if (data.length > 0) {
    content = data?.map((t) => (
      <TaskCard key={t._id} data={t} onDelete={handleDeleteTask} />
    ));
  }

  return (
    <div className="relative">
      <div className="gap-10 items-center lg:flex ">
        <div className="">
          <h1 className="lg:text-2xl font-semibold pb-4">Filter on priority</h1>
          <select
            name=""
            id=""
            className="w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
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
          <h1 className="lg:text-2xl font-semibold pb-4">Filter on Status</h1>
          <select
            name=""
            id=""
            className="w-full bg-gray-100 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
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
            className="block lg:text-2xl font-semibold pb-4"
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
            className="w-full bg-gray-100 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-100 text-black"
            placeholder="Search with title..."
            required
          />
        </div>
      </div>

      <div className="bg-[#D3D3D6] w-fit p-4 lg:p-5 rounded-full absolute -top-16 -right-12 lg:top-0 lg:right-1 cursor-pointer">
        <Link to={`add-task`}>
          <FaPlus color="black" />
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 pt-10">
        {content}
      </div>
    </div>
  );
}
