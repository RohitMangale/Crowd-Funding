import React from 'react'

import { BASE_URL } from "../config.js";


import { Link, useNavigate, useParams} from 'react-router-dom'
import useGetSingleCampaign from "../hooks/useFetchData.jsx";
import Loading from "../components/Loader/Loading.jsx";
import Error from "../components/Error/Error.jsx";


const CampaginDetailsDB = () => {

    
    
    const navigate = useNavigate();
    const { id } = useParams();
    const { data:campaignData, loading, error } = useGetSingleCampaign(
        `${BASE_URL}/campaigns/${id}`
    );
    

  const handleNav =() => {
    navigate(`/updateCampaign/${id}`);
  }
    
  return (
    <section>

    {loading && !error && <Loading />}

    {!loading && error && <Error errMessage={error} />}

      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={campaignData.photo} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {campaignData.category} 
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                {campaignData.title} 
                </h3>

                <p className="text_para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                {campaignData.tagline} 
                </p>
              </div>
            </div>

            <div className="mt-[40px]">
              <div>
                <h3 className="text-[20px] leading-[30px] ☐ text-headingColor font-semibold flex items-center gap-2">
                  About of
                  <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    
                  {campaignData.title} 
                  </span>
                </h3>
                <p className="text_para">
                {campaignData.desc} 
                </p>
              </div>


            </div>
            <div className="mt-[40px]">
              <div>
                <h3 className="text-[20px] leading-[30px] ☐ text-headingColor font-semibold flex items-center gap-2">
                  Funds Received to
                  <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                    
                  {campaignData.title} 
                  </span>
                </h3>
                <div className="relative overflow-x-auto">
                <table className="  mt-10 max-w-[600px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr.No
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
         
                        </tr>
                    </thead>
                    <tbody>
                    {campaignData && campaignData?.investors?.map((funds,index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {index+1}
                        </th>

                        <td className="px-6 py-4">
                        {funds.amount}
    
                        </td>
    
                    </tr>
                    ))}
        
                    </tbody>
                </table>
            </div>
              </div>


            </div>
          </div>
          <div>
          <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">

          <div className="mt-[30px] ">
              <p className="text_para mt-0 font-semibold text-headingColor">
                  Details:
              </p>
              <ul className="mt-3">
                  <li className="flex items-center justify-between mb-2">
                      <p className="text-[15px] leading-6 text-textColor font-semibold">
                      Target
                      </p>
                      <p className="text-[15px] leading-6 text-textColor font-semibold">
                      ${campaignData.goal} 
                      </p>
                  </li>
                  <li className="flex items-center justify-between mb-2">
                      <p className="text-[15px] leading-6 text-textColor font-semibold">
                          Raised
                      </p>
                      <p className="text-[15px] leading-6 text-textColor font-semibold">
                      ${campaignData.amtCollected}$
                      </p>
                  </li>
                  <li className="flex items-center justify-between mb-2">
                      <p className="text-[15px] leading-6 text-textColor font-semibold">
                          Investors
                      </p>
                      <p className="text-[15px] leading-6 text-textColor font-semibold">
                      {campaignData?.investors?.length}
                      </p>
                  </li>
              </ul>
          </div>

          <button onClick={handleNav} className="btn2 rounded-md px-2 w-full ">Edit Campaign</button>
      </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampaginDetailsDB
