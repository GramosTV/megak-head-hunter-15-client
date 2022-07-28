import React from 'react';
import {Outlet} from "react-router-dom";
import {ProtectedRouteInterface} from "../../types/interfaces/Auth";

export const ProtectedRoute = ({ isAllowed, children }: ProtectedRouteInterface) => {
  if (!isAllowed) {
    return null;
  }

  return children ?
    <>
      {children}
    </> : <Outlet />;
};