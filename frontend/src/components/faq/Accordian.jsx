import React, { useState } from 'react';
// import { FaAngleDown } from 'react-icons/fa';

import './Accordian.css'

const Accordian = ({ faq, index, toggleFAQ }) => {
    return (
        <div
          className={"faq " + (faq.open ? "open" : "")}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question para">{faq.question}</div>
          <div className="faq-answer para ">{faq.answer}</div>
        </div>
      );
  };

export default Accordian
