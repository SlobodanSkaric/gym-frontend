import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './elemnts/NavBar'

function DefaultLayout() {
  return (
    <div className=' w-full mx-auto my-auto p-6 bg-sky-900'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default DefaultLayout