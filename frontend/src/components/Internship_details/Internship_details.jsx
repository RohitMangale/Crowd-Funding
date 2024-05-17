import "./Internship_details.css";

import { BASE_URL } from "../../config.js";


import { Link, useParams} from 'react-router-dom'
import useGetSingleInternship from "../../hooks/useFetchData.jsx";
import Loading from "../Loader/Loading.jsx";
import Error from "../Error/Error.jsx";
import { formateDate } from "../../utils/formateDate.js";
const Internship_details = () => { 

  const { id } = useParams();
  const { data:internshipData, loading, error } = useGetSingleInternship(
    `${BASE_URL}/internships/${id}`
  );


  return (
    <div className="int-details">

      {loading && !error && <Loading />}

      {!loading && error && <Error errMessage={error} />} 

      {!loading && !error && (<div>
      <div className="heading">
      <h1>
        {internshipData.jobTitle} Internship in {internshipData.location} at  {internshipData.company} 
      </h1>
    </div>
    <div className="view_details">
      <div className="int-header">
        <div className="status">
          <i className="fa-solid fa-arrow-trend-up"></i>
          <span>Activily Hiring</span>
        </div>
        <div className="heading">
          <div className="post">
            <h2> {internshipData.jobTitle} </h2>
          </div>
          <div className="company_name">
            <h3>{internshipData.company} </h3>
          </div>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p> {internshipData.location} </p>
          </div>
        </div>
        <div className="info">
          <div className="start_date">
            <div className="logo">
              <i className="fa-solid fa-circle-play"></i>
              <p>Start Date</p>
            </div>
            <div className="sub-info">
              <p>{formateDate(internshipData.startDate)} </p>
            </div>
          </div>
          <div className="start_date">
            <div className="logo">
              <i className="fa-regular fa-calendar"></i>
              <p>Duration</p>
            </div>
            <div className="sub-info">
              <p>{internshipData.duration} Months</p>
            </div>
          </div>
          <div className="start_date">
            <div className="logo">
              <i className="fa-regular fa-money-bill-1"></i>
              <p>Stipend</p>
            </div>
            <div className="sub-info">
              <p>₹ {internshipData.stipend}/Month</p>
            </div>
          </div>
          <div className="start_date">
            <div className="logo">
              <i className="fa-solid fa-hourglass-end"></i>
              <p>Mode</p>
            </div>
            <div className="sub-info">
              <p>{internshipData.mode} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_company">

        <div className="about_info">
          <p>
            {internshipData.companydesc}
          </p>
        </div>
      </div>

      <div className="about_company">
        <div className="about_head">
          <h2>About the internship</h2>
        </div>
        <div className="text-container">
        {internshipData.jobdesc}

        </div>
      </div>

      <div className="about_company">
        <div className="about_head">
          <h2>Who can apply</h2>
        </div>
        <div className="text-container">
        {internshipData.skilldesc}

        </div>
      </div>


    </div>
      </div>)}

    </div>
  );
};

export default Internship_details;
