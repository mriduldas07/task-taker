import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByPriority,
  filterBySearch,
  filterByStatus,
} from "../redux/filter/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(filterByPriority(priority));
    dispatch(filterByStatus(status));
    dispatch(filterBySearch(search.toLowerCase()));
  }, [dispatch, status, priority, search]);

  return (
    <div className="gap-10 items-center lg:flex ">
      <div className="">
        <h1 className="lg:text-2xl font-semibold pb-4">Filter on Priority</h1>
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
  );
}
