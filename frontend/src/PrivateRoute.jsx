import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
    const {email}= useSelector(store=>store.auth)
    const navigate = useNavigate()

  if(email==="admin@gmail.com"){
    return <Outlet/>
  }else{
    return <Navigate to='/admin/login'/>
  }     

}

export default PrivateRoute