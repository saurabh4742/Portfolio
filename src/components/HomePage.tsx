import React from "react";
import Button from "./Button";
import Image from "next/image";
const HomePage = () => {
  const handleParty = () => {
    console.log("hi");
  };
  return (
    <div className="flex-col md:flex justify-between  md:px-40 md:pt-5 pb-2 gap-3  w-full">
      <div className="flex-col justify-between  md:px-10 md:pt-2 md:pb-2 w-full md:w-5/12 ">
        <img
          alt="WEB Dev."
          src="https://img.freepik.com/premium-vector/programmer-focused-work-project-while-sitting-easy-chair_569013-330.jpg?w=740"
        ></img>
        <p>Warm Welcome!</p>
        <p className="text-[3vw]">My Name is Saurabh Anand Dev.</p>
      </div>
      <div className="flex items-center justify-center md:px-10 md:pt-2 md:pb-2  w-full md:w-5/12">
        <div className="flex-col justify-center w-full ">
          <p className="text-xl">
            Btech 2nd Year Student,Working on My Skills Still Learning,Open For Oppurtunities.
          </p>
          <Button handle={handleParty} text="Click Here For Perks" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
