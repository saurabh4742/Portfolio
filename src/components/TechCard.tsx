/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
interface TechCardProps {
    alt: string;
  bgSrc: string;
  OfficialUrl: string;
}
const TechCard: React.FC<TechCardProps>  = ({alt,bgSrc,OfficialUrl}) => {
  return (
    <motion.div className="flex-col mt-4 " initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="flex-col items-center justify-center w-fit mt-4 shadow-md rounded-[50%]">
        <a href={OfficialUrl} target="_blank"><img
          width={80}
          height={80}
          src={bgSrc}
          className="rounded-[50%]  cursor-pointer active:opacity-50 shadow-2xl "
          alt={alt}
        /></a>
      </div>
      <p className="text-sm text-center mt-2">{alt}</p>
    </motion.div>
  );
};

export default TechCard;
