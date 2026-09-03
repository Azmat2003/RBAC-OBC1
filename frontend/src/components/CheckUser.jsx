import React, { useContext } from 'react'
import { Outlet } from 'react-router';
import AuthContext from '../contexts/Auth/AuthContext.js'

function CheckUser() {
    const {user} = useContext(AuthContext);
    if(!user){
        return <Outlet></Outlet>
    }
    else{
        // naviaget user to profile/dashboard
    }
}

export default CheckUser