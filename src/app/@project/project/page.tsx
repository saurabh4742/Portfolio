/* eslint-disable @next/next/no-img-element */
"use client";
import { useMyContext } from "@/ContextProvider/MyContext";
import AdminLogin from "@/components/AdminLogin";
import Display from "@/components/project/Display";
import UpdateForm from "@/components/project/UpdateForm";
import React from "react";
const ProjectsUpdate = () => {
  const { userAdmin } = useMyContext();
  return (
    <div className="flex justify-center py-8 bg-primarybackground">
      {userAdmin ? (
        <div className=''>
          <Display/>
          <div className="flex justify-center rounded-3xl">
        <UpdateForm/>
      </div>

        </div>
      ) : (
        <div className="flex-col text-center  ">
          <p className="text-xl my-2 underline">Projects Portal</p>
          <AdminLogin />
        </div>
      )}
    </div>
  );
};

export default ProjectsUpdate;
