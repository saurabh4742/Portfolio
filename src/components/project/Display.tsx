import Project from '@/Interfaces/Project';
import Loading from '@/app/loading';
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Display = () => {
    const [allProjects, setAllProjects] = useState<Project | null>(null);
    useEffect(() => {
      const fetchTechStack = async () => {
        try {
          const response = await axios.get(`${process.env.API_DOMAIN}api/project`);
  
          if (response.status == 200) {
            setAllProjects(response.data.user);
            console.log("Projects Set Form Axios");
          }
        } catch (error) {
          console.log("Error while fetching Projects");
        }
      };
      fetchTechStack();
    }, [allProjects]);
    async function handleDelete(project: object) {
      try {
        const response = await axios.delete(
          `${process.env.API_DOMAIN}api/project`,
          { data: { techStackToRemove: project } }
        );
        if(response.status==200){
          toast.success(response.data.message)
        }
      } catch (error) {
        toast.error("Error while deleting Project")
      }
    }

  return (
    <div>
      {allProjects ? (
        <ul className="flex justify-center flex-wrap text-sm mt-2">
          {allProjects.projects.map((project, index) => (
            <div key={index} className="flex-col p-4 mx-2 justify-center items-center text-center ">
              <li  className="my-2">
                {project.prjTitle}
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