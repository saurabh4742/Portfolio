/* eslint-disable @next/next/no-img-element */
"use client"
import ProfileAnimation from "@/Lottie-Component/Profile";
import { Home, Mail, PhoneCall, School2, UserRound } from "lucide-react";
import React from "react";
const Profile = () => {
  return (
    <div
      id="profile"
      className=" sm:flex justify-between items-center px-10 sm:px-20 sm:py-3"
    >
      <div className="sm:w-5/12 ">
        <ProfileAnimation />
      </div>
      <div className="sm:flex-col justify-center items-center sm:h-full gap-6 text-center text-xl sm:w-5/12">
        <div className="my-6 flex justify-center gap-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-test-b1876.appspot.com/o/SaurabhAnand111.jpeg?alt=media&token=4a860572-f344-48d4-9b74-511c75489783"
            alt="logo"
            width={100}
            height={100}
            className="rounded-[50%] cursor-pointer hover:opacity-90 border-4  shadow-xl"
          />
        </div>
        <p className="my-6 flex justify-center gap-4">
          <UserRound /> Saurabh Anand
        </p>
        <p className="my-6 flex justify-center gap-4">
          <School2 /> NIET,Greater Noida
        </p>
        <p className="my-6 flex justify-center gap-4">
          <Home /> Giridih,Jharkhand
        </p>
        <p className="my-6 flex justify-center gap-4">
          <PhoneCall />
          +91 7004735512
        </p>
        <p className="my-6 flex justify-center gap-4">
          <Mail /> saurabhbebi@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Profile;
