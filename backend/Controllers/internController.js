import InternSchema from "../models/InternSchema.js";
import InternshipSchema from "../models/InternshipSchema.js";



export const updateIntern = async (req, res) => {
    const id = req.params.id;
  
    try {
      const updatedIntern = await InternSchema.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      ).select("-password");
      res.status(200).json({
        success: true,
        message: "Successfully Updated",
        data: updatedIntern,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: "Failed to update" });
    }
  };



  export const deleteIntern = async (req, res) => {
    const id = req.params.id;
  
    try {
      await InternSchema.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Successfully Deleted" });
    } catch (err) {
      res.status(400).json({ success: false, message: "Failed to delete" });
    }
  };


  
  export const getSingleIntern = async (req, res) => {
    const id = req.params.id;
  
    try {
      const intern = await InternSchema.findById(id)
        // .populate("reviews")
        .select("-password");
      res
        .status(200)
        .json({ success: true, message: "Found Intern", data: intern });
    } catch (err) {
      res.status(404).json({ success: false, message: "Intern not found" });
    }
  };
  
  export const getAllInterns = async (req, res) => {
    try {
      const { query } = req.query;
      let interns;
  
      if (query) {
        interns = await InternSchema.find({          
          $or: [
            { name: { $regex: query, $Options: "i" } },
          ],
        }).select("-password");
      } else {
        interns = await InternSchema.find().select(
          "-password"
        );
      }
  
      res
        .status(200)
        .json({ success: true, message: "Found Interns", data: interns });
    } catch (err) {
      res.status(404).json({ success: false, message: "Interns not found" });
    }
  };
  


  export const getInternProfile = async (req, res) => {
    const internId = req.userId;
    try {
      const intern = await InternSchema.findById(internId);
  
      if (!intern) {
        return res
          .status(404)
          .json({ success: false, message: "Intern not found" });
      }
  
      const { password, ...rest } = intern._doc;
      const internships = await InternshipSchema.find({ intern: internId });
  
      res
        .status(200)
        .json({
          success: true,
          message: "Profile info is getting",
          data: { ...rest, internships },
        });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          message:error.message,
        });
    }
  };
  


  export const applyInternship = async (req, res) => {
    const { internId, internshipId } = req.body;
  
    if (!internId || !internshipId ) {
      return res.status(400).json({ message: 'Missing required fields: investorId, campaignId' });
    }
  
    try {
      // Find the investor and campaign documents using their respective IDs
      const [intern, internship] = await Promise.all([
        InternSchema.findById(internId),
        InternshipSchema.findById(internshipId),
      ]);
  
      if (!intern || !internship) {
        return res.status(404).json({ message: 'intern or internship not found' });
      }
  

  
      // Check if investor has already funded this campaign
      const appliedInternship = intern.appliedInternships.find(
        (appliedInternship) => appliedInternship.internshipId.toString() === internshipId.toString()
      );
  
      if (appliedInternship) {
        return res.status(400).json({ message: 'Already applied to this internship' });
      }
  
      // Update investor's campaignsFunded array
      intern.appliedInternships.push({ internshipId });
  
      // Update campaign's investors array
      internship.appliedInternships.push({ internId });
  
      // Update campaign's amtCollected and potentially set completed to true

  
      // Save both updated documents (investor and campaign)
      await Promise.all([intern.save(), internship.save()]);
  
      res.status(200).json({ message: 'Applied to internship successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };




  export const getMyAppliedInternships = async (req, res) => {
    const internId = req.params.id; // Assuming user ID is stored in req.userId
    try {
      const intern = await InternSchema.findById(internId);
  
      if (!intern) {
        return res
          .status(404)
          .json({ success: false, message: "intern not found" });
      }  
      const appliedInternships = await InternshipSchema.find({ intern: internId });
      console.log(appliedInternships);
      res.status(200).json({
        success: true,
        message: "Applied internships fetched successfully",
        data: appliedInternships,
      });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({
        success: false,
        message: "Something went wrong, could not fetch campaigns",
      });
    }
  };
  





