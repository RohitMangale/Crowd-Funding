import React from 'react'

import getcampaignName from '../../hooks/useFetchData'
import { BASE_URL } from "../../config";

const TableRow = ({campaign,index}) => {


    
    const {data:campaignData,loading,error} = getcampaignName(`${BASE_URL}/campaigns/${campaign.campaignId}`)
    
  return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index+1}
                    </th>
                    <td className="px-6 py-4">
                    {campaignData.title}

                    </td>
                    <td className="px-6 py-4">
                    {campaign.amount}

                    </td>

                </tr>
  )
}

export default TableRow
