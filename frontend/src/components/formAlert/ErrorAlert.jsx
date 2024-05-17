import React from 'react'
import './Alert.css'
const ErrorAlert = ({msg}) => {
  return (
    <div className="formError">
    <i className=" fa-solid fa-triangle-exclamation"></i>
    {msg}
    </div>
  )
}

export default ErrorAlert
