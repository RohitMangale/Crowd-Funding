import React from 'react'
import './Footer.css'

import footerLogo from '../../assets/imgs/logo.png'
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>

            <div className="container navTab">
                <div className="footerAbout">
                <div className="footerLogo">
                EAZZYFUNDZZ
                </div>
                <div className="para">
                    Discover the heartbeat of innovation and community spirit within our crowdfunding platform. 
                    </div>
                    <div className="footerSocial">
                        <IoLogoFacebook />
                        <IoLogoLinkedin />
                        <IoLogoInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div className="footerLinks">
                    <p className='subHeading'>Company</p>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/faq">faq</NavLink>
                    <NavLink to="/CreateInternship">create Internship</NavLink>
                    <NavLink to="/">Projects</NavLink>
                </div>
                <div className="footerLinks">
                    <p className='subHeading' >Company Services</p>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">FAQ</a>
                    <a href="">Projects</a>
                </div>
                <div className="footerLinks">
                    <p className='subHeading' >Check Out</p>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">FAQ</a>
                    <a href="">Projects</a>
                </div>


            </div>
            <div className="container footerLine">
                <div className="btm_links">
                <a href="">Terms & Conditions</a>
                <a href="">License</a>
                <a href="">Site Map</a>
                <a href="">Privacy</a>
                </div>
                <div className="btm_line">
                2024@EazzyFundzz</div>
            </div>

        </div>
    )
}

export default Footer
