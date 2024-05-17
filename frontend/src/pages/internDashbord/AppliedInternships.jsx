import React, { useContext } from 'react'

import { BASE_URL } from "../../config";
import getMyAppliedInternships from '../../hooks/useFetchData';
import { authContext } from '../../contexts/AuthContext';
import Blok from '../../components/Internship/Blok';
import InternshipBlock from '../../components/Internship/InternshipBlock';

const AppliedInternships = ({user}) => {



  // const { data:appInternships, loading, error } = getMyAppliedInternships(`${BASE_URL}/interns/appliedInternships/${user._id}`)
  // console.log(appInternships)


  return (
    <div>

      <div className=" w-full mt-10  grid grid-cols-1 ">
        {user.appliedInternships?.map(internship => (
          <InternshipBlock key={internship._id}  internship={internship}  isOnInternDashboard={true} />
        ))}
      </div>


    
  </div>
  )
}

export default AppliedInternships
