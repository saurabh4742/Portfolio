import Loading from "@/app/loading";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const UpdateForm = () => {
  const [accomplishment, setAccomplishment] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.put(`/api/accomplishment`, {
        accomplishment
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
        <div className="p-4 bg-white rounded-3xl shadow-md w-80    ">
            <h2 className="text-2xl font-bold  mb-4 text-center">Add Accomplishment</h2>
          <form>
            <div className="mb-4 ">
              <input
                type="text"
                className="w-full border rounded-full bg-primarybackground px-3 py-2 text-center"
                placeholder="Title"
                value={accomplishment}
                onChange={(e) => setAccomplishment(e.target.value)}
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