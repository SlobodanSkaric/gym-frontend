import React, { useEffect, useRef, useState } from 'react'
import { UseCurentUser } from '../context/userContext'
import axiosInstance from '../axios';
import { Navigate, useNavigate } from 'react-router-dom';
import UserProfileInit from './elemnts/User/UserProfileInit';

function UserLayout() {
  const {userId,token}                        = UseCurentUser();
  const [usergetId, setUserGetId]             = useState(userId != null ? userId : localStorage.getItem("USER_ID"))
  const [name, setName]                       = useState();
  const [email, setEmail]                     = useState();
  const [status, setStatus]                   = useState();
  const [coach, setCoach]                     = useState();
  const [trainingProgram, setTrainingProgram] = useState();
  const checkedRef = useRef(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () =>{
      try{
        const response = await axiosInstance.get("/users/"+ usergetId);
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setStatus(response.data.data.status);
        setCoach(response.data.data.coach);
        setTrainingProgram(response.data.data.training);

        checkedRef.current = true;
      }catch(error){
        console.log("Some error");
      }
    }

    fetchdata();

    if(checkedRef.current){
      checkRedirect();
    }
  });

  const checkRedirect = () =>{
    if(coach == undefined || trainingProgram == undefined){
      navigate("/gym/userprofile");
    }
  }

  return (
    <>
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
            { status ? <div className='bg-green-600 rounded-full w-[10px] h-[10px]'></div> : <div className='bg-red-600 rounded-full w-[10px] h-[10px]'></div>}
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
    </>
  )
}

export default UserLayout