import { Navigate, useLocation } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import { auth } from "../firebase.config";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
