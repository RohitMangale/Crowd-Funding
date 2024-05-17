/* eslint-disable react/no-unescaped-entities */
import './Intern_pro.css'
// import InternPogo from '../../assets/imgs/internshipImg/intern_pogo.jpg'
// import homeAboutImg from '../../assets/imgs/headerImg.png'
const Intern_pro = () => {
  return (
    <div className='homeabout container' >
    <div className="homeabout-left">
        <img src='https://www.livecareer.com/wp-content/uploads/2020/09/give-an-example-of-a-time-you-did-something-wrong.jpg' alt="" />
    </div>

    <div className="homeabout-right">
        <p className="subHeading">
        Find & Apply for Great Opportunities.
        </p>
        <p className="mainHeading">
        Your Internship Starts Here.
        </p>
        <p className='para'>
        We're passionate about connecting talented students with incredible companies for mutually beneficial internship experiences. Our platform streamlines the search process, offering a diverse range of internships across various industries and locations. Whether you're a highly motivated student seeking real-world experience or a company looking to invest in the future's workforce, you've come to the right place. Let's unlock your potential, together.
        </p>

        
        {/* <p className="btn">Know More</p> */}

    </div>

</div>
  )
}

export default Intern_pro