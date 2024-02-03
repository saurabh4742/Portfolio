"use client";
import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex-col items-center justify-center bottom-0 text-center text-white py-4    w-full bg-[#111827]">
      <div className="flex justify-center gap-3 my-4">
        <a
          className=" cursor-pointer "
          href="https://github.com/saurabh4742"
          target="_blank"
        >
          <Github />
        </a>
        <a
          className=" cursor-pointer "
          href="https://www.linkedin.com/in/saurabh-anand-77337a252"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
      <p>&copy;2024 Saurabh Anand. All rights reserved.</p>
    </div>
  );
};

export default Footer;
