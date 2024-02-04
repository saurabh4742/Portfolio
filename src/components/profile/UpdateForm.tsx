import Loading from "@/app/loading";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const UpdateForm = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [home, setHome] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.put("https://saurabh-anands.vercel.app/api/profile", {
        name,
        college,
        home,
        phone,
        email,
      });
      setLoading(false);
      if (response.status == 200) {
        toast.success("Updated Succesfully");
      } else {
        toast.error("could not update");
      }
    } catch (error) {
      setLoading(false);
      toast.error("error while updating");
    }
  };
  return (
    <>
      {loading ? (
      <Loading/>
      ) : (
        <div className="p-4 rounded-3xl shadow-md w-80    ">
          <h2 className="text-2xl font-bold  mb-4 text-center">Update Profile</h2>
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
      )}
    </>
  );
};

export default UpdateForm;
