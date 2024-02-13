import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextChar = fullText[text.length];
      if (nextChar !== undefined) {
        setText((prevText) => prevText + nextChar);
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="flex items-center">
      <motion.p
        className="text-3xl sm:text-nowrap py-2"
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default TypingAnimation;
