import React, { useState } from 'react'
import axiosInstance from '../../../axios'

function UserRegistration() {
  const [name, setName]         = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [passver, setPassver]   = useState("");

  const sendDataRegistration = (env) =>{
    env.preventDefault();

    axiosInstance.post("/user/reg", {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      password_confirmation: passver
    }).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log("Some ... " + error);
    })
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center md:mt-56 '>
        <div className='bg-sky-800 w-full sm:w-[460px] text-center py-6 text-lg uppercase text-red-100 sm:rounded-3xl'>
          <h1>User Registration</h1>
        </div>
        <div className='bg-sky-800 w-full sm:w-[460px] text-center py-6 sm:rounded-3xl flex justify-center'>
            <form action="#" method='POST' className='flex flex-col  sm:w-[300px]' onSubmit={sendDataRegistration}> 
              <label htmlFor="name" className='p-3 text-lg text-white'>Name</label>
              <input type="text" id='name' className=' rounded-xl p-1' value={name} onChange={ev => setName(ev.target.value)}/>
              <label htmlFor="lastname" className='p-3 text-lg text-white'>Last Name</label>
              <input type="text" id='lastname' className='rounded-xl p-1' value={lastname} onChange={ev => setLastname(ev.target.value)}/>
              <label htmlFor="email" className='p-3 text-lg text-white'>Email</label>
              <input type="email" id='email' className='rounded-xl p-1' value={email} onChange={ev => setEmail(ev.target.value)}/>
              <label htmlFor="pass" className='p-3 text-lg text-white'>Password</label>
              <input type="password" id='pass' className='rounded-xl p-1' value={password} onChange={ev => setPassword(ev.target.value)}/>
              <label htmlFor="passre" className='p-3 text-lg text-white'>Password Retray</label>
              <input type="password" id='passre' className='rounded-xl p-1' value={passver} onChange={ev => setPassver(ev.target.value)}/>
              <button type='submit' className='bg-sky-600 mt-16 text-white px-6 py-1 t hover:bg-sky-300 rounded-xl '>Registration</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default UserRegistration