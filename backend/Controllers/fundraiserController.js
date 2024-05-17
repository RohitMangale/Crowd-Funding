import CampaignSchema from "../models/CampaignSchema.js";
import FundraiserSchema from "../models/FundraiserSchema.js";

export const updateFundraiser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedFundraiser = await FundraiserSchema.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedFundraiser,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: "Failed to update" });
  }
};

export const deleteFundraiser = async (req, res) => {
  const id = req.params.id;

  try {
    await FundraiserSchema.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully Deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleFundraiser = async (req, res) => {
  const id = req.params.id;

  try {
    const fundraiser = await FundraiserSchema.findById(id)
      // .populate("reviews")
      .select("-password");
    res
      .status(200)
      .json({ success: true, message: "Found Fundraiser", data: fundraiser });
  } catch (err) {
    res.status(404).json({ success: false, message: "Fundraiser not found" });
  }
};

export const getAllFundraisers = async (req, res) => {
  try {
    const { query } = req.query;
    let fundraisers;

    if (query) {
      fundraisers = await FundraiserSchema.find({
        $or: [{ name: { $regex: query, $Options: "i" } }],
      }).select("-password");
    } else {
      fundraisers = await FundraiserSchema.find().select("-password");
    }

    res
      .status(200)
      .json({ success: true, message: "Found Fundraisers", data: fundraisers });
  } catch (err) {
    res.status(404).json({ success: false, message: "Fundraisers not found" });
  }
};





export const getFundraiserProfile = async (req, res) => {
  const fundraiserId = req.params.id;
  try {
    const fundraiser = await FundraiserSchema.findById(fundraiserId);

    if (!fundraiser) {
      return res
        .status(404)
        .json({ success: false, message: "fundraiser not found" });
    }

    const { password, ...rest } = fundraiser._doc;
    const campaigns = await CampaignSchema.find({ fundraiser: fundraiserId });

    res
      .status(200)
      .json({
        success: true,
        message: "Profile info is getting",
        data: { ...rest,campaigns },
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: error.message,
      });
  }
};


export const getMyCampaigns = async (req, res) => {
  const fundraiserId = req.params.id; // Assuming user ID is stored in req.userId
  try {
    const fundraiser = await FundraiserSchema.findById(fundraiserId);

    if (!fundraiser) {
      return res
        .status(404)
        .json({ success: false, message: "Fundraiser not found" });
    }

    const campaigns = await CampaignSchema.find({ fundraiser: fundraiserId });

    res.status(200).json({
      success: true,
      message: "Campaigns fetched successfully",
      data: campaigns,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Something went wrong, could not fetch campaigns",
    });
  }
};


// -------------------------------------------------------------





export const createCampaign = async (req, res) => {
  const { title, tagline, desc, goal, type, category, photo } = req.body;
  const id = req.params.id;

  try {
    let campaign;
    campaign = await CampaignSchema.findOne({ title });
    if (campaign) {
      return res.status(400).json({ message: "Campaign already exists" });
    }
    campaign = new CampaignSchema({
      fundraiser: id,
      title,
      tagline,
      desc,
      goal,
      type,
      category,
      photo,
    });

    const savedCampaign = await campaign.save();

    await FundraiserSchema.findByIdAndUpdate(req.params.id, {
      $push: { campaignsCreated: savedCampaign._id },
    });
    res
      .status(200)
      .json({ success: true, message: "campaign successfully created" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getSingleCampaign = async (req, res) => {
  const id = req.params.id;

  try {
    const campaign = await CampaignSchema.findById(id);
    // .populate("reviews")
    res
      .status(200)
      .json({ success: true, message: "Found Campaign", data: campaign });
  } catch (err) {
    res.status(404).json({ success: false, message: "Campaign not found" });
  }
};




export const updateCampaign = async (req, res) => {
  const id = req.params.id?.toString();
  console.log(id);

  try {
    const updatedCampaign = await CampaignSchema.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedCampaign,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
