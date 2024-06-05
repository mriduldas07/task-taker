import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.config";

export default function Profile() {
  const [user] = useAuthState(auth);
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-20"></div>
      <div className="flex justify-center -mt-12">
        <img
          className="h-24 w-24 rounded-full border-4 border-white"
          src={user?.photoURL}
          alt=""
        />
      </div>
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {user?.displayName}
        </h2>
        <p className="text-gray-600">{user?.email}</p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700">
            <Link to={`update-profile`}>update profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
