import React, { useContext } from 'react'
import './Banner.css'
import crowd from '../../assets/imgs/crowdfunsing.jpg'
import { NavLink } from 'react-router-dom'
import { authContext } from '../../contexts/AuthContext'
const Banner = () => {

  const {user,role,token} = useContext(authContext);


  return (
    <div className="banner-maindiv container">

    <div className="banner-onediv">
        <p className='subHeading' >EazzyFunzz</p>
        <h1 >Invest in Innovation!</h1>
        <p className='para' >
        Explore groundbreaking ideas. Connect visionaries with investors. Fuel innovation and growth.  
        </p>
        <NavLink to={`${token && user ? '/campaignsPage' : '/register' }`} className='btn' >Join Now</NavLink>
    </div>

    <div className="banner-twodiv">
    </div>
</div>
  )
}

export default Banner
