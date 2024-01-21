import React, { useEffect, useState } from 'react'
import { UseCurentUser } from '../../../context/userContext'
import axios from 'axios';
import axiosInstance from '../../../axios';

function UserProfileInit() {
  const {userId}                  = UseCurentUser();
  const [usergetId, setUserGetId] = useState(userId != null ? userId : localStorage.getItem("USER_ID"));
  const [name, setName]           = useState();
  const [lastname, setLastname]   = useState();
  const [email, setEmail]         = useState();
  const [userCocah, setUserCoach] = useState();
  const [userTraining, setUserTraining] = useState([]);
  const [status, setStatus]       = useState();
  const [coachs, setCoachs]       = useState([]);
  const [programs, setProgrmas]   = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const responseUser      = await axiosInstance.get("/users/" + usergetId);
        const responseCoach     = await axiosInstance.get("/coach");
        const responseTraining  = await axiosInstance.get("/trening_program");

        const prepUserData      = responseUser.data.data;
        const prepCoacheData    = responseCoach.data;
        const prepTraninigData  = responseTraining.data;

        setName(prepUserData.name);
        setLastname(prepUserData.lastname);
        setEmail(prepUserData.email);
        setStatus(prepUserData.status);
        setUserCoach(responseUser.data.data.coach.id);        
        setUserTraining(prepUserData.training);

        setCoachs(prepCoacheData.coach);
        
        setProgrmas(prepTraninigData.trening_program);
      }catch(e){
        console.log("Some error ...");
      }
    }
    

    fetchData();
   
  }, []);
  
  return (
   
    <>
     
      <div className='text-center text-cyan-100 text-xl'>{name} {lastname}</div>
      <div className='flex flex-col sm:flex-row pt-10 justify-between '>
        <div className='p-6 text-cyan-100 sm:h-auto h-60 flex-1'>
          <p className='text-center'>User Information</p>
          <div className='flex flex-col mt-6 p-6 bg-sky-800 text-cyan-100 sm:h-full '>
            <div>
              <img src="../src/assets/img/user.jpg" alt="profile pic" className='rounded-full w-[100px] h-[100px]' />
            </div>
            <div>
              Name: {name}
            </div>
            <div>
              Lastname: {lastname}
            </div>
            <div>
              Email: {email}
            </div>
            <div>
              Payment: { status ? "Is upadate" : "Please pay"}
            </div>
          </div>
        </div>
        <div className='p-6 sm:ml-6 flex-1'>
          <p className='text-cyan-100 text-center mb-6'>Coach</p>
          <div className='mt-6 bg-sky-800 p-6 text-cyan-100  sm:h-full '>
            <ul>
              {coachs.length === 0 ? "loading..." : coachs.map((value) => (<li key={value.id}><input type='checkbox' checked={value.id == userCocah ? "checked" : ""} className='mr-1'></input>{value.name}</li>))}
            </ul>
          </div>
        </div>
        <div className='p-6 sm:ml-6 flex-1'>
          <p className='text-cyan-100 text-center mb-6'>Programs</p>
          <div className='mt-6 bg-sky-800 p-6 text-cyan-100  sm:h-full '>
            <ul>
              {programs.length === 0 ? "loading..." : programs.map((value) => (<li key={value.id}><input type='checkbox' checked={userTraining.some(data => data.id == value.id) ? "checked" : "" } className='mr-1'></input>{value.program_name}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfileInit