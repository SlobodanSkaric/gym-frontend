import React, { useState } from 'react'
import MenuLink from "../../menuLinks.js";
import { NavLink } from 'react-router-dom';
import { BiAlignRight } from "react-icons/bi";

function NavBar() {
    const [menuButton, setMenuButton] = useState(false);

  return (
    <>
    <div className='sm:flex  justify-end items-center hidden'>
        {MenuLink.map((element, index) =>(
            <div className='sm:text-lg text-gray-300   hover:bg-sky-800 rounded-lg'>
                <NavLink to={element.url} key={index} className="px-6 py-2 block">{element.label}</NavLink>
            </div>
        ))}
    </div>
    <div className='sm:hidden flex justify-end '>
        <BiAlignRight className='w-[32px] h-[32px] text-cyan-100 hover:cursor-pointer' onClick={() => setMenuButton((current) => !current)}/>
    </div>
    <div className={`${menuButton ? "flex" : "hidden"} sm:hidden w-[140px] h-auto absolute top-16 right-2`}>
        <div className='flex flex-col bg-sky-800 rounded-xl '>
            {MenuLink.map((element, index) =>(
                <div className='sm:text-lg text-gray-300   hover:bg-sky-900 rounded-xl text-center'>
                    <NavLink to={element.url} key={index} className="px-6 py-2 block" onClick={() => setMenuButton((current) => !current)}>{element.label}</NavLink>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default NavBar