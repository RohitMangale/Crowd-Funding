import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authRoute} from "./Routes/auth.js";
import { investorRoute } from "./Routes/investor.js";
import { FundraiserRoute } from "./Routes/fundraiser.js";
import { InternRoute } from "./Routes/intern.js";
import { CampaignRoute } from "./Routes/campaign.js";
import { internshipRoute } from "./Routes/internship.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true, // allows any domain to access server , more restricted during deployment
};

// mongoose.set("strictQuery", false);
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB database is connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/auth", authRoute);
app.use("/api/investors", investorRoute);
app.use("/api/fundraisers", FundraiserRoute);
app.use("/api/interns", InternRoute);
app.use("/api/campaigns", CampaignRoute);
app.use("/api/internships", internshipRoute);

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     app.listen(port, () => {
//       console.log("Listening on port " + port);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

mongoose
  .connect(process.env.MONGO_URL) // specify db name as object or else it will save data in test db
  .then(() => {
    console.log("Connected to Mongoose");
    console.log("Server Started...");
  })
  .catch((err) => console.log(err));

app.listen(5000, "localhost", () => {
});

// app.listen(port, () => {
//   // connectDB();
//   console.log("Server in runnning on port " + port);
// });
