"use client";
import NavText from "@/components/NavText";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex-col items-center justify-center bottom-0 text-center text-white py-4    w-full bg-[#111827]" >
      <motion.div className="flex justify-center gap-3 my-4" initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}>
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
      </motion.div>
      <motion.div className="flex-col" initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}>
        <span className="text-bold text-lg">Admin Access</span>
      <div className="flex flex-wrap justify-center text-sm items-center gap-2">
          <Link href="/profile">
            <NavText text="Profile" />
          </Link>
          <Link href="/project">
            <NavText text="Projects" />
          </Link>
          <Link href="/techstack">
            <NavText text="Tech-Stack" />
          </Link>
          <Link href="/accomplishment">
            <NavText text="Accomplishments" />
          </Link>
        </div>
      </motion.div>
      <p>&copy;2024 Saurabh Anand. All rights reserved.</p>
    </div>
  );
};

export default Footer;
