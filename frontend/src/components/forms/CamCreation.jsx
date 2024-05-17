import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import uploadImageToCLoudinary from "../../utils/uploadCloudinary";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

import "./Forms.css";
import Loading from "../Loader/Loading";
import { authContext } from "../../contexts/AuthContext";

const CamCreation = () => {

  const {user,token,role} = useContext(authContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    tagline: "",
    goal: "",
    desc: "",
    photo: selectedFile,
    type: "personal",
    category: "technology",
  });


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCLoudinary(file);

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo:data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/fundraisers/${user._id}/campaigns/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/fundraisers/profile/me");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[700px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-6">
          Create
          <span className="text-primaryColor"> Campaign </span>
        </h3>
        <form className="py-4 md:py-0"  onSubmit={submitHandler} >
          <div className="mb-5">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Tagline"
              name="tagline"
              value={formData.tagline}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>
          <div className="mb-10">
            <input
              type="Number"
              placeholder="Goal"
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>
          <div className="mb-5 flex items-center justify-between">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Type:
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus: outline-none"
            >
              <option value="personal">Personal </option>
              <option value="organization">Organization </option>
            </select>
          </label>
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus: outline-none"
            >
              <option value="technology">Technology</option>
              <option value="medical">Medical</option>
              <option value="education">Education</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
          <div className="mb-5">

            <textarea
              className=" border border-solid border-[#0066ff34] placeholder:text-textColor focus:outline outline-primaryColor w-full px-4 py-3 rounded-md "
              rows="6"
              name="desc"
              placeholder="Write about your campaign..."
              maxLength={700}
              value={formData.desc}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="mb-5 flex items-center gap-3">
                {selectedFile && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColo: flex items-center justify-center">
                  <img src={previewURL} className="w-full rounded-full" />
                </figure>}
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=" .jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer "
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

          <div className="mt-7">
            <button
              type="submit"
              className="btn2  text-white w-full bg-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3 mt-0"
            >
              {loading ? <HashLoader size={35} color="#fff" /> : "Create"}
            </button>
          </div>

         
        </form>
      </div>
    </section>
  );
};

export default CamCreation;
