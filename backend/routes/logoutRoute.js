const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');

router.get('/logout', async (req, res) => {
	try {
		if (req.session.username) {
			console.log(req.session);
			req.session.destroy();
			res.status(200).json({ message: 'Logged out succefully!' });
		} else {
			console.log(req.session);

			res
				.status(400)
				.json({ message: 'An error occured while trying to log out.' });
		}
	} catch (err) {
		res
			.status(500)
			.json({ message: 'An error occured while processing the request.' });
		throw new Error(err);
	}
});

module.exports = router;
