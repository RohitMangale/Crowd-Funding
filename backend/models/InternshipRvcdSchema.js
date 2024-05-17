import mongoose from "mongoose";

const InternshipRcvdSchema = new mongoose.Schema(
  {
    investor: {
      type: mongoose.Types.ObjectId,
      ref: "Investor",
      required: true,
    },
    intern: {
      type: mongoose.Types.ObjectId,
      ref: "Intern",
      required: true,
    },

  },
  { timestamps: true }
);

export default mongoose.model("InternshipReceived", InternshipRcvdSchema);
