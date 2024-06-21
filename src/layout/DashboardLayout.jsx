import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdAddTask, MdOutlineSpaceDashboard } from "react-icons/md";
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
              }  px-4 py-2 rounded w-full`}
            >
              <Link to={""} className="flex items-center gap-1 w-fit">
                <MdOutlineSpaceDashboard size={23} />
                Dashboard
              </Link>
            </li>
            <li
              className={`${
                pathname === "/dashboard/all-tasks"
                  ? "bg-[#272A30]"
                  : "text-[#828388]"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"all-tasks"} className="flex items-center gap-2 w-fit">
                <MdAddTask size={23} />
                All Tasks
              </Link>
            </li>
            <li
              className={`${
                pathname === "/dashboard/profile"
                  ? "bg-[#272A30]"
                  : "text-[#828388]"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"profile"} className="flex items-center gap-2 w-fit">
                <CgProfile size={23} />
                Profile
              </Link>
            </li>
            <li
              className={`${
                pathname === "/" ? "bg-[#272A30]" : "text-[#828388]"
              }  px-4 py-2 rounded text w-full`}
            >
              <Link to={"/"} className="flex items-center gap-2 w-fit">
                <IoHomeOutline size={23} />
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-10 p-20 bg-[#1a1a25]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
