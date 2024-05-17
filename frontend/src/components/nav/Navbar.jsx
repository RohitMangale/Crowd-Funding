/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import admin from '../../assets/imgs/admin.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {user,role,token} = useContext(authContext);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };


  return (
    
    <nav className="navbar">
      <div className="navCon">
        <NavLink to="/" className="logo">
          <div className="bigE text_colorBg">
          E
          </div>
          <div className="logoText">
          <div className="logoName">
          eazzyfundzz
          </div>
          <div className="logoTagline">
          FUNDING MADE EASY
          </div>
          </div>
        </NavLink>

        <div className={`navlinks ${isOpen ? 'open' : ''}`}>

          <NavLink to="/" className="links">Home</NavLink>
          <NavLink to="/campaignsPage" className="links">Campaigns </NavLink>
          <NavLink to="/aboutUs" className="links">About Us</NavLink>
          <NavLink to="/internMain" className="links">Internship</NavLink>          
          <NavLink to="/contactUs" className="links">Contact Us</NavLink>
          <button className="btn1 drawerbtn">Sign Up</button>
        </div>

       { token && user ? (
          <NavLink to={`${role === 'investor' ? '/investors/profile/me' : role === 'fundraiser' ? '/fundraisers/profile/me' : '/interns/profile/me'}`} className="userImg" >
          <img src={user?.photo}   alt="" />     
        </NavLink> 
        
     ) :(<div className="btns">
          <NavLink to="/login"  className="btn1">Login</NavLink>
        </div>)}

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar