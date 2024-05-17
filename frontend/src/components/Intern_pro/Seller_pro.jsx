import React from 'react'
import './Intern_pro.css'
import InternPogo from '../../assets/intern-pogo.jpg'

const Seller_pro = () => {
  return (
    <div id="intern_pro">
        <div className="intern_pro">
            <div className="intern_pro_img">
                <img src='https://www.livecareer.com/wp-content/uploads/2020/09/give-an-example-of-a-time-you-did-something-wrong.jpg' alt="" />
            </div>
            <div className="intern_pro_info">
                <span>Sell on Confly Designs</span>
                <h1>Boost your sales with Confly Designs </h1>
                <p>Our job listings include opportunities spanning a variety of nonprofits, social-impact businesses, and corporate social responsibility (CSR) initiatives. <br /> From entry-level positions to executive roles, explore thousands of opportunities to find the perfect fit that aligns with your personal and professional values and goals.</p>
                
                <div className="uni_btn">
                        <a href='/' className='uni_button'>Contact us</a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Seller_pro