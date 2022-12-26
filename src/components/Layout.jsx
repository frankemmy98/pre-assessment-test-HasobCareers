import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'
import { useGlobalContext } from '../context'

function Layout() {
  const {isLoggedin} = useGlobalContext()

  return (
    <div>
        {isLoggedin ?        
          <Dashboard /> : <Navbar />
        }
        <div className="page">

        <Outlet />

        </div>
    </div>
  )
}

export default Layout