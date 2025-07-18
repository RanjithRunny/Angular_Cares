// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Optional: use bcrypt if passwords are hashed
// const bcrypt = require("bcryptjs");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Register Route
router.post("/register", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const existing = await User.findOne({ email, username });
    if (existing)
      return res
        .status(400)
        .json({ error: "Email or username already exists" });

    // Hash the password (optional but secure)
    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, password, username }); // Replace password with hashedPassword if hashing
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const user = await User.findOne({ email, username });
    if (!user)
      return res.status(401).json({ error: "Invalid email or password" });

    // If you hash passwords:
    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password === user.password;

    if (!isMatch)
      return res.status(401).json({ error: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
