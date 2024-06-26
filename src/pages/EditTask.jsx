/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function EditTask() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);
    fetch(`https://task-server-gamma-pied.vercel.app/task/${id}`, {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          setDate(data?.dueDate);
          setTitle(data?.title);
          setDescription(data?.description);
          setPriority(data?.priority);
          setStatus(data?.status);
          setLoading(false);
        }
      });
  }, [id]);

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

  if (loading) {
    return <Loading />;
  }
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
            className="w-full bg-black text-white py-2 rounded-md border-[3px] transition-colors duration-700 ease-in-out hover:bg-white hover:text-black focus:outline hover:border-[3px] border-black mt-4"
          >
            Edit Task
          </button>
        </form>
      </div>
    </div>
  );
}
