import React, { useState } from 'react'
import { BiAlignRight } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';

function VisitorLayout() {
const [menuButton, setMenuButton] = useState(false);

  return (
    <>
      <div className='flex flex-row justify-center'>
        <div className='xl:w-[600px]  w-[300px]'>
          <img src="../src/assets/img/sample.jpg" alt="visitor.jpg"  className='rounded-2xl sm:w-full  blur-sm'/>
        </div>
        <div className='absolute top-30 right-6 hidden sm:flex  justify-end text-red-100'>
            <div className='flex-1'>
              <a href="#" className='bg-sky-800  py-3 px-6 hover:bg-sky-700 rounded-lg mr-1'>Login</a>
            </div>
            <div className='flex-1'>
              <a href="#" className='bg-sky-800  py-3 px-6 hover:bg-sky-700 rounded-lg'>Register</a>
            </div>
        </div>
      </div>
      <div className='sm:hidden justify-center items-center flex flex-col'>
         <div className='flex-1'>
            <BiAlignRight className='w-[100px] h-[32px] text-cyan-100 hover:cursor-pointer ' onClick={() => setMenuButton(event => !event)}></BiAlignRight>
        </div>
        <div className={`${menuButton ? "flex" : "hidden"} flex-col absolute top-64 text-center text-red-100 bg-sky-800 rounded-2xl`}>
          <NavLink to="#" className='px-16 py-6 hover:cursor-pointer hover:bg-sky-900'>Login</NavLink>
          <NavLink to="#" className='px-16 py-6 hover:cursor-pointer  hover:bg-sky-900'>Registartion</NavLink>
        </div>
      </div>
        
     
      <div className='flex flex-col mt-3 justify-center items-center'>
        <div className='text-center'>
          <p className='text-2xl text-red-100'>This is ...</p>
        </div>
        <div className='flex w-auto sm:w-[600px] justify-center  text-red-100'>
          <div className=' text-center p-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            distinctio fugiat rem nobis in, asperiores perferendis
            odit mollitia eius quis sed corrupti, quam est atque? Iste dignissimos doloremque libero dolore.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            distinctio fugiat rem nobis in, asperiores perferendis
            odit mollitia eius quis sed corrupti, quam est atque? Iste dignissimos doloremque libero dolore.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            distinctio fugiat rem nobis in, asperiores perferendis
            odit mollitia eius quis sed corrupti, quam est atque? Iste dignissimos doloremque libero dolore.
          </div>
        </div>
      </div>
    </>
  )
}

export default VisitorLayout