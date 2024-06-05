import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const data = useLoaderData();
  const countedTask = data.length;
  const pendingCountedTask = data.filter((d) => d.status === "Pending").length;
  const priorityCountedTask = data.filter((d) => d.priority === "High").length;
  return (
    <div className="">
      <div className="stats shadow bg-slate-200 block lg:flex w-full">
        <div className="stat place-items-center">
          <div className="stat-title text-black text-xl font-semibold">
            Tasks
          </div>
          <div className="stat-value text-black">{countedTask}</div>
          <div className="stat-desc text-black">
            From January 1st to February 1st
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-black text-xl font-semibold">
            Pending Task
          </div>
          <div className="stat-value text-black">{pendingCountedTask}</div>
          <div className="stat-desc text-black">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-black text-xl font-semibold">
            High Priority Task
          </div>
          <div className="stat-value text-black">{priorityCountedTask}</div>
          <div className="stat-desc text-black">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="flex justify-center lg:block">
        <div className="overflow-x-auto mt-10 bg-black w-full lg:w-1/2">
          <table className="table">
            <thead>
              <tr className="lg:text-2xl">
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d._id} className="lg:text-xl">
                  <td>{d.title}</td>
                  <td>{d.status}</td>
                  <td>{d.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
