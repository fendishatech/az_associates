import { Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
const ProtectedRoutes = ({ children }) => {
  const { user, token } = useStateContext();

  if (token) {
    return <Navigate to="/admin" />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoutes;
