import Accomplishment from "@/Interfaces/Accomplishment";
import Loading from "@/app/loading";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Display = () => {
  const router = useRouter();
  const [allaccomplishments, setAllAccomplishments] =
    useState<Accomplishment | null>(null);
  const handleDelete = async (accomplishment: string) => {
    try {
      const response = await axios.delete(
        "https://saurabh-anands.vercel.app/api/accomplishment",
        { data: { accomplishmentToRemove: accomplishment } }
      );
      if(response.status==200){
        toast.success(response.data.message)
        router.push('/');
      }
    } catch (error) {
      toast.error("Error while deleting Accomplishments")
    }
  };
  useEffect(() => {
    const fetchAccomplishments = async () => {
      try {
        const response = await axios.get(
          "https://saurabh-anands.vercel.app/api/accomplishment"
        );

        if (response.status == 200) {
          setAllAccomplishments(response.data.user);
        }
      } catch (error) {
      }
    };
    fetchAccomplishments();
  }, [allaccomplishments]);
  return (
    <div>
      {allaccomplishments ? (
        <ul className="flex justify-center flex-wrap text-sm mt-2">
          {allaccomplishments.accomplishments.map((accomplishment, index) => (
            <div key={index} className="flex-col p-4 mx-2 justify-center items-center text-center ">
              <li className="my-2">&#x2022; {accomplishment.split(" ")[0]}</li>
              <button
                onClick={() => {
                  handleDelete(accomplishment);
                }}
              >
                <Trash2 />
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
