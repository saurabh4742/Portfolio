/* eslint-disable @next/next/no-img-element */
"use client";
import ProfileAnimation from "@/Lottie-Component/Profile";
import { Home, Mail, PhoneCall, School2, UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "@/Interfaces/Profile";
import Loading from "../loading";
import { motion } from "framer-motion";
const Profile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/api/profile`);

        if (response.status == 200) {
          setProfile(response.data.user);
          console.log("Profile Set Form Axios");
        }
      } catch (error) {
        console.log("Error while fetching Profile");
      }
    };
    fetchProfile();
  }, []);
  return (
    <>
      <div
        id="profile"
        className=" sm:flex justify-between items-center px-10 sm:px-20 sm:py-3"
      >
        <div className="sm:w-4/12 sm:ml-10 sm:mb-8">
          <ProfileAnimation />
        </div>
        <motion.div
          className="sm:flex-col justify-center items-center sm:h-full gap-6 text-center text-xl sm:w-5/12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {profile ? (
            <>
              <div className="my-6 flex justify-center gap-4">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/image-test-b1876.appspot.com/o/SaurabhAnand111.jpeg?alt=media&token=4a860572-f344-48d4-9b74-511c75489783"
                  alt="logo"
                  width={100}
                  height={100}
                  className="rounded-[50%] cursor-pointer hover:opacity-90 border-4  shadow-xl"
                />
              </div>
              <p className="my-6 flex justify-center gap-4">
                <UserRound /> {profile.name}
              </p>
              <p className="my-6 flex justify-center gap-4">
                <School2 /> {profile.college}
              </p>
              <p className="my-6 flex justify-center gap-4">
                <Home /> {profile.home}
              </p>
              <p className="my-6 flex justify-center gap-4">
                <PhoneCall /> {profile.phone}
              </p>
              <p className="my-6 flex justify-center gap-4">
                <Mail /> {profile.email}
              </p>
            </>
          ) : (
            <Loading />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
