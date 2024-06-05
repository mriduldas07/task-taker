import { useState } from "react";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";

export default function PasswordChange() {
  const [newPass, setNewPass] = useState("");
  const [updatePassword] = useUpdatePassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePassword(newPass);
  };
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newPass"
            >
              New Password
            </label>
            <input
              type="text"
              id="newPass"
              name="newPass"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full bg-slate-50 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
              placeholder="Enter a new password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black focus:outline hover:border-[3px] border-black mt-4"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
