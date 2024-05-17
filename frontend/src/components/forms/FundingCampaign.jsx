import  { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetSingleCampaign from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { authContext } from "../../contexts/AuthContext";

const FundingCampaign = () => {
    const {user,token} = useContext(authContext);
    // console.log(user);
    const { id } = useParams();

    const { data:campaignData } = useGetSingleCampaign(
        `${BASE_URL}/campaigns/${id}`
      );

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      investorId: user._id,
      campaignId: id,
      amount: 0,      
    });
    
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
      const submitHandler = async (event) => {
      event.preventDefault();
      setLoading(true);
  
      try {
        const res = await fetch(`${BASE_URL}/investors/campaigns/funding`, {
          method: "post",
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
    <div>
    <section className="px-5 lg:px-0">
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
      Funding
        <span className="text-primaryColor">  {campaignData.title}   </span> 
      </h3>
      <form className="py-4 md:py-0" onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="number"
            placeholder="Enter Amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
            className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
          />
        </div>


        <div className="mt-7">
        <button type="submit" className="btn2  text-white w-full bg-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3 mt-0">
          { loading ? <HashLoader size={35} color="#fff" /> : 'Fund'}
        </button>
        </div>




      </form>
    </div>
  </section>
    </div>
  )
}

export default FundingCampaign
