import React, { useContext } from 'react'
import AuthContext from '../contexts/Auth/AuthContext.js'
import { Outlet } from 'react-router';

function AdminRoute() {
    const {user} = useContext(AuthContext);
    if(user.role == "ADMIN"){
        return <Outlet></Outlet>
    }
}

export default AdminRoute