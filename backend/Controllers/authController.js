
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import InvestorSchema from "../models/InvestorSchema.js";
import FundraiserSchema from "../models/FundraiserSchema.js";
import InternSchema from "../models/InternSchema.js";

dotenv.config();
// --------------------------------------------- JWT TOKEN  --------------------------------------
// create secret key using require('crypto').randomBytes(256).toString('base64') in node teminal
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15d" }
  );
};

const register = async (req, res) => {
  const { email, password, name, gender, role,phone, photo} = req.body;

  try {
    let user = null;

    if (role === "investor") {
      user = await InvestorSchema.findOne({ email });
    } else if (role === "fundraiser") {
      user = await FundraiserSchema.findOne({ email });
    } else if (role === "intern") {
      user = await InternSchema.findOne({ email });
    }

    // chk if user exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "investor") {
      user = new InvestorSchema({
        email,
        password: hashPassword,
        name,
        gender,
        role,
        phone,
        photo,

      });
    }
    if (role === "fundraiser") {
      user = new FundraiserSchema({
        email,
        password: hashPassword,
        name,
        gender,
        role,
        phone,
        photo,

      });
    }
    if (role === "intern") {
      user = new InternSchema({
        email,
        password: hashPassword,
        name,
        gender,
        role,
        phone,
        photo,
      });
    }

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;
    const investor = await InvestorSchema.findOne({ email });
    const fundraiser = await FundraiserSchema.findOne({ email });
    const intern = await InternSchema.findOne({ email });

    if (investor) {
      user = investor;
    }
    if (fundraiser) {
      user = fundraiser;
    }
    if (intern) {
      user = intern;
    }

    // chk if user exists or not
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //compare password
    const isPasswordaMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordaMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    //get jwt token
    const token = generateToken(user);

    const { password,role, ...rest } = user._doc; // _doc mongoose property

    res.status(200).json({
      status: true,
      message: "Successfully login",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

export { register, login };
