import React, { useContext } from 'react'
import AuthContext from '../contexts/Auth/AuthContext.js'

function Home() {
    const {user} = useContext(AuthContext)
  return (
    <div>
        This is Home Page
    </div>
  )
}

export default Home