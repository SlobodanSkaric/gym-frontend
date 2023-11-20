import React, { useState } from 'react'
import MenuLink from "../../menuLinks.js";
import { NavLink } from 'react-router-dom';
import { BiAlignRight } from "react-icons/bi";

function NavBar() {
    const [menuButton, setMenuButton] = useState(false);
    console.log(menuButton);
  return (
    <>
    <div className='sm:flex justify-end items-center hidden'>
        {MenuLink.map((element, index) =>(
            <div className='sm:text-lg text-gray-300   hover:bg-sky-800 rounded-lg'>
                <NavLink to={element.url} key={index} className="px-6 py-2 block">{element.label}</NavLink>
            </div>
        ))}
    </div>
    <div className='sm:hidden flex justify-end '>
        <BiAlignRight className='w-[32px] h-[32px] text-cyan-100 hover:cursor-pointer' onClick={() => setMenuButton((current) => !current)}/>
    </div>
    </>
  )
}

export default NavBar