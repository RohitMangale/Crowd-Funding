import './HomeSlider.css'

import Campaigns from '../../assets/data/campaignsData'
import CamCard from '../campaignCard/CamCard'
import { BASE_URL } from "../../config.js";
import Flickity from 'react-flickity-component'; // Import Flickity directly as an ES module
import Loading from "../Loader/Loading";
import Error from "../Error/Error";
import ErrorAlert from "../formAlert/ErrorAlert.jsx";
import useGetCampaigns from "../../hooks/useFetchData.jsx";
import { NavLink } from 'react-router-dom';


const flickityOptions = {
    initialIndex: 2,
    prevNextButtons: false,
    pageDots: false,
    draggable: true,
    freeScroll: true,
    wrapAround: false,
    contain: true,

};


const HomeSlider = () => {


    const { data:campaignData, loading, error } = useGetCampaigns(
        `${BASE_URL}/campaigns`
      );


    return (
        <div className="homeCarousel container">

            <div className="subHeading">Offerings that have raised the most money in the last few days</div>
            <div className="para"></div>
            {loading && !error && <Loading />}

            {!loading && !error && !campaignData && <ErrorAlert msg={"No campaigns created yet"}/>}
              
            {!loading && error && <Error errMessage={error} />}

            {!loading && !error && 
               ( <Flickity
                className={'carousel container'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate={true} // Add curly braces for boolean value
                static={false} // Add curly braces for boolean value
            >

      
            {campaignData.map(campaign => (
                          <div  key={campaign._id} className="carousel-cell">
                              <CamCard isOnDashboard={false} campaign={campaign} />
                          </div>
                      ))}
                



            </Flickity>)}
        <NavLink  to="/campaignsPage" className="btn mt-10 mx-auto">View More</NavLink>

        </div>

    );
}



export default HomeSlider
