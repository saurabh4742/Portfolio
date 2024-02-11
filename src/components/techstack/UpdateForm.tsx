import Loading from "@/app/loading";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const UpdateForm = () => {
  const [bgSrc, setBgSrc] = useState("");
  const [officialUrl, setOfficialUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      const techstack={bgSrc,officialUrl,alt}
      setLoading(true);
      const response = await axios.put(`${process.env.API_DOMAIN}api/techstack`, {
        techstack
      });
      setLoading(false);
      if (response.status == 200) {
        toast.success("Added Succesfully");
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
        <div className="p-4 rounded-3xl shadow-md w-80 bg-white    ">
          <h2 className="text-2xl font-bold  mb-4 text-center">Add Stack</h2>
          <form>
            
            <div className="mb-4 ">
              <input
                type="text"
                className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                placeholder="Background Source"
                value={bgSrc}
                onChange={(e) => setBgSrc(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                placeholder="Official Url"
                value={officialUrl}
                onChange={(e) => setOfficialUrl(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                placeholder="Title"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
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