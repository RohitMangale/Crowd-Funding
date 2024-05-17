/* eslint-disable no-unused-vars */
import './Block.css'
import './Button.css'
import {Link, useNavigate} from 'react-router-dom'

const BlockForIndus = (props) => {




  return (
    <div className="block">
        <div className="status">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <span>Activily Hiring</span>
        </div>
        <div className="heading">
            <div className="post"><h1>Web Developer</h1></div>
            <div className="company_name"><h2>Freshworks</h2></div>
            <div className="location">
                <i className="fa-solid fa-location-dot"></i>  
                <p>Mumbai</p>         
            </div>
            
        </div>
        <div className="info">
                <div className="start_date">
                    <div className="logo">
                    <i className="fa-solid fa-circle-play"></i>
                    <p>Start Date</p>
                    </div>
                    <div className="sub-info">
                      <p>Immediately</p>
                    </div>

                </div>
                <div className="start_date">
                    <div className="logo">
                    <i className="fa-regular fa-calendar"></i>
                    <p>Duration</p>
                    </div>
                    <div className="sub-info">
                      <p>6 Month</p>
                    </div>

                </div>
                <div className="start_date">
                    <div className="logo">
                    <i className="fa-regular fa-money-bill-1"></i>
                    <p>Stipend</p>
                    </div>
                    <div className="sub-info">
                      <p>₹ 10,000/Month</p>
                    </div>

                </div>
            </div>


            <div className="btns">
              
              
              <Link className='fade-btn' >View Details</Link>
              

              <div className="button delete" >
                  <div>Delete</div>
              </div>

            </div>
            

    </div>
  )
}

export default BlockForIndus