"use client"
import { useMyContext } from "@/ContextProvider/MyContext";
import AdminLogin from "@/components/AdminLogin";
import React from "react";
const TechStackUpdate = () => {
  const { userAdmin } = useMyContext();
  return (
    <div className="flex justify-center py-8 ">
      {userAdmin ? (
        <>You are Loged in Saurabh!</>
      ) :(
      <div className="flex-col text-center  ">
        <p className='text-xl my-2 underline'>Tech-Stack Portal</p>
      <AdminLogin />
      </div>
      )}
    </div>
  );
};

export default TechStackUpdate;
