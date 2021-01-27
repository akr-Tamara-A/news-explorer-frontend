import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ currentUser, path, children, to }) => {
  return currentUser 
    ? <Route path={path}>
        {children}
      </Route> 
    : <Redirect to={to} />
}

export default ProtectedRoute;