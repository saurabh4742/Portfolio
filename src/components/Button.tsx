import React from "react";
import { PartyPopper } from "lucide-react";

interface ButtonProps {
  handle: () => void;
  text: string; 
}

const Button: React.FC<ButtonProps> = ({ handle, text }) => {
  return (
    <button
      onClick={() => {
        handle();
      }}
      className="flex hover:scale-95 mt-4 rounded-full text-sm hover:bg-gray-300 bg-primary px-4 py-2"
    >
      {text}
      <PartyPopper className="ml-1 h-5 w-5" color="#FFFBEB" />
    </button>
  );
};

export default Button;
