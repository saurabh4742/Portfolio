import Accomplishment from "@/Interfaces/Accomplishment";
import Loading from "@/app/loading";
import axios from "axios";
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [allaccomplishments, setAllAccomplishments] =
    useState<Accomplishment | null>(null);
    const handleDelete=async (accomplishment:string)=>{
    }
  useEffect(() => {
    const fetchAccomplishments = async () => {
      try {
        const response = await axios.get(
          "https://saurabh-anands.vercel.app/api/accomplishment"
        );

        if (response.status == 200) {
          setAllAccomplishments(response.data.user);
          console.log("Accomplishments Set Form Axios");
        }
      } catch (error) {
        console.log("Error while fetching Accomplishments");
      }
    };
    fetchAccomplishments();
  }, []);
  return (
    <div>
      {allaccomplishments ? (
        <ul className="flex justify-center flex-wrap text-sm mt-2">
          {allaccomplishments.accomplishments.map((accomplishment, index) => (
            <div key={index} className="flex justify-center ">
              <li  className="my-2">
                &#x2022; {index}th
              </li>
              <button onClick={()=>{
                handleDelete(accomplishment)
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
  );
};

export default Display;
