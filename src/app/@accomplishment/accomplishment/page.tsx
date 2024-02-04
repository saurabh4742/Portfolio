"use client"
import { useMyContext } from '@/ContextProvider/MyContext';
import AdminLogin from '@/components/AdminLogin'
import Display from '@/components/accomplishment/Display';
import UpdateForm from '@/components/accomplishment/UpdateForm';
import React from 'react'

const AccomplishmentsUpdate = () => {
  const { userAdmin } = useMyContext();
  return (
    <div  className="flex justify-center py-8 bg-primarybackground">
      {userAdmin ? (
        <div className=''>
          <Display/>
          <div className="flex justify-center rounded-3xl">
        <UpdateForm/>
      </div>

        </div>
        
      ) :(
      <div className="flex-col text-center  ">
        <p className='text-xl my-2 underline'>Accomplishment Portal</p> 
        <AdminLogin />
        </div>
      )}
    </div>
  )
}

export default AccomplishmentsUpdate
