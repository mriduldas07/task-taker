import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2 bg-gray-800 max-h-fit lg:min-h-screen p-12 text-lg w-full">
          <ul>
            <li
              className={`${
                pathname === "/dashboard" ? "bg-white text-black" : "text-white"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={""}>Dashboard</Link>
            </li>
            <li
              className={`${
                pathname === "/dashboard/all-tasks"
                  ? "bg-white text-black"
                  : "text-white"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"all-tasks"}>All Tasks</Link>
            </li>
            <li
              className={`${
                pathname === "/dashboard/profile"
                  ? "bg-white text-black"
                  : "text-white"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"profile"}>Profile</Link>
            </li>
            <li
              className={`${
                pathname === "/" ? "bg-white text-black" : "text-white"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-10 p-20 bg-slate-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
