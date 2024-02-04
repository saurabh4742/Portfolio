import React, { useEffect, useState } from "react";
import TechCard from "@/components/TechCard";
import TechStack from "@/Interfaces/TechStack";
import axios from "axios";
import { Trash2 } from 'lucide-react';
import Loading from "@/app/loading";
const Display = () => {
    const [allTechStack, setAllTechStack] = useState<TechStack | null>(null);
  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        const response = await axios.get("https://saurabh-anands.vercel.app/api/techstack");

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
    function handleDelete(techstack: any) {
    }

  return (
    <div>
      {allTechStack ? (
        <ul className="flex justify-center flex-wrap text-sm mt-2">
          {allTechStack.techstacks.map((techstack, index) => (
            <div key={index} className="flex justify-center ">
              <li  className="my-2">
                {index}th
              </li>
              <button onClick={()=>{
                handleDelete(techstack)
              }}>
                <Trash2  />
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Display