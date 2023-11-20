import React from 'react'
import MenuLink from "../../menuLinks.js";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    
    <div className='sm:flex justify-end items-center hidden'>
        {MenuLink.map((element, index) =>(
            <div className='sm:text-lg text-gray-300   hover:bg-sky-800 rounded-lg'>
                <NavLink to={element.url} key={index} className="px-6 py-2 block">{element.label}</NavLink>
            </div>
        ))}
    </div>
  )
}

export default NavBar