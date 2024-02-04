import Loading from "@/app/loading";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const UpdateForm = () => {
  const [bgSrc, setBgSrc] = useState<string>("");
  const [liveUrl, setLiveUrl] = useState<string>("");
  const [prjTitle, setPrjTitle] = useState<string>("");
  const [gitSrc, setGitSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      const project={liveUrl,
        prjTitle,
        gitSrc,bgSrc}
      setLoading(true);
      const response = await axios.put("https://saurabh-anands.vercel.app/api/project", {
        project
      },{
      });
      setLoading(false);
      if (response.status === 200) {
        toast.success("Added Successfully");
      } else {
        toast.error("Could not update");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error while updating");
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-4 rounded-3xl shadow-md w-80  bg-white  ">
          <h2 className="text-2xl font-bold  mb-4 text-center">Add Project</h2>
          <form>
          <div className="mb-4">
              <input
                type="text"
                className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                placeholder="Background Url"
                value={bgSrc}
                onChange={(e) => setBgSrc(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                placeholder="Github Repository Url"
                value={gitSrc}
                onChange={(e) => setGitSrc(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                placeholder="Live Url"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                placeholder="Project Title"
                value={prjTitle}
                onChange={(e) => setPrjTitle(e.target.value)}
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
