import React from "react";
import Button from "./Button";
import Image from "next/image";
const HomePage = () => {
  const handleParty = () => {
    console.log("hi");
  };
  return (
    <div className="sm:rounded-tl-[500px] rounded-tl-[180px]  bg-[#FFF7ED]  sm:flex justify-between  sm:px-40 px-4 pt-5 pb-2 gap-3  w-full   ">
      <div className="flex-col  justify-between  md:px-10 md:pt-2 md:pb-2 w-full md:w-5/12 ">
        <img className="rounded-b-full rounded-tl-full "
          alt="WEB Dev."
          src="https://img.freepik.com/premium-vector/programmer-focused-work-project-while-sitting-easy-chair_569013-330.jpg?w=740"
        ></img>
        <p>Warm Welcome!</p>
        <p className="text-[2rem]">Full Stack Devloper.</p>
      </div>
      <div className="  sm:flex items-center justify-center sm:px-10 pt-2 pb-2  w-full md:w-5/12">
        <div className="flex-col justify-center ">
          <p className="text-xl">
            Btech 2nd Year Student,Working on My Skills Still Learning,Open For Oppurtunities.
          </p>
          <Button handle={handleParty} text="Click Here For Firework" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
