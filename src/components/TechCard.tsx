/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
interface TechCardProps {
    alt: string;
  bgSrc: string;
  OfficialUrl: string;
}
const TechCard: React.FC<TechCardProps>  = ({alt,bgSrc,OfficialUrl}) => {
  return (
    <div className="flex-col mt-4 ">
      <div className="flex-col items-center justify-center w-fit mt-4 shadow-md rounded-[50%]">
        <a href={OfficialUrl} target="_blank"><Image
          width={80}
          height={80}
          src={bgSrc}
          className="rounded-[50%]  cursor-pointer active:opacity-50 shadow-2xl "
          alt={alt}
          priority
        /></a>
      </div>
      <p className="text-sm text-center mt-2">{alt}</p>
    </div>
  );
};

export default TechCard;
