import React from 'react'
import './CamCard.css'
import ProgressBar from '../progressBar/ProgressBar'
import { NavLink } from 'react-router-dom';



const CamCard = ({ campaign,isOnDashboard }) => {

    const url = isOnDashboard ? `/campaignDetailsDB/${campaign._id}` : `/campaignDetails/${campaign._id}`

    function topercent(number) {
        if (isNaN(number)) {
          return 'Invalid input';
        }      
        const percent = (number * 100)/campaign.goal;      
        return percent.toFixed(2);
      }

      const target=topercent(campaign.amtCollected)
      
  return (
      <NavLink to={url}  className='camCard'>
          <div className="camImg" style={{ backgroundImage: `url(${campaign.photo})` }} />

          <div className="camDetails">
              <p className='camName' >{campaign.title}</p>
              <p className='para camDesc'>{campaign.desc}</p>
          </div>
          <div className="cambar">
              <ProgressBar percentage={target} />
              <div className="camValues">
              <p>Investors: {campaign.investors.length} </p>
              <p>Raised: ${campaign.amtCollected}</p>
              </div>
          </div>
      </NavLink>
  )
}

export default CamCard
