import express from "express";
import { getAllInternships, getSingleInternship } from "../Controllers/internshipController.js";


const router = express.Router();


// router.get("/:id", getSingleIntern);
router.get("/", getAllInternships);
router.get("/:id", getSingleInternship);
// router.put("/:id", authenticate, restrict(["intern"]), updateIntern);
// router.delete("/:id", authenticate, restrict(["intern"]), deleteIntern);
// router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

export { router as internshipRoute };