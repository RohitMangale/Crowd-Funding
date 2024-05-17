import mongoose from "mongoose";

const InternSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"],required:true },
  role: {type: String,},
  phone: { type: Number },
  photo: {type: String,},
  
  country:{type:String},
  state:{type:String},
  city:{type:String},
  pincode: { type: Number},
  
  education: { type: String},
  qualification: {type:Number},
  resume: {type:String},
  
  receivedInternships: [{internshipId:{ type: mongoose.Types.ObjectId, ref: "Internship" }}],
  appliedInternships: [{internshipId:{ type: mongoose.Types.ObjectId, ref: "Internship" }}],

  
});

export default mongoose.model("Intern", InternSchema);
