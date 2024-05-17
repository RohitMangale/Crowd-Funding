import InternshipSchema from "../models/InternshipSchema.js";

export const getAllInternships = async (req, res) => {
  try {
    const { query } = req.query;
    let internships;

    if (query) {
      internships = await InternshipSchema.find({
        $or: [
          { jobTitle: { $regex: query, $options: "i" } }, // Case-insensitive search
          { company: { $regex: query, $options: "i" } }, // Uncomment for type filter
          { location: { $regex: query, $options: "i" } }, // Uncomment for category filter
          { mode: { $regex: query, $options: "i" } }, // Uncomment for category filter
        ],
      });
    } else {
      internships = await InternshipSchema.find();
    }

    res.status(200).json({ success: true, message: "Successful", data: internships });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(404).json({ success: false, message: error.message });
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