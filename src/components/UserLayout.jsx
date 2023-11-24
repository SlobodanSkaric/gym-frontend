import React from 'react'

function UserLayout() {
  return (
    <div className="flex flex-row p-3">
      <div className='basis-1/12 text-center'>
        <div className='flex flex-col'>
          <div className='rounded-full border-cyan-600 sm:border-4'>
            <img src="../src/assets/img/user.jpg" alt="profile pic" className='rounded-full' />
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-evenly'>
            <div className='text-red-100 sm:text-base text-sm'>
              Semple User
            </div>
            <div className='bg-red-600 rounded-full w-[10px] h-[10px]'></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserLayout