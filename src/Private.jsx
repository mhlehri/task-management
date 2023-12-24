import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Components/Authprovider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>loading...</div>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
