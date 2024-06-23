const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');
const crypto = require('crypto');
const { toASCII } = require('punycode');

router.post('/login', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const userInDb = await User.findOne({ email: email });
	if (!userInDb) {
		const randomString = Math.random().toString(36).slice(2);
		const randomCompare = crypto.randomBytes(60).toString('hex');
		// Spoof timing
		await bcrypt.compare(randomString, randomCompare);
		return res.status(401).json({ message: 'Invalid email or password' });
	}

	const isPasswordValid = await bcrypt.compare(password, userInDb.hash);

	if (!isPasswordValid) {
		console.log('The password was invalid');
		return res.status(401).json({ message: 'Invalid email or password' });
	}

	req.session.username = userInDb.username;
	req.session.save((err) => {
		console.log(err);
		if (err) return res.status(500).json({ message: 'Failed to save session' });
		console.log('User session updated');
		console.log(req.session);
		return res.status(200).json({ message: `Welcome, ${userInDb.username}!!` });
	});
});
module.exports = router;
