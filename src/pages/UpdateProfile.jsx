/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase.config";

export default function UpdateProfile() {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const [updateProfile] = useUpdateProfile(auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = {
      name: displayName,
      image: photoURL,
    };
    fetch(`https://task-server-gamma-pied.vercel.app/profile`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((d) => {});
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile({ displayName, photoURL });
  };
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
              placeholder="Enter a name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photoURL"
            >
              PhotoURL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
              placeholder="Enter a photoURL"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black focus:outline hover:border-[3px] border-black mt-4"
          >
            Update Profile
          </button>
          <p className="underline text-black pt-5 cursor-pointer">
            <Link to={`change-pass`}>Change password</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
