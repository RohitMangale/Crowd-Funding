import mongoose from "mongoose";

const FundraiserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"],required:true },
  role: {type: String,},
  phone: { type: Number },
  photo: { type: String },  

  country:{type:String},
  state:{type:String},
  city:{type:String},
  pincode: { type: Number},

  campaignsCreated: [{ type: mongoose.Types.ObjectId, ref: "CampaignsCreated" }],
  
});

export default mongoose.model("Fundraiser", FundraiserSchema);
