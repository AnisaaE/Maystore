const router = require("express").Router();
const path = require("path");
const User = require("../models/User");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }
  let check = await User.findOne({ email });
  if (check) {
    return res.status(400).json({ message: "Email already exists" });
  } else {
    try {
      const user = await User.create({ username, email, password });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
};
model,exports = {
  register
}