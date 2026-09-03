import React from 'react'
import {Routes, Route} from 'react-router'

// components
import Navbar from './components/Navbar.jsx'
import CheckUser from './components/CheckUser.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import AdminRoute from './components/AdminRoute.jsx'

// pages
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Profile from './pages/user/Profile.jsx'
import Users from './pages/admin/Users.jsx'


function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      <Routes>
        {/* these should be valid only when user is not logged in
          if logged in then this should not be visible ti UI as well on the routes */}

        <Route path="/" element={<Home></Home>}></Route>

        <Route element={<CheckUser></CheckUser>}>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Route>

        <Route element={<ProtectedRoutes></ProtectedRoutes>}>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          {/* dashboard, changepwd */}
        </Route>

        <Route element={<AdminRoute></AdminRoute>}>
          <Route path='/admin/users' element={<Users></Users>}></Route> {/* all admin dashboard*/}
        </Route>
      </Routes>


    </div>
  )
}

export default App