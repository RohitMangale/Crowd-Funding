import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { BASE_URL } from "../../config";
import getMyCampaigns from '../../hooks/useFetchData';
import CamCard from '../../components/campaignCard/CamCard';
import { useContext } from 'react';
import { authContext } from '../../contexts/AuthContext';


const MyCampaigns = () => {
    const num = 0;
    const {user} = useContext(authContext);
    const { data:campaigns, loading, error } = getMyCampaigns(`${BASE_URL}/fundraisers/campaigns/myCampaigns/${user._id}`)

    // console.log(campaigns);

  return (
    <div>


      {error && loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className=" w-full  grid grid-cols-2 ">
          {campaigns?.map(campaign => (
            <CamCard key={campaign._id}  campaign={campaign}  isOnDashboard={true} />
          ))}
        </div>
      )}

      {(!loading && !error && campaigns.length === num) && (<h2 className="mt-5  leading-7 text-[20px] font-semibold text-center text-primaryColor">
      You have not created any campaigns yet!
      </h2>
    )}
      
    </div>
  )
}

export default MyCampaigns
