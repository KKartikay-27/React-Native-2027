import express from "express";
import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

// Login and SingUp

const router = express.Router();
// Sign up

router.post("/signup", async (req, res) => {
  //
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "User already exists with this email",
    });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = generateToken(user._id);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    },
  });
});

// Login

router.post("/login", (req, res) => {
  //
});

export default router;
