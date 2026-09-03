import React, { useContext } from 'react'
import AuthContext from '../contexts/Auth/AuthContext.js'
import { Outlet } from 'react-router'

function ProtectedRoutes() {
    const {user} = useContext(AuthContext)
    if(user){
        return <Outlet></Outlet>
    }
}

export default ProtectedRoutes