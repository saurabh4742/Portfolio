"use client";
import React, { useEffect, useState } from "react";
import TechCard from "@/components/TechCard";
import TechStack from "@/Interfaces/TechStack";
import axios from "axios";
import Loading from "../loading";
const TechStack = () => {
  const [allTechStack, setAllTechStack] = useState<TechStack | null>(null);
  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        const response = await axios.get(`/api/techstack`);

        if (response.status == 200) {
          setAllTechStack(response.data.user);
          console.log("TechStack Set Form Axios");
        }
      } catch (error) {
        console.log("Error while fetching TechStack");
      }
    };
    fetchTechStack();
  }, []);
  return (
    <div
      id="techstack"
      className="flex-col  justify-center mt-2 items-center p-4"
    >
      <p className="flex justify-center text-center text-3xl text-black">
        Tech-Stacks
      </p>
      <p className="flex justify-center text-center mt-4 text-lg">
        Worked with diverse tech Frameworks.
      </p>
      <div className=" flex justify-center flex-wrap gap-6 scrolling-touch items-start mb-8">
        {allTechStack? <>{allTechStack?.techstacks?.map((techstack, index) => (
          <TechCard
            key={index}
            bgSrc={techstack.bgSrc}
            alt={techstack.alt}
            OfficialUrl={techstack.officialUrl}
          />
        ))}</>:<Loading/>}
      </div>
    </div>
  );
};

export default TechStack;
