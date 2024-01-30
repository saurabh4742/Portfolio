import React, { useState } from "react";
import AdminButton from "./AdminButton";
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
          <NavText text="Projects" />
          <NavText text="Tech-Stack" />
          <NavText text="Contact me" />
        </div>
        <div className="hidden md:flex items-center">
          <AdminButton handle={handleMessage} />
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
  className={`flex-col sm:hidden text-center text-lg text-[#FFF7ED] pt-3 pl-5 mr-[-0.5vw] pb-6 rounded-bl-[25%] bg-primary transition-transform ${
    !mobileNav ? "opacity-0 transform -translate-y-full hidden " : "opacity-100 transform translate-y-0"
  }`}
>
        <Link href="/">
          <NavText text="Home" />
        </Link>
        <Link href="#profile">
          <NavText text="Profile" />
        </Link>
        <NavText text="Projects" />
        <NavText text="Tech-Stack" />
        <NavText text="Contact me" />
      </div>
    </div>
  );
};

export default Navbar;
