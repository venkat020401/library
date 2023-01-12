import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import StaffDashboard from './StaffDashboard'

function Portal() {
  return (
    <>
    <Navbar />
    {/* <Login /> */}
    <StaffDashboard />
    </>
    
  )
}

export default Portal