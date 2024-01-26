import React, { useEffect, useState } from 'react'
import { UseCurentUser } from '../../../context/userContext'
import axios from 'axios';
import axiosInstance from '../../../axios';
import Modal from "react-modal";

const customPymentStyle = {
  content : {
    top: "10%",
    left: "30%",
    right: "30%",
    padding: "100px"
  }
}

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
  const [paymentModal, setPaymentModal] = useState(false);
  const [messagesModal, setMessagesModal] = useState(false);

  const openPaymentModal = () => {
    setPaymentModal(true);
  }

  const closePaymetModal = () => {
    setPaymentModal(false);
  }

  const openMessagesModal = () => {
    setMessagesModal(true);
  }

  const closeMessageModal = () => {
    setMessagesModal(false);
  }


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
            <div className='mt-6 mb-6'>
              <div className='flex flex-row'>
                <div>
                Payment: 
                </div>
                <div className={`text-${status ? 'green-300' : ''} pl-3`}>
                  { status ? "Is upadate" : <button onClick={openPaymentModal} className='bg-slate-100 text-red-600 px-2 py-1 rounded-lg'>Payment</button>}
                </div>
              </div>
              <Modal 
                isOpen={paymentModal} 
                onRequestClose={closePaymetModal}
                style={customPymentStyle}
                >
                  <div className='text-center text-3xl'>
                    Paymet
                  </div>
                  <div className='py-6 flex flex-col gap-6 '>
                    <div>
                      <input type="text" placeholder='First Name' className='border-2 border-slate-600 w-full py-3 px-2 rounded-md'/>
                    </div>
                    <div>
                      <input type="text" name="" placeholder='Last Name' className='border-2 border-slate-600 w-full py-3 px-2 rounded-md'/>
                    </div>
                    <div>
                      <input type="text" placeholder='Card Number' className='border-2 border-slate-600 w-full py-3 px-2 rounded-md'/>
                    </div>
                  </div>
                  <div className='flex flex-row justify-around'>
                    <div>
                      <button className='bg-slate-600 text-gray-100 px-10 py-3 rounded-md'>Pay</button>
                    </div>
                    <div>
                      <button onClick={closePaymetModal} className='bg-slate-600 text-gray-100 px-10 py-3 rounded-md'>Close</button>
                    </div>
                  </div>
                </Modal>
            </div>
            <div className='mt-3'>
              <div>
                <button className='bg-slate-100 px-6 py-2 text-black rounded-md' onClick={openMessagesModal}>Messages</button>
                <Modal
                  isOpen={messagesModal}
                  onRequestClose={closeMessageModal}
                  style={customPymentStyle}
                >
                  <div className='flex flex-col'>
                    <div className='mb-3 '>
                      <textarea name="" id="" cols="30" rows="10" className='border-2 border-slate-600 w-full py-3 px-2 rounded-md'></textarea>
                    </div>
                    <div className='flex flex-row justify-around'>
                      <div>
                        <button className='bg-slate-600 text-gray-100 px-10 py-3 rounded-md'>Send Message</button>
                      </div>
                      <div>
                        <button onClick={closeMessageModal} className='bg-slate-600 text-gray-100 px-10 py-3 rounded-md'>Close</button>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
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