import express from "express";

import { authenticate, restrict } from "../auth/verifyToken.js";
import {  getAllCampaigns, getSingleCampaign } from "../Controllers/campaignController.js";

const router = express.Router();


// router.get("/:id", getSingleIntern);
router.get("/", getAllCampaigns);
router.get("/:id", getSingleCampaign);
// router.put("/:id", authenticate, restrict(["intern"]), updateIntern);
// router.delete("/:id", authenticate, restrict(["intern"]), deleteIntern);
// router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

export { router as CampaignRoute };