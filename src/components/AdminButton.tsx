import React from "react";
import { MessageCircleMore } from "lucide-react";

interface AdminButtonProps {
  handle: () => void;
}

const AdminButton: React.FC<AdminButtonProps> = ({ handle }) => {
  return (
    <button
      onClick={() => {
        handle();
      }}
      className="flex hover:scale-95 rounded-full text-sm hover:bg-gray-300 bg-primary px-4 py-2"
    >
      Message me
      <MessageCircleMore className="ml-1 h-5 w-5" color="#FFFBEB" />
    </button>
  );
};

export default AdminButton;
