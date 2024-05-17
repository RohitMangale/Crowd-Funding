import  { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getAllInternships from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { authContext } from "../../contexts/AuthContext";

const ApplyInternship = () => {

    const {user,token} = useContext(authContext);
    // console.log(user);
    const { id } = useParams();

    const { data:internshipData } = getAllInternships(
        `${BASE_URL}/internships/${id}`
      );

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      internId: user._id,
      internshipId: id,
    });
  
  
 
    const submitHandler = async (event) => {
      event.preventDefault();
      setLoading(true);
  
      try {
        const res = await fetch(`${BASE_URL}/interns/internships/apply`, {
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
        navigate("/interns/profile/me");
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
        setLoading(false);
      }
    };
  return (
    <div>
    <div>
    <section className="px-5 lg:px-0">
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className="text-headingColor  text-center text-[22px] leading-9 font-bold mb-10">
      Applying in {internshipData.company} in {internshipData.location} for
        <span className="text-primaryColor">  {internshipData.jobTitle}   </span> Internship 
      </h3>
      <form className="py-4 md:py-0" onSubmit={submitHandler}>
        
        <div className="mt-7">
        <button type="submit" className="btn2  text-white w-full bg-primaryColor text-[18px] leading-[30px] rounded-lg px-4 py-3 mt-0">
          { loading ? <HashLoader size={35} color="#fff" /> : 'Apply'}
        </button>
        </div>




      </form>
    </div>
  </section>
    </div>
    </div>
  )
}

export default ApplyInternship
