import React from 'react'
import axiosInstance from '../../../axios'

function UserLogin() {
  
  return (
    <>
       <>
      <div className='flex flex-col justify-center items-center md:mt-56 '>
        <div className='bg-sky-800 w-full sm:w-[460px] text-center py-6 text-lg uppercase text-red-100 sm:rounded-3xl'>
          <h1>User Login</h1>
        </div>
        <div className='bg-sky-800 w-full sm:w-[460px] text-center py-6 sm:rounded-3xl flex justify-center'>
            <form action="" className='flex flex-col  sm:w-[300px] '> 
              <label htmlFor="email" className='p-3 text-lg text-white'>Email</label>
              <input type="email" id='email' className='rounded-xl p-1'/>
              <label htmlFor="pass" className='p-3 text-lg text-white'>Password</label>
              <input type="password" id='pass' className='rounded-xl p-1'/>
              <button type='submit' className='bg-sky-600 mt-16 text-white px-6 py-1 t hover:bg-sky-300 rounded-xl '>Login</button>
            </form>
        </div>
      </div>
    </>
    </>
  )
}

export default UserLogin