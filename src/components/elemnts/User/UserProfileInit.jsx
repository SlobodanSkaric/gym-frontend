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
  const [status, setStatus]       = useState();
  const [coachs, setCoachs]       = useState([]);
  const [programs, setProgrmas]   = useState();

  useEffect(() => {
    const fetchData = async () => {
      try{
        const responseUser = await axiosInstance.get("/users/" + usergetId);
        const prepData = responseUser.data.data;

        setName(prepData.name);
        setLastname(prepData.lastname);
        setEmail(prepData.email);
        setStatus(prepData.status);

        const responseCoach = await axiosInstance.get("/coach");
        setCoachs(responseCoach.data.coach);
      }catch(e){
        console.log("Some error ...");
      }
    }

    fetchData();
   
  }, []);

  
  return (
    <>
      <div className='text-center text-cyan-100 text-xl'>{name} {lastname}</div>
      <div className='flex flex-col sm:flex-row pt-10'>
        <div className='p-6 text-cyan-100'>
          <p className='text-center'>User Information</p>
          <div className='flex flex-col mt-6 p-6 bg-sky-800'>
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
        <div className='p-6 sm:ml-6'>
          <p className='text-cyan-100 text-center mb-6'>Coach</p>
          <div className='mt-6 bg-sky-800 p-6 text-cyan-100 w'>
            <ul>
              {coachs.length === 0 ? "loading..." : coachs.map((value) => (<li key={value.id}><input type='checkbox' className='mr-1'></input>{value.name}</li>))}
              {} 
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfileInit