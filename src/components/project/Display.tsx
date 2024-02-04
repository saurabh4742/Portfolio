import Project from '@/Interfaces/Project';
import Loading from '@/app/loading';
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Display = () => {
    const [allProjects, setAllProjects] = useState<Project | null>(null);
    useEffect(() => {
      const fetchTechStack = async () => {
        try {
          const response = await axios.get("https://saurabh-anands.vercel.app/api/project");
  
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
    function handleDelete(project: any) {
        
    }

  return (
    <div>
      {allProjects ? (
        <ul className="flex justify-center flex-wrap text-sm mt-2">
          {allProjects.projects.map((project, index) => (
            <div key={index} className="flex justify-center ">
              <li  className="my-2">
                {index}th
              </li>
              <button onClick={()=>{
                handleDelete(project)
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