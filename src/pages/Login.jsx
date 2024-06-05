import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import GoogleLogin from "../components/GoogleLogin";
import Loading from "../components/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

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
          console.log(data);
        });
    }
  });

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="bg-transparent">
            <img src="/img/bwink_bld_03_single_03.jpg" alt="" />
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Create account?{" "}
              <Link className="underline" to={`/sign-up`}>
                Sign up
              </Link>
            </p>
          </form>
          <div className="mx-8 mb-5">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
