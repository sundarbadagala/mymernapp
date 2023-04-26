import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from '../useAuth'
import AppLayout from 'shared/organisms/appLayout'

function ProtectedRoute() {
  const auth = useAuth();
  return auth ? <Navigate to="/" /> : <Outlet />;
}

export default ProtectedRoute;
