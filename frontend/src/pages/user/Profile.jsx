import React, { useContext } from 'react'
import AuthContext from '../../contexts/Auth/AuthContext.js'

function Profile() {
    const {user} = useContext(AuthContext);
  return (
    <div>
        <h2>Name : {user.name}</h2>
        <h2>role : {user.role}</h2>
    </div>
  )
}

export default Profile