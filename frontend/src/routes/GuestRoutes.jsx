import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const GuestRoutes = () => {

  const {user,token,role} = useContext(authContext);

  return !user?.email ? <Outlet /> : <Navigate to={`${role === 'investor' ? '/investors/profile/me' : role === 'fundraiser' ? '/fundraisers/profile/me' : '/interns/profile/me'}`}  />;

}

export default GuestRoutes
