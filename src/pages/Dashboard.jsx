import { useAuthState } from "react-firebase-hooks/auth";

import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PieChartComponent from "../components/PieChartComponent";
import TaskPriorityChart from "../components/TaskPriorityChart";
import { auth } from "../firebase.config";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
  const [priority, setPriority] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);
    fetch(`https://task-server-gamma-pied.vercel.app/tasks-count`, {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      });

    setLoading(true);
    fetch(`https://task-server-gamma-pied.vercel.app/tasks-priority`, {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setPriority(d);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <h1 className="font-bold text-3xl lg:text-5xl py-5">
        Hello,{user?.displayName}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 py-5 mx-auto">
        <PieChartComponent d={data} />
        <TaskPriorityChart d={priority} />
      </div>
      <div className="flex justify-center lg:block">
        <div className="overflow-x-auto mt-10 bg-black w-full lg:w-1/2"></div>
      </div>
    </div>
  );
};

export default Dashboard;
