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
		user: 'delphia.jacobi@ethereal.email',
		pass: 'zKxwZz7r3VbyXsXFkk',
	},
});

async function sendEmail(recipient, emailPurpose, url) {
	let html;
	if (emailPurpose === 'verify-user') {
		html = generateVerificationEmail(recipient, url);
	}
	if (emailPurpose === 'reset-password') {
		html = generateResetEmail(recipient, url);
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
