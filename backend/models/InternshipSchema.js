import mongoose from "mongoose";

const InternshipSchema = new mongoose.Schema(
  {
    investor: {
      type: mongoose.Types.ObjectId,
      ref: "Investor",
      required: true,
    },

    jobTitle:{type:String,required:true},
    company:{type:String,required:true},
    location:{type:String,required:true},
    companydesc:{type:String,required:true},
    jobdesc:{type:String,required:true},
    skilldesc:{type:String,required:true},
    photo:{type:String,required:true},
    startDate:{type:Date,required:true},

    duration: { type: Number, required: true },
    stipend: { type: Number, required: true },
    positions:{ type:Number,required:true},
    mode:{type:String,required:true},
    
    applied:{type:Number,default:0},
    hired:{type:Number,default:0},
    
    appliedInternships: [{internId:{ type: mongoose.Types.ObjectId, ref: "Intern" }}],
    receivedInternships: [{internId:{ type: mongoose.Types.ObjectId, ref: "Intern" }}],
  },
  { timestamps: true }
);

export default mongoose.model("Internship", InternshipSchema);
