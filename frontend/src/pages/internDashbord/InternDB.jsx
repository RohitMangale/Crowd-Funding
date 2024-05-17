import React, { useContext, useState } from "react";
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { authContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AppliedInternships from "./AppliedInternships";
import RcvdInternships from "./RcvdInternships";
import InternProfile from "./InternProfile";

const InternDB = () => {

    const { user,dispatch } = useContext(authContext);
    const [tab, setTab] = useState("settings");
    
    
    const {data:userData,loading,error} = useGetProfile(`${BASE_URL}/interns/${user._id}/profile/me`)
    const navigate = useNavigate()
  
    // console.log(userData,'userdata');
  
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };
  
    const handleNav = () => {
      navigate('/internMain')
  };


  return (
    <section>
    <div className="max-w-[1170px] px-5 mx-auto">

    {loading && !error && <Loading/>}

    {!loading && error && <Error  errMessage={error}  />}
        {!loading && !error && (<div className="grid md: grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
                <div className="flex items-center justify-center">
                    <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor object-cover">
                        <img
                            src={userData.photo}
                            alt=""
                            className="w-full h-full rounded-full object-cover object-top"
                        />
                    </figure>
                </div>
                <div className="text-center mt-4">
                    <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                    {userData.name}
                    </h3>
                    <p className="text-textColor text-[15px] leading-6 font-medium ">
                    {userData.email}
                    </p>
                    <p className="text-textColor text-[15px] leading-6 font-medium ">
                    {userData.phone}
                      
                    </p>
                </div>

                <div className="mt-[50px] md:mt-[100px] ">
                <button
                        onClick={handleNav}
                        className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                      >
                        Apply Now
                      </button>
                    <button
                        onClick={handleLogout}
                        className="w-full bg-[#181A1E] mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
                    >
                        Logout
                    </button>
                    <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                        Delete account
                    </button>
                </div>
            </div>

            <div className="md: col-span-2 md:px-[30px)">
                <div>
                <button onClick={() => setTab('settings')} className={`${tab === 'settings' && 'bg-primaryColor text-white font-normal'}  p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor `} >
                Profile Settings
            </button>
                    <button onClick={() => setTab('appliedInternships')} className={`${tab === 'appliedInternships' && 'bg-primaryColor text-white font-normal'}  p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor `}
                    >
                       Applied Internships
                    </button>
                    <button onClick={() => setTab('rcvdInternships')} className={`${tab === 'rcvdInternships' && 'bg-primaryColor text-white font-normal'}  p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor `} >
                    Internships Received
                    </button>

                </div>

                {tab === 'appliedInternships' && <AppliedInternships  user={userData} />}
                {tab === 'rcvdInternships' && <RcvdInternships user={userData} />}
                {tab === 'settings' && <InternProfile user={userData} />}

            </div>
        </div>)}
    </div>
</section>
  )
}

export default InternDB
