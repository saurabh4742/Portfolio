import { useMyContext } from "@/ContextProvider/MyContext";
import React, { useState } from "react";
import toast from "react-hot-toast";
const AdminLogin = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const {setUserAdmin } = useMyContext();
  function handleLogin(event: any): void {
    if(username==process.env.USERNAME && password==process.env.PASSWORD){
      toast.success("Welcome Saurabh!")
      setUserAdmin({exist:true})
    }
    else{
      toast.error("Unauthorised")
    }
  }

  return (
    <div className=" flex items-center justify-center bg-white rounded-3xl">
    <div className="p-4 rounded-3xl shadow-md w-80    ">
      <h2 className="text-2xl font-bold  mb-4 text-center">Credentials</h2>
      <form>
        <div className="mb-4 ">
          <input
            type="text"
            id="text"
            className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center ">
        <button
          type="button"
          className=" flex hover:scale-95 justify-center mt-4 rounded-3xl text-sm   text-white hover:bg-gray-300 bg-primary px-8 py-2"
          onClick={handleLogin}
        >
          Authorize
        </button>
        </div>
        
      </form>
    </div>
  </div>
  );
};

export default AdminLogin;
