const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js'); // Update the path for User model
const sendEmail = require('../email/sendEmail.js');
const jwt = require('jsonwebtoken');

router.post('/register', async function (req, res) {
	try {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		const recipient = { username, email };
		console.log(`This was the password before the hash : ${password}`);

		// Hashing and salting password to store in the DB

		const salt = await bcrypt.genSalt(15); // creates a salt with 15 rounds
		const hash = await bcrypt.hash(password, salt);
		console.log(`This is the password after the hash ${hash}`);
		const user = new User({
			username,
			email,
			hash,
		});
		await user.save();

		// Creating unique link and sending verification email
		// This is the same code present in the /user-verification route
		// TODO - Decide wheter to replicate the code here,or make an api call to that route instead

		const secret = process.env.JWT_SECRET + user.hash;
		const payload = {
			id: user.id,
			email: user.email,
			requestTime: new Date().toISOString(),
		};

		const token = jwt.sign(payload, secret, { expiresIn: '15m' });
		const url = `http://localhost:3000/user-verification/${payload.id}/${token}`;
		sendEmail(recipient, 'verify-user', url);
		res.status(200).send({
			message: `User registered successfully!`,
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
