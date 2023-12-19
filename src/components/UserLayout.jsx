import React, { useEffect, useState } from 'react'
import { UseCurentUser } from '../context/userContext'
import axiosInstance from '../axios';

function UserLayout() {
  const {userId,token} = UseCurentUser();
  const [usergetId, setUserGetId] = useState(userId != null ? userId : localStorage.getItem("USER_ID"))
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [status, setStatus] = useState(false);
  const [coach, setCoach] = useState({});

  useEffect(() => {
    	axiosInstance.get("/users/"+ usergetId)
      .then(({data}) => {
        console.log(data.data.status);
        setName(data.data.name);
        setEmail(data.data.email);
        setCoach(data.data.coach);
        setUserGetId()
        if(data.data.status){
          setStatus(true);
        }
      }).catch(
        (error) => {
          console.log("Some error " + error)
        });
  }, [usergetId]);

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
            <li className='pb-1 pt-1 border-b-2'>Cocahe1</li>
            <li>Coach2</li>
            <li>Cocahe3</li>
            <li>Cocahe4</li>
            <li>Cocahe5</li>
            <li>Cocahe6</li>
          </ul>
        </div>
        <div className='p-3 text-center flex flex-col items-center'>
          <div className='text-red-100 sm:text-2xl pb-3' >Choose your program</div>
            <ul className='sm:text-base text-sm bg-sky-800 w-36 pb-3 pt-3 text-red-100'>
              <li className='pb-1 pt-1 border-b-2'>Program1</li>
              <li>Program2</li>
              <li>Program3</li>
              <li>Program4</li>
              <li>Program5</li>
              <li>Program6</li>
            </ul>
        </div>
        <div className='p-3 text-center flex flex-col items-center'>
          <div className='text-red-100 sm:text-2xl pb-3 '>Select your intensity</div>
            <ul className='sm:text-base text-sm bg-sky-800 w-36 pb-3 pt-3 text-red-100'>
              <li className='pb-1 pt-1 border-b-2'>Intensity1</li>
              <li>Intensity2</li>
              <li>Intensity3</li>
              <li>Intensity4</li>
              <li>Intensity5</li>
              <li>Intensity6</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default UserLayout