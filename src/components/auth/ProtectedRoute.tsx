import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SessionService from "../../utils/SessionService";
import { ReactNode } from "react";

const ProtectedRoute = ({
  children,
}: // requiredRole,
{
  children: ReactNode;
  requiredRole?: string;
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const token = SessionService.getToken();
  // const role = SessionService.getRole();
  if (!token || !isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  // if (role !== requiredRole) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return children;
};

export default ProtectedRoute;
