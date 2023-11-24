import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div className="w-full mx-auto my-auto p-6 bg-sky-900">
        <Outlet/>
    </div>
  )
}

export default HomeLayout