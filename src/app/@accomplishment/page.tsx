"use client";
import Accomplishment from "@/Interfaces/Accomplishment";
import AccomplishmentAnimation from "@/Lottie-Component/Accomplishment";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { motion } from "framer-motion";

const Accomplishments = () => {
  const [allaccomplishments, setAllAccomplishments] = useState<Accomplishment | null>(
    null
  );
  useEffect(() => {
    const fetchAccomplishments = async () => {
      try {
        const response = await axios.get(
          `/api/accomplishment`
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
    <div
      id="accomplishment"
      className="flex-col bg-primarybackground rounded-t-3xl pt-4 justify-center items-center p-4"
    >
      <p className="text-center text-3xl text-black">Accomplishments</p>
      <AccomplishmentAnimation />
      {allaccomplishments ? (
        <motion.ul className=" text-center text-xl mt-2" initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
          {allaccomplishments.accomplishments.map((accomplishment, index) => (
            <li key={index} className="my-2">&#x2022; {accomplishment}</li>
          ))}
        </motion.ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Accomplishments;
