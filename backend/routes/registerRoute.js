const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js'); // Update the path for User model

router.post('/register', async function (req, res) {
	try {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		const recipient = { username, email };
		console.log(`This was the password before the hash : ${password}`);

		// hashing and salting password to store in the DB

		const salt = await bcrypt.genSalt(15); // creates a salt with 15 rounds
		const hash = await bcrypt.hash(password, salt);
		console.log(`This is the password after the hash ${hash}`);
		const newUser = new User({
			username,
			email,
			hash,
		});
		await newUser.save();

		res.send({
			message: `Credentials recieved,this is the hashed password : ${hash} `,
		});
	} catch (error) {
		console.error(error);
		if (error.code === 11000 && error.keyPattern.username) {
			return res.status(409).json({
				error: `The username you have provided is already registered.`,
			});
		} else if (error.code === 11000 && error.keyPattern.email) {
			// MongoDB error code for duplicate key error and keyPattern for username
			return res.status(409).json({
				error: `The email you have provided is already registered.`,
			});
		} else {
			return res.status(500).json({
				error: `An error occurred during registration.`,
			});
		}
	}
});
module.exports = router;
