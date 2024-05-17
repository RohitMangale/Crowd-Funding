import express from "express";

import { authenticate, restrict } from "../auth/verifyToken.js";
import { applyInternship, deleteIntern, getAllInterns, getInternProfile,  getMyAppliedInternships, getSingleIntern, updateIntern } from "../Controllers/internController.js";

const router = express.Router();


router.get("/:id", getSingleIntern);
router.get("/", getAllInterns);
router.put("/:id", authenticate, restrict(["intern"]), updateIntern);
router.delete("/:id", authenticate, restrict(["intern"]), deleteIntern);
router.get("/:id/profile/me", authenticate, restrict(["intern"]), getInternProfile);
router.post("/internships/apply", authenticate, restrict(["intern"]),applyInternship );
export { router as InternRoute };
router.get("/appliedInternships/:id", authenticate, restrict(["intern"]), getMyAppliedInternships);