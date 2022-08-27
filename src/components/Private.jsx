import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../Context/Auth";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(Authcontext);

  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
