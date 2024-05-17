import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import uploadImageToCLoudinary from "../../utils/uploadCloudinary";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

import "./Forms.css";
import Loading from "../Loader/Loading";
import { authContext } from "../../contexts/AuthContext";

const CreateInternship = () => {
    const { user, token, role } = useContext(authContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        jobTitle: "",
        company: "",
        location: "",
        mode: "offline",
        companydesc:"",
        jobdesc:"",
        skilldesc:"",
        duration: "",
        photo: selectedFile,
        startDate: "",
        stipend: 0,
        positions: 0,
        // qualification:"",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileInputChange = async (event) => {
        const file = event.target.files[0];

        const data = await uploadImageToCLoudinary(file);

        setPreviewURL(data.url);
        setSelectedFile(data.url);
        setFormData({ ...formData, photo: data.url });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(
                `${BASE_URL}/investors/${user._id}/internships/`,
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(formData),
                }
            );
            const { message } = await res.json();

            if (!res.ok) {
                throw new Error(message);
            }

            setLoading(false);
            toast.success(message);
            navigate("/");
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
                    <span className="text-primaryColor"> Internship </span>
                </h3>
                <form className="py-4 md:py-0" onSubmit={submitHandler}>
                    <div className="mb-5">
                        <p className="form_label">Job Title*</p>
                        <input
                            type="text"
                            placeholder="Job Title"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            required
                            autoFocus
                            className="form_input"
                        />
                    </div>
                    <div className="mb-5">
                        <p className="form_label">Company*</p>
                        <input
                            type="text"
                            placeholder="Company Name"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            className="form_input"
                        />
                    </div>

                                        <div className="mb-5">
                        <div className="grid grid-cols-3 gap-5 mb-[30px]">
                            <div>
                                <p className="form_label">Mode*</p>
                                <select
                                    name="mode"
                                    value={formData.mode}
                                    onChange={handleInputChange}
                                    className="form_input py-3.5"
                                    required
                                >
                                    <option value="Offline">Offline</option>
                                    <option value="Online">Online</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>

                            <div>
                                <p className="form_label">Starting Date*</p>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                    className="form_input"
                                    required
                                />
                            </div>

                            <div>
                                <p className=" form_label ">Duration</p>
                                <input
                                    type=" number  "
                                    placeholder="Months"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleInputChange}
                                    required
                                    className="form_input"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <div className="grid grid-cols-3 gap-5 mb-[30px]">

                            <div>
                                <p className="form_label">Location*</p>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Job Location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required

                                    className="form_input"
                                />
                            </div>
                            <div>
                                <p className="form_label">Postions*</p>
                                <input
                                    type="number"
                                    name="positions"
                                    value={formData.positions}
                                    onChange={handleInputChange}
                                    required

                                    className="form_input"
                                />
                            </div>
                            <div>
                                <p className="form_label">Stipend*</p>
                                <input
                                    type="number"
                                    name="stipend"
                                    value={formData.stipend}
                                    onChange={handleInputChange}
                                    required

                                    className="form_input"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="mb-5">
                    <p className="form_label">Company Description*</p>

                        <textarea
                            className=" border border-solid border-[#0066ff34] placeholder:text-textColor focus:outline outline-primaryColor w-full px-4 py-3 rounded-md "
                            rows="4"
                            required

                            name="companydesc"
                            placeholder="Write about the company..."
                            maxLength={300}
                            value={formData.companydesc}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="mb-5">
                    <p className="form_label">Internship Description*</p>

                        <textarea
                            className=" border border-solid border-[#0066ff34] placeholder:text-textColor focus:outline outline-primaryColor w-full px-4 py-3 rounded-md "
                            rows="4"
                            required

                            name="jobdesc"
                            placeholder="Write about the internship..."
                            maxLength={300}
                            value={formData.jobdesc}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="mb-5">
                    <p className="form_label">Who can apply*</p>

                        <textarea
                            className=" border border-solid border-[#0066ff34] placeholder:text-textColor focus:outline outline-primaryColor w-full px-4 py-3 rounded-md "
                            rows="4"
                            required

                            name="skilldesc"
                            placeholder="Write about the qualifications and skills required..."
                            maxLength={300}
                            value={formData.skilldesc}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <div className="mb-5 flex items-center gap-3">
                        {selectedFile && (
                            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColo: flex items-center justify-center">
                                <img src={previewURL} className="w-full rounded-full" />
                            </figure>
                        )}
                        <div className="relative w-[130px] h-[50px]">
                            <input
                                type="file"
                                required

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
                                Upload Logo
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
export default CreateInternship;
