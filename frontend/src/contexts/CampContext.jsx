import { createContext, useState } from "react";

export const CampaignContext = createContext();

const CampaignProvider  = ({children}) => {
    const [campaigns,setCampaigns] = useState([]);

    return(
        <CampaignContext.Provider value={{campaigns,setCampaigns}}>
            {children}
        </CampaignContext.Provider>
    );
};

export default CampaignProvider;
