/* eslint-disable @next/next/no-img-element */
"use client";
import { useMyContext } from "@/ContextProvider/MyContext";
import AdminLogin from "@/components/AdminLogin";
import UpdateForm from "@/components/profile/UpdateForm";
import React from "react";
const ProfileUpdate = () => {
  const { userAdmin } = useMyContext();
  return (
    <div className="flex justify-center py-8 ">
      {userAdmin ? (
        <div className=" flex items-center justify-center text-center bg-white rounded-3xl">
          <UpdateForm/>
        </div>
      ) : (
        <div className="flex-col text-center  ">
          <p className="text-xl my-2 underline">Profile Portal</p>
          <AdminLogin />
        </div>
      )}
    </div>
  );
};

export default ProfileUpdate;
