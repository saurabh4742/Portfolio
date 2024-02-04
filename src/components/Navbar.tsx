import React, { useState } from "react";
import NavText from "./NavText";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [mobileNav, setmobileNav] = useState(false);
  const handleMessage = () => {
    console.log("Message");
  };
  return (
    <div className="flex-col ">
      <div className="flex justify-between px-5 sm:px-10 pt-2 sm:pb-2 w-full">
        <div className="text-2xl">Saurabh</div>
        {/*desktop*/}
        <div className="hidden sm:flex justify-between items-center gap-4">
          <Link href="/">
            <NavText text="Home" />
          </Link>
          <Link href="#profile">
            <NavText text="Profile" />
          </Link>
          <Link href="#projects">
            <NavText text="Projects" />
          </Link>
          <Link href="#techstack">
            <NavText text="Tech-Stack" />
          </Link>
          <Link href="#accomplishment">
            <NavText text="Accomplishments" />
          </Link>
          <NavText text="Contact me" />
        </div>
        <div className="hidden md:flex items-center">
          
        </div>
        <div className="sm:hidden">
          <AlignJustify
            onClick={() => {
              setmobileNav(!mobileNav);
            }}
          />
        </div>
      </div>
      {/*mobile*/}
      <div
        className={`flex sm:hidden text-center justify-center item-center text-lg text-[#FFF7ED] pt-3 pl-5 mr-[-0.5vw] pb-6 rounded-bl-[25%] bg-primary transition-max-height ${
          !mobileNav ? "max-h-0 opacity-0 hidden " : " max-h-screen opacity-100"
        }`}
      >
        <div className="flex-col item-center justify-center">
        <Link href="/">
            <NavText text="Home" />
          </Link>
          <Link href="#profile">
            <NavText text="Profile" />
          </Link>
          <Link href="#projects">
            <NavText text="Projects" />
          </Link>
          <Link href="#techstack">
            <NavText text="Tech-Stack" />
          </Link>
          <Link href="#accomplishment">
            <NavText text="Accomplishments" />
          </Link>
          <NavText text="Contact me" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
