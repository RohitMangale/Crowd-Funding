import React, { useState } from 'react'
import './HomeFaq.css'
// import { accordionData } from '../../assets/data/faq';
import FAQ from '../faq/Accordian';
import faqImg from '../../assets/imgs/faq.png';
import { NavLink } from 'react-router-dom';

// import { FaPlus } from "react-icons/fa";

const HomeFaq = () => {

  const [faqs, setFaqs] = useState([
    {
      question:
        "How does crowdfunding work?",
      answer: "Contributors then pledge money to support the project, often receiving rewards or incentives based on their level of contribution. Once the funding goal is met within a specified timeframe, the project creator receives the funds and works towards fulfilling their project.",
      open: false

    },
    {
      question: "Is crowdfunding safe for contributors?",
      answer: "While crowdfunding offers exciting opportunities to support innovative projects and causes, it's essential to exercise caution and due diligence before contributing. Reputable crowdfunding platforms typically have measures in place to vet projects and creators, but there's always a risk of projects not delivering as promised.",
      open: false
    },
    {
      question: "What types of internship opportunities are available on the crowdfunding website's matching section?",
      answer:
        "Our internship matching section hosts a diverse range of opportunities across various industries and sectors. From tech startups to nonprofit organizations, you'll find internships spanning fields such as marketing, software development, social media management, graphic design, environmental conservation, and more. Whether you're seeking hands-on experience in a specific field or looking to explore different care",
      open: false
    },
   
    
    // {
    //   question:
    //     "How many questions does it take to makes a succesful FAQ Page?",
    //   answer: "This many!Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    //   open: false
    // }
  ]);


  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };



  return (

    <div className='container homeFaq'>
      <p className='subHeading'>Your Questions Answered</p>
      <p className="mainHeading">Insightful Inquiries: Navigating the Details</p>
      <div className="faqCenter">

        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
          <NavLink to="/faq" className='btn  mt-5   mx-auto ' >Know More</NavLink>

        </div>
        <div className="faqImg">
          <img src={faqImg} alt="" />
        </div>

      </div>

    </div>
  );
}

export default HomeFaq
