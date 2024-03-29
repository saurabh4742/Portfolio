/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Suspense, useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectsAnimation from "@/Lottie-Component/ProjectsAnimation";
import Project from "@/Interfaces/Project";
import axios from "axios";
import Loading from "../loading";
import { motion } from "framer-motion";
const Projects = () => {
  const [allProjects, setAllProjects] = useState<Project | null>(null);
  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        const response = await axios.get(`/api/project`);

        if (response.status == 200) {
          setAllProjects(response.data.user);
          console.log("Projects Set Form Axios");
        }
      } catch (error) {
        console.log("Error while fetching Projects");
      }
    };
    fetchTechStack();
  }, []);
  return (
    <div
      id="projects"
      className="flex-col bg-primarybackground rounded-b-3xl justify-center items-center p-4"
    > <motion.div initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}>
<p className="flex justify-center text-center text-3xl text-black">
        Projects
      </p>
      <ProjectsAnimation />
      <ul className="text-center text-xl mt-4">
        <li>Click on Live to see Project</li>
        <li>Click on Github icon for Repository</li>
      </ul>
    </motion.div>
      
      <div className=" flex justify-center flex-wrap gap-4 scrolling-touch items-start mb-8">
        {allProjects ? (
          <>
            <Suspense>
            {allProjects.projects?.map((project, index) => (
              <ProjectCard
                key={index}
                bgSrc={project.bgSrc}
                gitSrc={project.gitSrc}
                prjTitle={project.prjTitle}
                liveUrl={project.liveUrl}
              />
            ))}
            </Suspense>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Projects;
