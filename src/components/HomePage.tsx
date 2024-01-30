import React from "react";
import Button from "./Button";
import WebDeveloper from "../Lottie-Component/WebDevloper";
const HomePage = () => {
  const handleParty = () => {
    console.log("hi");
  };
  return (
    <div className="sm:rounded-tl-[500px] rounded-tl-[180px]  bg-[#FFF7ED]  sm:flex justify-between  sm:px-40 px-4 pt-5 pb-2 gap-3  w-full   ">
      <div className="flex-col  justify-between  md:px-10  w-full md:w-5/12 ">
        <WebDeveloper/>
      </div>
      <div className=" sm:flex items-center justify-between sm:py-36  py-2 flex-col  w-full md:w-5/12">
      <p className="text-[2rem]">Full Stack Developer</p>
          <p className="sm:text-xl text-lg sm:text-center">
            Btech 2nd Year Student at NIET,Working on My Skills Still Learning,Open For Oppurtunities.
          </p>
          <Button handle={handleParty} text="Click Here For Firework" />
        </div>
    </div>
  );
};

export default HomePage;
