import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2 bg-[#20212C] max-h-fit lg:min-h-screen p-12 md:text-base lg:text-lg w-full">
          <ul>
            <li
              className={`${
                pathname === "/dashboard" ? "bg-[#272A30]" : "text-[#828388]"
              }  px-4 py-2 rounded-lg text-white w-full`}
            >
              <Link to={""}>Dashboard</Link>
            </li>
            <li
              className={`${
                pathname === "/dashboard/all-tasks"
                  ? "bg-[#272A30]"
                  : "text-[#828388]"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"all-tasks"}>All Tasks</Link>
            </li>
            <li
              className={`${
                pathname === "/dashboard/profile"
                  ? "bg-[#272A30]"
                  : "text-[#828388]"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"profile"}>Profile</Link>
            </li>
            <li
              className={`${
                pathname === "/" ? "bg-[#272A30]" : "text-[#828388]"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-10 p-20 bg-[#17181F]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
