import React, { useState } from "react";
import Button from "./Button";
import WebDeveloper from "../Lottie-Component/WebDevloper";
import Celebration from "@/Lottie-Component/Celebration";
import { motion } from "framer-motion";
import TypingAnimation from "./Proffesion";
const HomePage = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleParty = () => {
    setShowComponent(true);

    setTimeout(() => {
      setShowComponent(false);
    }, 3000);
  };
  return (

    <>
    <div className="fixed top-0 left-0 w-screen h-fit flex justify-center">
        {showComponent && <Celebration />}
      </div>

      <div className="sm:rounded-tl-[500px] rounded-tl-[180px] bg-primarybackground sm:flex justify-between sm:px-20 px-4 pt-5 pb-2 gap-3 w-full">
        <div className="flex-col justify-between sm:px-10 w-full sm:w-5/12">
          <WebDeveloper />
        </div>

        <motion.div
          className="sm:flex items-center justify-between sm:py-36 py-2 flex-col w-full md:w-5/12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 ,ease: "easeOut"}}
        >
          <TypingAnimation/>
          <p
            className="sm:text-xl text-lg sm:text-center"
          >
            Btech 2nd Year Student at NIET,Working on My Skills Still Learning,Open For Opportunities.
          </p>
          <Button
            handle={handleParty}
            text="Click Here For Firework"
          />
        </motion.div>
      </div>
    </>
    
  );
};

export default HomePage;
