import React, { useEffect, useState } from "react";
import TechStack from "@/Interfaces/TechStack";
import axios from "axios";
import { Trash2 } from 'lucide-react';
import Loading from "@/app/loading";
import toast from "react-hot-toast";
const Display = () => {
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
  }, [allTechStack]);
    async function handleDelete(techstack: object) {
      try {
        const response = await axios.delete(
          `/api/techstack`,
          { data: { techStackToRemove: techstack } }
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
      {allTechStack ? (
        <ul className="flex justify-center flex-wrap text-sm mt-2">
          {allTechStack.techstacks.map((techstack, index) => (
            <div key={index} className="flex-col p-4 mx-2 justify-center items-center text-center ">
              <li  className="my-2">
                {techstack.alt}
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