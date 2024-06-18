const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userSchema.js'); // Update the path for User model

const nodemailer = require('nodemailer');
const generateVerificationEmail = require('../email/templates/verification.js');
const generateResetEmail = require('../email/templates/resetPassword.js');

const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
		user: 'mitchel58@ethereal.email',
		pass: '8VJdEKs5eWyYvqVtkk',
	},
});
// Hardcoding recipient's object

async function sendEmail(recipient, emailType, url) {
	let redirectUrl;
	let html;
	if (emailType === 'verify-user') {
		html = generateVerificationEmail(recipient, redirectUrl);
		redirectUrl = 'http://localhost:3000/Email';
	}
	if (emailType === 'reset-password') {
		html = generateResetEmail(recipient, url);
		redirectUrl = 'http://localhost:3000/';
	}
	try {
		// send mail with defined transport object
		const info = await transporter.sendMail({
			from: '"Maddison Foo Koch 👻" <noble.stracke@ethereal.email>', // sender address
			to: recipient.email, // list of receivers
			subject: `Thanks for signing up to SalimOfShadowKOF, ${recipient.username} !`, // Subject line
			text: html, // plain text body
			html: html,
		});
		console.log('Message sent: %s', info.messageId);
		// Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
	} catch (err) {
		throw new Error(err);
	}
}
module.exports = sendEmail;
