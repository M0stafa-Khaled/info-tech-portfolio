import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ReactNode } from "react";

const ReverseProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/dashboard/admin" replace />;
  }
  return children;
};

export default ReverseProtectedRoute;
