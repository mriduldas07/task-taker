import { useAuthState } from "react-firebase-hooks/auth";

import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PieChartComponent from "../components/PieChartComponent";
import { auth } from "../firebase.config";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
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
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <h1 className="font-bold text-5xl py-5">Hello,{user?.displayName}</h1>

      <PieChartComponent d={data} />
      <div className="flex justify-center lg:block">
        <div className="overflow-x-auto mt-10 bg-black w-full lg:w-1/2"></div>
      </div>
    </div>
  );
};

export default Dashboard;
