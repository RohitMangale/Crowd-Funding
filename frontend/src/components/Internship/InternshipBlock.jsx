import React from 'react'
import './Block.css'


import { BASE_URL } from "../../config";
import useFetchData from '../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import { formateDate } from '../../utils/formateDate';


const InternshipBlock = ({internship,isOnInternDashboard}) => {
    const { data:internshipData, loading, error } = useFetchData(`${BASE_URL}/internships/${internship.internshipId}`)
  return (
      <div>
        <div className="block">
            <div className="status">
                <i className="fa-solid fa-arrow-trend-up"></i>
                <span>Actively Hiring</span>
            </div>
            <div className="heading">
            <div className="post"><h1>{internshipData.jobTitle}</h1></div>
            <div  className=' flex justify-between'  >
            <h2 className="company_name"> {internshipData.company}  </h2>
            <div className="company_name"><h2> {internshipData.location} </h2></div>
          </div>
            <div className="location">
            </div>           
    
          </div>
            <div className="info">
                    <div className="start_date">
                        <div className="logo">
                          <i className="fa-solid fa-circle-play"></i>
                        <p>Start Date</p>
                        </div>
                        <div className="sub-info">
                          <p> {formateDate(internshipData.startDate)} </p>
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
                          <p>₹{internshipData.stipend} </p>
                        </div>
    
                    </div>
                </div>
    
    
                <div className="btns">
                  
                  
                  <Link to={`/internshipDetails/${internship.internshipId}`} className='fade-btn' >Get Started</Link>
                  
    
                  {!isOnInternDashboard && <Link to="/login" className="button">
                      <div>Apply Now</div>
                  </Link>}
    
                </div>
                
    
        </div>
    </div>
  )
}

export default InternshipBlock
