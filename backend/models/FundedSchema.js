import mongoose from "mongoose";

const FundedSchema = new mongoose.Schema(
  {
    fundraiser: {
      type: mongoose.Types.ObjectId,
      ref: "Fundraiser",
      required: true,
    },
    investor: {
      type: mongoose.Types.ObjectId,
      ref: "Investor",
      required: true,
    },
    amount:{type:Number,requires:true},
  },
  { timestamps: true }
);

export default mongoose.model("Funded", FundedSchema);
