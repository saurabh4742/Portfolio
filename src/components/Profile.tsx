import ProfileAnimation from "@/Lottie-Component/Profile";
import { Home, Mail, PhoneCall, School2, UserRound } from "lucide-react";
import React from "react";
const Profile = () => {
  return (
    <div id="profile" className=" sm:flex justify-between items-center px-10 sm:px-20 sm:py-3">
      <div className="sm:w-5/12 ">
        <ProfileAnimation />
      </div>
      <div className="sm:flex-col justify-center items-center sm:h-full gap-6 text-center text-xl sm:w-5/12">
        <p className="my-6 flex justify-center gap-4"><UserRound /> Saurabh Anand</p>
        <p className="my-6 flex justify-center gap-4"><School2 /> NIET,Greater Noida</p>
        <p className="my-6 flex justify-center gap-4"><Home /> Giridih,Jharkhand</p>
        <p className="my-6 flex justify-center gap-4"><PhoneCall />7004735512</p>
        <p className="my-6 flex justify-center gap-4"><Mail /> saurabhbebi@gmail.com</p>
        
      </div>
    </div>
  );
};

export default Profile;
