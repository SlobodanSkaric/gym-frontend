import React from 'react'

function UserProfile() {
  return (
    <div className="flex sm:flex-row flex-col p-3">
      <div className='basis-1/12 text-center'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-evenly '>
            <img src="../src/assets/img/user.jpg" alt="profile pic" className='rounded-full w-[100px] h-[100px]' />
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-around'>
            <div className='text-red-100 sm:text-base text-sm'>
             {name ? ( name ) : ("Load...")} <br />
            </div>
            <div className='bg-red-600 rounded-full w-[10px] h-[10px]'></div>
          </div>
        </div>
      </div>
      <div className='flex sm:flex-row flex-col justify-around items-center flex-1  pt-0'>
        <div className='p-3 text-center flex flex-col items-center'>
        <div className='text-red-100 sm:text-2xl pb-3'>Coache List</div>
          <ul className='sm:text-base text-sm bg-sky-800 w-36 pb-3 pt-3 text-red-100'>
          </ul>
        </div>
        <div className='p-3 text-center flex flex-col items-center'>
          <div className='text-red-100 sm:text-2xl pb-3' >Choose your program</div>
            <ul className='sm:text-base text-sm bg-sky-800 w-36 pb-3 pt-3 text-red-100'>
            </ul>
        </div>
        <div className='p-3 text-center flex flex-col items-center'>
          <div className='text-red-100 sm:text-2xl pb-3 '>Select your intensity</div>
            <ul className='sm:text-base text-sm bg-sky-800 w-36 pb-3 pt-3 text-red-100'>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default UserProfile