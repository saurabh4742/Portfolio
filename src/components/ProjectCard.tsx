/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
interface ProjectCardProps {
  gitSrc: string;
  bgSrc: string;
  prjTitle: string;
  liveUrl:string
}
const ProjectCard: React.FC<ProjectCardProps>  = ({gitSrc,bgSrc,prjTitle,liveUrl}) => {
  return (
    <div className="flex-col mt-4 ">
      <div className="flex-col items-center p-2 justify-center w-fit mt-4 shadow-md rounded-t-3xl rounded-b-3xl bg-[#FAFAFA] pb-2">
        <img
          width={300}
          height={300}
          className="rounded-t-3xl shadow-sm  rounded-b-3xl "
          src={bgSrc}
          alt="google"
        />
        <div className=" flex items-center justify-center py-2 gap-4  ">
         <a href={gitSrc} target="_blank"><Image
            className="rounded-[50%]  cursor-pointer active:opacity-50 shadow-2xl"
            height={40}
            width={40}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
            priority
          /></a> 
          <a href={liveUrl} target="_blank">
            <span className="text-xl border-b-2 active:border-primary cursor-pointer ">
              Live
            </span>
          </a>
        </div>
      </div>
      <p className="text-md text-center mt-2">{prjTitle}</p>
    </div>
  );
};

export default ProjectCard;
