import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {ProtectedRouteInterface} from "../../types/interfaces/Auth";

export const ProtectedRoute = ({ isAllowed, redirectPath = '/', children }: ProtectedRouteInterface) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};