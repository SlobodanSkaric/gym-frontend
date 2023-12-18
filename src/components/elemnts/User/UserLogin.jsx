import React, { useState } from 'react'
import axiosInstance from '../../../axios'
import {  UseCurentUser } from '../../../context/userContext';
import { Navigate, useNavigate } from "react-router-dom"
import UserLayout from '../../UserLayout';

function UserLogin() {
  const {setUserId,setName,setLastname,setEmailCon,setApiToken} = UseCurentUser();
  const [nameApi, setNameApi] = useState();
  const [lastnameApi, setLastnameApi] = useState();
  const [emaiApi, setEmailApi] = useState();
  const [token, setTokenApi] = useState();

  const [email, setEmal]        = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userDataLogin = (ev) => {
    ev.preventDefault();

    axiosInstance.post("/login/user" ,{
      email: email,
      password: password
    }).then(({data}) =>{
      setUserId(data[0].id)
      setName(data[0].name);
      setLastname(data[0].lastname);
      setEmailCon(data[0].email);
      navigate("/gym/user");
    }).catch((error) =>{
      console.log("Some error " + error);
    })
  }
  
  return (
    <>
       <>
      <div className='flex flex-col justify-center items-center md:mt-56 '>
        <div className='bg-sky-800 w-full sm:w-[460px] text-center py-6 text-lg uppercase text-red-100 sm:rounded-3xl'>
          <h1>User Login</h1>
        </div>
        <div className='bg-sky-800 w-full sm:w-[460px] text-center py-6 sm:rounded-3xl flex justify-center'>
            <form action="" className='flex flex-col  sm:w-[300px]' onSubmit={userDataLogin}> 
              <label htmlFor="email" className='p-3 text-lg text-white'>Email</label>
              <input type="email" id='email' className='rounded-xl p-1' value={email} onChange={ev => setEmal(ev.target.value)}/>
              <label htmlFor="pass" className='p-3 text-lg text-white'>Password</label>
              <input type="password" id='pass' className='rounded-xl p-1' value={password} onChange={ev => setPassword(ev.target.value)}/>
              <button type='submit' className='bg-sky-600 mt-16 text-white px-6 py-1 t hover:bg-sky-300 rounded-xl'>Login</button>
            </form>
        </div>
      </div>
    </>
    </>
  )
}

export default UserLogin