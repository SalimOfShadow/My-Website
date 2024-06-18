const express = require('express');
const router = express.Router();
const User = require('../models/userSchema.js'); // Update the path for User model
const mongoose = require('mongoose');
const Session = require('../models/sessionSchema.js');
const checkAuth = async (req, res, next) => {
	const userInDb = await User.findOne({ username: req.session.username });
	if (req.session && userInDb) {
		console.log(`You can now access the protecte route,${userInDb.username}`);
		return next();
	} else {
		console.log("Couldn't access the protected route");
		res.status(401).json({
			loggedIn: false,
			message: 'You need to be logged in to view this page',
		});
	}
};

module.exports = checkAuth;
