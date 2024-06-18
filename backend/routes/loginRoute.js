const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');

router.get('/something', async (req, res) => {
	console.log('something');
	res.send('something');
});

router.post('/login', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const userInDb = await User.findOne({ email: email });
	const randomString = Math.random().toString(36).slice(2);
	if (!userInDb) {
		// Spoof timing
		await bcrypt.compare(
			randomString,
			'$2b$15$aXfRdLllF8DNFV74q1l5IePUg9CALRFhHco5s28MYJyf3scqBep3K' // Spoof the timing,use crypto.randomBytes(63)
		);
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
	// await userInDb.save();
});
module.exports = router;
