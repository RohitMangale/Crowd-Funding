import React from 'react'

const Error = ({errMessage}) => {
  return (
    <div className=' flex  items-center justify-center w-full h-full'>
        <div className=" to-headingColor text-[20px] leading-[30px]  font-semibold">
            {errMessage}
        </div>
      
    </div>
  )
}

export default Error
