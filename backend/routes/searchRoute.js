const express = require("express");
const router = express.Router();
const User = require("../models/userSchema.js"); // Update the path for User model

router.get("/api/users", async (req, res) => {
  console.log("req recieved");
  const { username, email } = await req.query;
  console.log(`${username} ${email}`);

  if (!username) {
    return res.status(400).json({ error: "Username parameter is missing" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email parameter is missing" });
  }
  try {
    const userByUsername = await User.find({ username }); // Query for user by username
    const userByEmail = await User.find({ email }); // Query for user by email
    if (userByUsername.length > 0 && userByEmail.length > 0) {
      // Check if user found by both username and email
      console.log("User found by both username and email");
      return res.status(409).json({
        error: "User already exists in the database",
        username,
        email,
      });
    }
    if (userByUsername.length > 0) {
      // Check if user found by username
      console.log("User found by username");
      return res
        .status(409)
        .json({ error: "username already present in the database", username });
    }
    if (userByEmail.length > 0) {
      // Check if user found by email
      console.log("user found by email");
      return res
        .status(409)
        .json({ error: "email already present in the database", email });
    }
    console.log("No user found");

    return res.status(201).json({ error: "User not present in the database" });
  } catch (error) {
    console.error("Error searching for user:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Sending Internal Server Error if there's an error in querying the database
  }
});
module.exports = router;
