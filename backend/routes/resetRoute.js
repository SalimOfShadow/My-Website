const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');
const jwt = require('jsonwebtoken');
const sendEmail = require('../email/sendEmail.js');
const dotenv = require('dotenv');
dotenv.config({ path: './keys/keys.env' });

// https://www.youtube.com/watch?v=72JYhSoVYPc

router.post('/forgot-password', async (req, res) => {
	try {
		console.log('Recieving the request');
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
		const url = `http://localhost:3000/reset-password/${user.id}/${token}`;
		const recipient = {
			username: user.username,
			email: user.email,
		};
		sendEmail(recipient, 'reset-password', url);

		// sendEmail(recipient, url, "forgot-password")

		console.log(url);
		res.status(200).send({
			redirect: url,
			message: 'A password recovery link has been sent to your email',
		});
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
});

router.get('/reset-password/:id/:token', async (req, res) => {
	const { id, token } = req.params;
	const user = await User.findById(id);
	console.log(user);
	const secret = process.env.JWT_SECRET + user.hash;
	jwt.verify(token, secret, (err, decoded) => {
		if (err) {
			console.log('Invalid token');
			res.status(401).send({ message: 'Invalid token' });
		} else {
			res.status(200).send(user);
		}
	});
});

router.post('/reset-password/:id/:token', async (req, res) => {
	try {
		const user = await User.findById(req.body.id);

		if (!req.body.newPassword || !user || req.body.newPassword < 8) {
			console.log('Invalid password format');
			return res.status(400).send({ message: 'Invalid password' });
		}

		const newPassword = req.body.newPassword;
		const salt = await bcrypt.genSalt(15);
		const newHash = await bcrypt.hash(newPassword, salt);

		await user.updateOne({ hash: newHash });

		res.status(200).send({ message: 'Password updated successfully' });
		console.log('Password updated');
	} catch (err) {
		console.log(err);
		res.status(500).send({ message: 'Failed to update password' });
		console.log('Internal failure while updating password');
	}
});
module.exports = router;
