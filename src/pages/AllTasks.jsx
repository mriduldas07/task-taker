import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../redux/tasks/taskApi";

export default function AllTasks() {
  const { data, isLoading } = useGetTasksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const [taskData, setTaskData] = useState(null);

  const { priority, status, search } = useSelector((state) => state.filter);

  const handleDeleteTask = (id) => {
    setTaskData(taskData?.filter((d) => d._id !== id));
  };

  useEffect(() => {
    if (data?.length > 0) {
      setTaskData(data);
    }
  }, [data]);

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && (taskData?.length === 0 || taskData === null)) {
    content = (
      <h1 className="text-white text-2xl">
        No tasks available.{" "}
        <Link to={`add-task`} className="text-orange-500 underline">
          Click here
        </Link>{" "}
        to add your task
      </h1>
    );
  }
  if (!isLoading && taskData?.length > 0) {
    content = taskData
      ?.filter((f) => {
        if (priority !== "All") {
          return f.priority === priority;
        }
        return f;
      })
      .filter((f) => {
        if (status !== "All") {
          return f.status === status;
        }
        return f;
      })
      .filter((f) => {
        if (search !== "") {
          return f.title.toLowerCase().includes(search);
        }
        return f;
      })
      .map((t) => (
        <TaskCard key={t._id} data={t} onDelete={handleDeleteTask} />
      ));
  }

  return (
    <div className="relative">
      <Filter />
      <Link to={`add-task`}>
        <div className="bg-[#D3D3D6] w-fit p-4 lg:p-5 rounded-full absolute -top-16 -right-12 lg:top-0 lg:right-1 cursor-pointer">
          <FaPlus color="black" />
        </div>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 pt-10">
        {content}
      </div>
    </div>
  );
}
