import mongoose from "mongoose";

const InternAppliedSchema = new mongoose.Schema(
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

export default mongoose.model("InternshipApplied", InternAppliedSchema);
