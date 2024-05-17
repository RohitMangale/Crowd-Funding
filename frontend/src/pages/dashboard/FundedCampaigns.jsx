import React from 'react'
import TableRow from './TableRow';



const FundedCampaigns = ({user}) => {
   

  
  return (
    <div>

    <div className="relative overflow-x-auto">
        <table className="  mt-10 max-w-[600px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Sr.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Campaign Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount
                    </th>
 
                </tr>
            </thead>
            <tbody>
            {user?.campaignsFunded.map((campaign,index) => (
              <TableRow key={index} campaign={campaign} index={index} /> 
            ))}

            </tbody>
        </table>
    </div>
    
    
</div>
  )
}

export default FundedCampaigns
