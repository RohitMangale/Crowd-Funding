/* eslint-disable no-unused-vars */
import './Block.css'
import { Link } from 'react-router-dom'

import Button from './Button'
import { formateDate } from '../../utils/formateDate'
const Blok = ({ internship, isOnInternDashboard }) => {



  return (
    <div className="block">
      <div className="status">
        <i className="fa-solid fa-arrow-trend-up"></i>
        <span>Actively Hiring</span>
      </div>
      <div className="heading">
        <div className="post"><h1>{internship.jobTitle}</h1></div>
        <div  className=' flex justify-between'  >
        <h2 className="company_name"> {internship.company}  </h2>
        <div className="company_name"><h2> {internship.location} </h2></div>
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
            <p> {formateDate(internship.startDate)} </p>
          </div>

        </div>
        <div className="start_date">
          <div className="logo">
            <i className="fa-regular fa-calendar"></i>
            <p>Duration</p>
          </div>
          <div className="sub-info">
            <p>{internship.duration} Months</p>
          </div>

        </div>
        <div className="start_date">
          <div className="logo">
            <i className="fa-regular fa-money-bill-1"></i>
            <p>Stipend</p>
          </div>
          <div className="sub-info">
            <p>₹{internship.stipend} </p>
          </div>

        </div>
      </div>


      <div className="btns">


        <Link to={`/internshipDetails/${internship._id}`} className='fade-btn' >Get Started</Link>

        {!isOnInternDashboard &&
          <Link to={`/internships/${internship._id}`} className="button">
            <div>Apply Now</div>
          </Link>
        }
      </div>


    </div>
  )
}

export default Blok