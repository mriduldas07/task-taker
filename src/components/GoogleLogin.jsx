import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase.config";

export default function GoogleLogin() {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      const data = {
        name: user.user.displayName,
        email: user.user.email,
        image: user.user.photoURL,
      };
      fetch(`https://task-server-gamma-pied.vercel.app/create-profile`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          localStorage.setItem("token", data?.token);
        });
    }
  });

  return (
    <button className="btn w-full">
      <div
        className="flex items-center gap-2"
        onClick={() => signInWithGoogle()}
      >
        <FcGoogle size={24}></FcGoogle>
        <p>Google</p>
      </div>
    </button>
  );
}
