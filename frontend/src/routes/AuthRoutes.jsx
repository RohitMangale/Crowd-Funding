import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const AuthRoutes = () => {

    const {user,token ,role} = useContext(authContext);


    return  !user?.email ?  <Outlet/> : <Navigate to="/login" />
  
  }

export default AuthRoutes
