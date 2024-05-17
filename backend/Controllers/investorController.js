import CampaignSchema from "../models/CampaignSchema.js";
import InternshipSchema from "../models/InternshipSchema.js";
import InvestorSchema from "../models/InvestorSchema.js";


export const updateInvestor = async (req, res) => {
    const id = req.params.id;
  
    try {
      const updatedInvestor = await InvestorSchema.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      ).select("-password");
      res.status(200).json({
        success: true,
        message: "Successfully Updated",
        data: updatedInvestor,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: "Failed to update" });
    }
  };



  export const deleteInvestor = async (req, res) => {
    const id = req.params.id;
  
    try {
      await InvestorSchema.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Successfully Deleted" });
    } catch (err) {
      res.status(400).json({ success: false, message: "Failed to delete" });
    }
  };


  
  export const getSingleInvestor = async (req, res) => {
    const id = req.params.id;
  
    try {
      const investor = await InvestorSchema.findById(id)
        // .populate("reviews")
        .select("-password");
      res
        .status(200)
        .json({ success: true, message: "Found Investor", data: investor });
    } catch (err) {
      res.status(404).json({ success: false, message: "Investor not found" });
    }
  };
  
  export const getAllInvestors = async (req, res) => {
    try {
      const { query } = req.query;
      let investors;
  
      if (query) {
        investors = await InvestorSchema.find({          
          $or: [
            { name: { $regex: query, $Options: "i" } },
          ],
        }).select("-password");
      } else {
        investors = await InvestorSchema.find().select(
          "-password"
        );
      }
  
      res
        .status(200)
        .json({ success: true, message: "Found Investors", data: investors });
    } catch (err) {
      res.status(404).json({ success: false, message: "Investors not found" });
    }
  };
  

  export const getInvestorProfile = async (req, res) => {
    const investorId = req.userId;
    try {
      const investor = await InvestorSchema.findById(investorId);
  
      if (!investor) {
        return res
          .status(404)
          .json({ success: false, message: "Investor not found" });
      }
  
      const { password, ...rest } = investor._doc;
      const fundedCampaigns = await CampaignSchema.find({
        investors: { $elemMatch: { investorId: investorId } }
      });
      const internships = await InternshipSchema.find({ investor: investorId });
  
      res
        .status(200)
        .json({
          success: true,
          message: "Profile info is getting",
          data: { ...rest,fundedCampaigns, internships },
        });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          message: "Something wend Wrong, Could not get Profile ",
        });
    }
  };
  






  // -----------------------------------campaigns----------------

  export const campaignFunding = async (req, res) => {
    const { investorId, campaignId, amount } = req.body;
  
    if (!investorId || !campaignId || !amount) {
      return res.status(400).json({ message: 'Missing required fields: investorId, campaignId, amount' });
    }
  
    try {
      // Find the investor and campaign documents using their respective IDs
      const [investor, campaign] = await Promise.all([
        InvestorSchema.findById(investorId),
        CampaignSchema.findById(campaignId),
      ]);
  
      if (!investor || !campaign) {
        return res.status(404).json({ message: 'Investor or campaign not found' });
      }
  
      // Check if campaign is already completed
      if (campaign.completed) {
        return res.status(400).json({ message: 'Campaign is already completed and cannot be funded' });
      }
  
      // Check if investor has already funded this campaign
      const existingInvestment = investor.campaignsFunded.find(
        (fundedCampaign) => fundedCampaign.campaignId.toString() === campaignId.toString()
      );
  
      if (existingInvestment) {
        return res.status(400).json({ message: 'Investor already funded this campaign' });
      }
  
      // Update investor's campaignsFunded array
      investor.campaignsFunded.push({ campaignId, amount });
  
      // Update campaign's investors array
      campaign.investors.push({ investorId, amount });
  
      // Update campaign's amtCollected and potentially set completed to true
      const numericAmount = Number(amount);   
      campaign.amtCollected += numericAmount;
      campaign.completed = campaign.amtCollected >= campaign.goal;
  
      // Save both updated documents (investor and campaign)
      await Promise.all([investor.save(), campaign.save()]);
  
      res.status(200).json({ message: 'Campaign funding successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  


  export const createInternship = async (req, res) => {
    const { jobTitle, company, location, companydesc,jobdesc,skilldesc, photo, startDate, duration,stipend,positions,mode } = req.body;
    const id = req.params.id;
  
    try {
      let internship;
      internship = new InternshipSchema({
        investor: id,
        jobTitle, company, location,companydesc,jobdesc,skilldesc, photo, startDate, duration,stipend,positions,mode,
      });
  
      const savedInternship = await internship.save();
  
      await InvestorSchema.findByIdAndUpdate(req.params.id, {
        $push: { InternshipsCreated: savedInternship._id },
      });
      res
        .status(200)
        .json({ success: true, message: "Internship successfully created" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  


  export const getSingleInternship = async (req, res) => {
    const id = req.params.id;
  
    try {
      const internship = await InternshipSchema.findById(id);
      // .populate("reviews")
      res
        .status(200)
        .json({ success: true, message: "Found Internship", data: internship });
    } catch (err) {
      res.status(404).json({ success: false, message: "Internship not found" });
    }
  };

  export const updateInternship = async (req, res) => {
    const id = req.params.id;
  
    try {
      const updatedInternship = await InternshipSchema.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Successfully Updated",
        data: updatedInternship,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: "Failed to update" });
    }
  };



  export const getInvestorInternships = async (req, res) => {
    // Validate investor ID format
    const investorId  = req.params.id;
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ message: 'Invalid investor ID' });
    // }
  
    try {
      // Find the investor by ID
      const investor = await InvestorSchema.findById(investorId);
      if (!investor) {
        return res.status(404).json({ message: 'Investor not found' });
      }
  
      // Efficiently fetch internships using aggregation
      // const internships = await InternshipSchema.aggregate([
      //   {
      //     $match: {
      //       investor: mongoose.Types.ObjectId(id),
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: 'investors', // Foreign collection
      //       localField: 'investor', // Local field in InternshipSchema
      //       foreignField: '_id', // Foreign field in InvestorSchema
      //       as: 'investorDetails', // Name for the joined data
      //     },
      //   },
      //   {
      //     $unwind: '$investorDetails', // Deconstruct the investorDetails array
      //   },
      //   {
      //     $project: {
      //       _id: 1, // Include internship ID
      //       jobTitle: 1,
      //       company: 1,
      //       location: 1,
      //       companydesc: 1,
      //       jobdesc: 1,
      //       skilldesc: 1,
      //       photo: 1,
      //       startDate: 1,
      //       duration: 1,
      //       stipend: 1,
      //       positions: 1,
      //       mode: 1,
      //       applied: 1,
      //       hired: 1,
      //       createdAt: 1, // Include creation timestamp
      //       updatedAt: 1, // Include update timestamp
      //       investorName: '$investorDetails.name', // Project investor name from joined data
      //     },
      //   },
      // ]);
      const internships = await InternshipSchema.find({ investor:investorId });

      // console.log(internships + "get My Internships");
      res.status(200).json({ success: true,message: "Internships fetched successfully", internships });
    } catch (error) {
      console.error(error);
      res.status(500).json({success: false, message: 'Server error' });
    }
  };








