"use client";
import React from "react";
import AdminButton from "./AdminButton";
import NavText from "./NavText";
import { AlignJustify } from "lucide-react";
const Navbar = () => {
  const handleMessage = () => {
    console.log("Message");
  };
  return (
    <div className="flex justify-between  px-10 pt-2 pb-2 w-full">
      <div className="text-2xl flex items-center">Saurabh</div>
      <div className="hidden md:flex justify-between items-center gap-4">
        <NavText text="Home" />
        <NavText text="Profile" />
        <NavText text="Projects" />
        <NavText text="Tech-Stack" />
        <NavText text="Contact me" />
      </div>
      <div className="hidden md:flex items-center">
        <AdminButton handle={handleMessage} />
      </div>
      <div className="md:hidden">
        <AlignJustify />
      </div>
    </div>
  );
};

export default Navbar;
