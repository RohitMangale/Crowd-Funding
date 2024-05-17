import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
  {
    fundraiser: {
      type: mongoose.Types.ObjectId,
      ref: "fundraiser",
      required: true,
    },
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    photo: { type: String },
    goal: { type: Number, required: true },
    desc: { type: String, required: true },
    type: { type: String, enum: ["personal", "organization"], required: true },
    category: { type: String, enum: ["technology", "medical", "education", "business"] },


    amtCollected: { type: Number, default: 0 },
    completed: { type: Boolean, default: false },


    investors: [
      {
        investorId: { type: mongoose.Types.ObjectId, required: true },
        amount: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", CampaignSchema);
