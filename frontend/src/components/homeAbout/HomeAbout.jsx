/* eslint-disable react/no-unescaped-entities */
import './HomeAbout.css'
import homeAboutImg from '../../assets/imgs/headerImg.png'
import { NavLink } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div className='homeabout container' >
      <div className="homeabout-left">
        <img src={homeAboutImg} alt="" />
      </div>

      <div className="homeabout-right">
        <p className="subHeading">
          What we do?
        </p>
        <p className="mainHeading">
          Empowering Dreams Through Collective Support
        </p>
        <p className='para'>
          At Eazzyfundzz, we believe in the power of collective support to turn dreams into reality. Our platform is a hub of inspiration, where individuals come together to make a difference in each other's lives.
        </p>
        <p className='para'>

          Whether you're a creator seeking funding for your project or a supporter looking to contribute to meaningful causes, we provide a space where dreams are nurtured and aspirations are realized.
        </p>
        <p className='para'>
          Join us on this journey of empowerment and community, where every contribution counts towards building a brighter future for all.

        </p>

        <NavLink to="/aboutUs" className="btn">Know More</NavLink>



      </div>

    </div>
  )
}

export default HomeAbout
