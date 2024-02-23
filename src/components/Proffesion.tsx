import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const fullTexts = useMemo(() => ["MERN Stack Developer", "NextJS Developer"], []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fullText = fullTexts[currentTextIndex];
      const nextChar = fullText[text.length];
      if (nextChar !== undefined) {
        setText((prevText) => prevText + nextChar);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setText("");
          setCurrentTextIndex((prevIndex) =>
            (prevIndex + 1) % fullTexts.length
          );
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text, currentTextIndex, fullTexts]);

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
