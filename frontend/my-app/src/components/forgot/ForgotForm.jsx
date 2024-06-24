import React, { useState } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import validator from 'validator';
import { AnimatePresence, motion } from 'framer-motion';

// Importing Components

import FormTitle from '../form-components/FormTitle';
import Spinner from '../spinner/Spinner';
import FormInput from '../form-components/FormInput';
import FormButton from '../form-components/FormButton';

// Importing utilities

import { validateEmail } from '../../utils/validateCredentials';

const ForgotForm = () => {
	const navigate = useNavigate();
	const [formType, setFormType] = useState('');
	const [email, setEmail] = useState('');
	const [confirmEmail, setConfirmEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [topMessage, setTopMessage] = useState('');
	const [buttonInactive, setButtonInactive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const sendResetPassword = async (email) => {
		const data = { email }; // Data to be sent in the request body

		try {
			const response = await fetch('http://localhost:3001/forgot-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': 'http://localhost:3001',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setTopMessage({
					message: 'Email sent successfully,check your inbox!',
					className: 'true',
				});
				setTimeout(() => {
					window.location.href = '/login';
				}, 2000);
			} else {
				console.error('Failed to send password reset email');
			}
		} catch (error) {
			console.error(
				'An error occurred while sending the password reset email',
				error
			);
		}
	};

	const validateConfirmEmail = (emailToVerify) => {
		setEmailError('');
		let valid = validateEmail(email, setEmailError);

		if (!valid) {
			return;
		}

		if (emailToVerify === confirmEmail) {
			sendResetPassword(email);
		} else {
			setEmailError("The email doesn't match!!!!");
		}
	};

	const handleClick = (button) => {
		if (button === 'reset') {
			validateConfirmEmail(email);
		}
	};

	return (
		<div className={'mainContainer'}>
			<AnimatePresence>
				<motion.div
					className="form-container"
					animate={{ height: 'auto' }}
					transition={{ duration: 0.1 }}
					exit={{ height: 0 }}
					key={'modal'}
					layout
				>
					<FormTitle title="Password Reset"></FormTitle>
					<br />{' '}
					<AnimatePresence>
						{isLoading && (
							<motion.div
								transition={{ duration: 0.4 }}
								initial={{ opacity: 0, x: -150 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 150 }}
								key="modal"
							>
								<Spinner></Spinner>
							</motion.div>
						)}{' '}
					</AnimatePresence>
					<p className={`topMessage ${topMessage.className}`}>
						{topMessage.message}
					</p>
					<FormInput
						value={email}
						placeholder="Enter your email here"
						onChange={(ev) => setEmail(ev.target.value)}
						error={emailError}
					></FormInput>
					<br />
					<FormInput
						value={confirmEmail}
						placeholder="Confirm your email here"
						onChange={(ev) => setConfirmEmail(ev.target.value)}
						error={emailError}
					></FormInput>
					<br />
					<FormButton
						disabled={buttonInactive}
						onClick={() => {
							handleClick('reset');
						}}
						value="Reset"
					></FormButton>
					<FormButton
						disabled={buttonInactive}
						onClick={() => {
							setIsLoading(true);
							setTimeout(() => {
								setIsLoading(false);
							}, 1500);
						}}
						value="Back to Login"
					></FormButton>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
export default ForgotForm;
