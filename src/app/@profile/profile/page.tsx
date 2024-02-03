/* eslint-disable @next/next/no-img-element */
"use client"
import { delay } from "@/libs/utils";
import React from "react";
// eslint-disable-next-line @next/next/no-async-client-component
const ProfileUpdate =async () => {
  await delay(1000)
  return (
    <div
      id="profile"
      className=" flex-col  sm:flex justify-between items-center px-10 sm:px-20 sm:py-3"
    >
      Update Profile
    </div>
  );
};

export default ProfileUpdate;
