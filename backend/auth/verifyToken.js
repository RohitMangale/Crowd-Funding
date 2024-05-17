import jwt from "jsonwebtoken";
import InvestorSchema from "../models/InvestorSchema.js";
import FundraiserSchema from "../models/FundraiserSchema.js";
import InternSchema from "../models/InternSchema.js";

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token,authorization denied" });
  }
  try {
    const token = authToken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Toke expired" });
    }
    return res.status(401).json({ success: false, message: "Invalid Token" });
    console.log(error);
  }
};



export const restrict = roles => async (req,res,next) => {
    const userId =  req.userId;

    let user;

    const investor = await InvestorSchema.findById( userId );
    const fundraiser = await FundraiserSchema.findById( userId );
    const intern = await InternSchema.findById( userId);

    if (investor) {
      user = investor;
    }
    if (fundraiser) {
      user = fundraiser;
    }
    if (intern) {
      user = intern;
    }

    console.log(user);

    // chk if user exists or not
    if (user) { // Check if user exists
      if (!roles.includes(user.role)) {
          return res.status(401).json({ success: false, message: "You're not authorized" });
      }
  } else {
      // Handle case where user is not found (e.g., return 404)
      return res.status(404).json({ success: false, message: "User not found" });
  }

    next();
}















