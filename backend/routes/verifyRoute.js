const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');
const jwt = require('jsonwebtoken');
const sendEmail = require('../email/sendEmail.js');
const dotenv = require('dotenv');
const { verify } = require('crypto');
dotenv.config({ path: './keys/keys.env' });

// Call this endpoint when registering

router.post('/user-verification', async (req, res) => {
	try {
		const email = req.body.email;
		const user = await User.findOne({ email });
		if (!user) {
			res.status(404).send("Couldn't find a matching email");
			return;
		}
		const secret = process.env.JWT_SECRET + user.hash;
		const payload = {
			id: user.id,
			email: user.email,
			requestTime: new Date().toISOString(),
		};
		const token = jwt.sign(payload, secret, { expiresIn: '15m' });
		const url = `http://localhost:3000/user-verification/${user.id}/${token}`;
		const recipient = {
			username: user.username,
			email: user.email,
		};
		sendEmail(recipient, 'verify-user', url);
		console.log(url);
	} catch (err) {
		console.log(err);
	}
});

router.post('/user-verification/:id/:token', async (req, res) => {
	try {
		const { id, token } = req.params;
		const user = await User.findById(id);
		const secret = process.env.JWT_SECRET + user.hash;
		jwt.verify(token, secret, (err, decoded) => {
			if (err) {
				console.log('Invalid token');
				res.status(401).send({ message: 'Invalid token' });
			} else {
				res.status(200).send(user);
			}
		});
		console.log(id);
		console.log(token);
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
