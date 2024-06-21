import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase.config";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  return (
    <div className="navbar bg-[#111120] shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
          >
            <Link to={`/`}>
              <li>Home</li>
            </Link>
            <Link to={`/about`}>
              <li>About</li>
            </Link>
            <Link to={`dashboard`}>
              <li>Dashboard</li>
            </Link>
            <Link to={`/pricing`}>
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <Link to={`/`} className="btn btn-ghost text-2xl">
          Task Manager
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-xl">
          <Link to={`/`}>
            <li>Home</li>
          </Link>
          <Link to={`/about`}>
            <li>About</li>
          </Link>
          <Link to={`dashboard`}>
            <li>Dashboard</li>
          </Link>
          <Link to={`/pricing`}>
            <li>Pricing</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end pr-4">
        {user ? (
          <button
            onClick={async () => {
              await signOut();
              localStorage.removeItem("token");
            }}
          >
            <h1 className="text-xl">Log out</h1>
          </button>
        ) : (
          <Link to={`/sign-up`}>
            <h1 className="text-xl">Sign up</h1>
          </Link>
        )}
      </div>
    </div>
  );
}
