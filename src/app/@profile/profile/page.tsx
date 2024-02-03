/* eslint-disable @next/next/no-img-element */
"use client";
import { useMyContext } from "@/ContextProvider/MyContext";
import AdminLogin from "@/components/AdminLogin";
import React, { useState } from "react";
const ProfileUpdate = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [home, setHome] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { userAdmin } = useMyContext();
  function handleSubmit(event: any): void {}

  return (
    <div className="flex justify-center py-8 ">
      {userAdmin ? (
        <div className=" flex items-center justify-center tex-center bg-white rounded-3xl">
          <div className="p-4 rounded-3xl shadow-md w-80    ">
            <form>
              <div className="mb-4 ">
                <input
                  type="text"
                  className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                  placeholder="College"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                />
                </div>
                <div className="mb-4">
                <input
                  type="text"
                  className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                  placeholder="Home"
                  value={home}
                  onChange={(e) => setHome(e.target.value)}
                />
                </div>
                <div className="mb-4">
                <input
                  type="text"
                  className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                </div>
                <div className="mb-4">
                <input
                  type="email"
                  className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
              <div className="flex justify-center ">
                <button
                  type="button"
                  className=" flex hover:scale-95 justify-center mt-4 rounded-3xl text-sm   text-white hover:bg-gray-300 bg-primary px-8 py-2"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex-col text-center  ">
          <p className="text-xl my-2 underline">Profile Portal</p>
          <AdminLogin />
        </div>
      )}
    </div>
  );
};

export default ProfileUpdate;
