/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from "react";
import "./Internship.css";
import Blok from "./Blok";
import Select from "react-select";
import ErrorAlert from "../formAlert/ErrorAlert";
import Error from "../Error/Error";
import Loading from "../Loader/Loading";
import { BASE_URL } from "../../config.js";
import useGetInternships from "../../hooks/useFetchData.jsx";



  const Internship = () => {



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
  


    const { data:internshipData, loading, error } = useGetInternships(
      `${BASE_URL}/internships?query=${debounceQuery}`
    );
  

  return (
    <div className="internship_p">

      
      <div className="internHeader">
      <div className="internCont">

        <div className="internPara ">
          <h1 className="mainHeading">Launch Your Future, Today!</h1>
          <p> Find and Land Your Dream Internship.</p>
          <p>  Get real-world experience and kickstart your career. It's simple - find the perfect fit and apply today!</p>




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

      <div className="blogs example">

      {loading && !error && <Loading />}

      {!loading && !error && !internshipData && <ErrorAlert msg={"No internships created yet"}/>}
        
      {!loading && error && <Error errMessage={error} />}

      {!loading && !error && internshipData.map(internship => (
                    <div  key={internship._id} className="carousel-cell">
                        <Blok internship={internship} isOnInternDashboard={false} />
                    </div>
                ))}
          

        


      </div>
    </div>
  );
};

export default Internship;
