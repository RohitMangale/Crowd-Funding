import express from "express";

import { authenticate, restrict } from "../auth/verifyToken.js";
import { campaignFunding, createInternship, deleteInvestor, getAllInvestors, getInvestorInternships, getInvestorProfile, getSingleInvestor, updateInternship, updateInvestor } from "../Controllers/investorController.js";

const router = express.Router();


router.get("/:id", getSingleInvestor);
router.get("/", getAllInvestors);
router.put("/:id", authenticate, restrict(["investor"]), updateInvestor);
router.delete("/:id", authenticate, restrict(["investor"]), deleteInvestor);
router.get("/:id/profile/me", authenticate, restrict(["investor"]), getInvestorProfile);
router.post("/campaigns/funding", authenticate, restrict(["investor"]), campaignFunding);
router.post("/:id/internships", authenticate, restrict(["investor"]), createInternship);
router.get("/myInternships/:id", authenticate, restrict(["investor"]), getInvestorInternships);
router.put("/:id/internships", authenticate, restrict(["investor"]), updateInternship);
// router.get("/profile/me", authenticate, restrict(["investor"]), getInvestorProfile);

export { router as investorRoute };