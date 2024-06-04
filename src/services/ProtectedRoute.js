import React from 'react'
import {Outelet,Navigate, Outlet} from 'react-router-dom'

function ProtectedRoute() {
    const auth=localStorage.getItem("loggedin");
  return auth ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoute