import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import uploadImageToCLoudinary from "../../utils/uploadCloudinary";
import { BASE_URL,token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const InvestorProfile = ({user}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      photo: null,
      gender: "",
      phone: "",
    });
  
    useEffect(() => {
      
      setFormData({name:user.name,email:user.email,photo:user.photo,gender:user.gender,phone:user.phone});

      
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timeoutId);

    },[user]);
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleFileInputChange = async (event) => {
      const file = event.target.files[0];
  
      const data = await uploadImageToCLoudinary(file);
  
      setSelectedFile(data.url);
      setFormData({ ...formData, photo:data.url });
    };
  
    const submitHandler = async (event) => {
      event.preventDefault();
      setLoading(true);
  
      try {
        const res = await fetch(`${BASE_URL}/investors/${user._id}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData),
        });
        const { message } = await res.json();
  
        if (!res.ok) {
          throw new Error(message);
        }
  
        setLoading(false);
        toast.success(message);
        navigate("/investors/profile/me");
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
        setLoading(false);
      }
    };

  return (
    <div className=" mt-10">
    <form onSubmit={submitHandler}>
    <div className="mb-5">
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
      />
    </div>
    <div className="mb-5">
      <input
        type="email"
        placeholder="Enter Your Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        aria-readonly
        readOnly
        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
      />
    </div>
    <div className="mb-5">
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
      />
    </div>
    <div className="mb-5">
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
        required
      />
    </div>

    <div className="mb-5 flex items-center justify-between">
      
      <label className="text-headingColor font-bold text-[16px] leading-7">
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus: outline-none"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
    </div>

    <div className="mb-5 flex items-center gap-3">
      {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColo: flex items-center justify-center">
        <img src={formData.photo} className="w-full rounded-full" />
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
          {selectedFile? selectedFile.name: 'Upload Photo'}
        </label>
      </div>
    </div>

    <div className="mt-7">
      <button
      disabled={loading && true}
      type="submit"
      className="btn2  text-white w-full bg-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3 mt-0"
    >
      {loading? <HashLoader size={25} color="#fff" /> :'Update'}
      </button>
    </div>

   
  </form>

    </div>
  )
}

export default InvestorProfile