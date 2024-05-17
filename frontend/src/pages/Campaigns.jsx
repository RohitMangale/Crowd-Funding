/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Select from "react-select";
import { BASE_URL } from "../config.js";
import Campaigns from "../assets/data/campaignsData";
import useGetCampaigns from "../hooks/useFetchData.jsx";

import Loading from "../components/Loader/Loading";
import Error from "../components/Error/Error";
import CamCard from "../components/campaignCard/CamCard";
import ErrorAlert from "../components/formAlert/ErrorAlert.jsx";
const CampaignsPage = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query)
    },700)

    return () => clearTimeout(timeout);
  },[query])

  const {
    data: campaignData,
    loading,
    error,
  } = useGetCampaigns(`${BASE_URL}/campaigns?query=${debounceQuery}`);
  // console.log(campaignData);


  return (
    <div className="internship_p">
      <div className="internHeader">
        <div className="internCont">
          <div className="internPara ">
            <h1 className="mainHeading">
              Explore projects seeking support & turn yours into reality.
            </h1>
            <p>
              Whether you're a budding entrepreneur, a passionate artist, or a
              community leader with a game-changing project, we connect you with
              a global audience of potential supporters.
            </p>
          </div>
        </div>
      </div>

      <div className="mainfilters">
        <div className="container text-center">
          <div className="max-w-[700px] mt-[30px] mx-auto rounded-md flex items-center justify-between">
            <input
              type="text"
              placeholder="Search here"
              value={query}
              onChange={e=> setQuery(e.target.value)}
              className="w-full rounded-md px-2 py-1 outline focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            />
            <button
              type="submit"
              onClick={handleSearch}
              className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="blogs example lift">
        {loading && !error && <Loading />}

        {!loading && !error && !campaignData && (
          <ErrorAlert msg={"No campaigns created yet"} />
        )}

        {!loading && error && <Error errMessage={error} />}

        {!loading &&
          !error &&
          campaignData.map((campaign) => (
            <div key={campaign._id}>
              <CamCard  campaign={campaign} isOnDashboard={false} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CampaignsPage;
