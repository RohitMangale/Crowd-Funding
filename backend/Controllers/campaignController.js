import CampaignSchema from "../models/CampaignSchema.js";
import Campaign from "../models/CampaignSchema.js";
import FundraiserSchema from "../models/FundraiserSchema.js";
import InternSchema from "../models/InternSchema.js";
import InvestorSchema from "../models/InvestorSchema.js";

// get all Campaigns
export const getAllCampaigns = async (req, res) => {
  try {
    const { query } = req.query;
    let campaigns;

    if (query) {
      campaigns = await CampaignSchema.find({
        $or: [
          { title: { $regex: query, $options: "i" } }, // Case-insensitive search
          { type: { $regex: query, $options: "i" } }, // Uncomment for type filter
          { category: { $regex: query, $options: "i" } }, // Uncomment for category filter
        ],
      });
    } else {
      campaigns = await CampaignSchema.find({ completed: "false" });
    }

    res.status(200).json({ success: true, message: "Successful", data: campaigns });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(404).json({ success: false, message: error.message });
  }
};

  
export const getSingleCampaign = async (req, res) => {
    const id = req.params.id;
  
    try {
      const campaign = await CampaignSchema.findById(id)
        // .populate("reviews")
        ;
      res
        .status(200)
        .json({ success: true, message: "Found Campaign", data: campaign });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  };




