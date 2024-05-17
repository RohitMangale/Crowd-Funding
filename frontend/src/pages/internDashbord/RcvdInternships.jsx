import React from 'react'
import InternshipBlock from '../../components/Internship/InternshipBlock'

const RcvdInternships = ({user}) => {
  return (
    <div>
    <div className=" w-full mt-10  grid grid-cols-1 ">
    {user.receivedInternships?.map(internship => (
      <InternshipBlock key={internship._id}  internship={internship}  isOnInternDashboard={true} />
    ))}
  </div>
    </div>
  )
}

export default RcvdInternships
