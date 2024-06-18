const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middlewares/sessionValidation.js');
// https://www.youtube.com/watch?v=72JYhSoVYPc

router.get('/protected', checkAuth, (req, res) => {
	res.status(200).json({
		message: 'You can access this protected route',
	});
});
module.exports = router;
