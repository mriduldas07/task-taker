/* eslint-disable no-unused-vars */
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function TaskCard({ data, onDelete }) {
  const { _id, title, description, dueDate, priority, status } = data || {};

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    const confirmed = confirm("Are you sure to delete???");
    if (confirmed) {
      await fetch(`https://task-server-gamma-pied.vercel.app/task/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          onDelete(_id);
        });
    }
  };
  return (
    <div className="card min-w-full bg-primary text-primary-content shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex gap-2">
          <span
            className={`w-fit ${
              status === "Pending" && "bg-red-400 text-md px-3 py-1 text-black"
            } ${
              status === "In Progress" &&
              "bg-blue-400 text-md px-3 py-1 text-black"
            } ${
              status === "Completed" &&
              "bg-green-400 text-md px-3 py-1 text-black"
            }`}
          >
            {status}
          </span>
          <span
            className={`w-fit ${
              priority === "Low" && "bg-green-400 text-md px-3 py-1 text-black"
            } ${
              priority === "Medium" &&
              "bg-blue-400 text-md px-3 py-1 text-black"
            } ${
              priority === "High" && "bg-red-400 text-md px-3 py-1 text-black"
            }`}
          >
            {priority}
          </span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-green-500 hover:bg-green-600 text-black">
            <Link to={`edit-task/${_id}`}>
              <BiEdit size={20} />
            </Link>
          </button>
          <button
            className="btn bg-red-400 text-black hover:bg-red-500"
            onClick={handleDelete}
          >
            <RiDeleteBin4Line size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
