import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Routes
import { authRoute } from "./Routes/auth.js";
import { investorRoute } from "./Routes/investor.js";
import { FundraiserRoute } from "./Routes/fundraiser.js";
import { InternRoute } from "./Routes/intern.js";
import { CampaignRoute } from "./Routes/campaign.js";
import { internshipRoute } from "./Routes/internship.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  // allows any domain to access server , more restricted during deployment
  origin:"https://crowd-funding-frontend-2pcd1rcle.vercel.app/", 
  methods:["POST,GET,PUT,DELETE"],
  credentials:true
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/auth", authRoute);
app.use("/api/investors", investorRoute);
app.use("/api/fundraisers", FundraiserRoute);
app.use("/api/interns", InternRoute);
app.use("/api/campaigns", CampaignRoute);
app.use("/api/internships", internshipRoute);

// Error handling middleware (optional, example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

mongoose
  .connect("mongodb+srv://rohitmangale010:Dr@gn3al*MdB@clustercrowdoc.sktgybr.mongodb.net/") // specify db name as object or else it will save data in test db
  .then(() => {
    console.log("Connected to Mongoose");
    app.listen(port, () => {
      console.log(`Server Started on port ${port}`);
    });
  })
  .catch((err) => console.log(err));