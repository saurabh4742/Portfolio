/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectsAnimation from "@/Lottie-Component/ProjectsAnimation";
const Projects = () => {
  return (
    <div id="projects" className="flex-col bg-primarybackground rounded-b-3xl justify-center items-center p-4">
      <p className="flex justify-center text-center text-3xl text-black">
      Projects
      </p>
      <ProjectsAnimation/>
      <ul className="text-center text-xl mt-4">
        <li>Click on Live to see Project</li>
        <li>Click on Github icon for Repository</li>
      </ul>
      <div className=" flex justify-center flex-wrap gap-4 scrolling-touch items-start mb-8">
        <ProjectCard
          bgSrc="https://firebasestorage.googleapis.com/v0/b/image-test-b1876.appspot.com/o/LabourChowk.png?alt=media&token=b305bc04-4944-4ed5-bbea-d8bb5d0ea1b9"
          gitSrc="https://github.com/saurabh4742/labour-chowk-2024"
          prjTitle="Labour Chowk"
          liveUrl="https://labour-chowk.vercel.app/"
        />
        <ProjectCard
          bgSrc="https://firebasestorage.googleapis.com/v0/b/image-test-b1876.appspot.com/o/LabourChowkApi.png?alt=media&token=2ea166fd-ea8e-41e8-8ce0-0e95dab5f1d9"
          gitSrc="https://github.com/saurabh4742/labor-chowk-backend"
          prjTitle="Labour Chowk Backend"
          liveUrl="https://labor-chowk-api.vercel.app/"
        />
        <ProjectCard
          bgSrc="https://firebasestorage.googleapis.com/v0/b/image-test-b1876.appspot.com/o/portfolio.png?alt=media&token=322b6b6d-924b-4d1d-8946-b78fce490196"
          gitSrc="https://github.com/saurabh4742/portfolio"
          prjTitle="Personal Portfolio"
          liveUrl="https://saurabh-anand.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
