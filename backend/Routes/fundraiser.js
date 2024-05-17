import express from "express";

import { authenticate, restrict } from "../auth/verifyToken.js";
import { createCampaign, deleteFundraiser, getAllFundraisers, getFundraiserProfile, getMyCampaigns, getSingleCampaign, getSingleFundraiser, updateCampaign, updateFundraiser } from "../Controllers/fundraiserController.js";

const router = express.Router();


router.get("/:id", getSingleFundraiser);
router.get("/", getAllFundraisers);
router.put("/:id", authenticate, restrict(["fundraiser"]), updateFundraiser);
router.delete("/:id", authenticate, restrict(["fundraiser"]), deleteFundraiser);
router.get("/:id/profile/me", authenticate, restrict(["fundraiser"]), getFundraiserProfile);
router.get("/campaigns/myCampaigns/:id", authenticate, restrict(["fundraiser"]), getMyCampaigns);
router.get("/campaigns/:id", authenticate, restrict(["fundraiser"]), getSingleCampaign);
router.post("/:id/campaigns/", authenticate, restrict(["fundraiser"]), createCampaign);
router.put("/campaigns/:id", authenticate, restrict(["fundraiser"]), updateCampaign);


export { router as FundraiserRoute };