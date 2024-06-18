import { React, useState } from 'react';
import { useNavigate, redirect, useParams } from 'react-router-dom';
import validator from 'validator';
import { AnimatePresence, motion } from 'framer-motion';

// Importing Components

import FormTitle from '../form-components/FormTitle';
import Spinner from '../spinner/Spinner';
import FormInput from '../form-components/FormInput';
import FormButton from '../form-components/FormButton';

// Importing utilities

import { validatePassword } from '../../utils/validateCredentials';

const ChangePasswordForm = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [topMessage, setTopMessage] = useState('');
	const [buttonInactive, setButtonInactive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [validURL, setValidURL] = useState(false);
	const { id, token } = useParams();

	if (!id) console.log('Id not found!');
	if (!token) console.log('Token not found!');

	const validateURL = async () => {
		try {
			const response = await fetch(
				`http://localhost:3001/reset-password/${id}/${token}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': 'http://localhost:3001',
					},
				}
			);

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setValidURL(true);
				return true;
			} else {
				// navigate('/login');
				/* 			setTimeout(() => {
					navigate('/login');
				}, 3000); */
				console.log('Response not ok');

				return false;
			}
		} catch (error) {
			console.error(
				'An error occurred while sending the password reset password',
				error
			);
			navigate('/login');
			return false;
		}
	};
	if (!validURL) {
		validateURL();
	}
	const sendResetPassword = async (password) => {
		setIsLoading(true);
		const data = { id, newPassword: password }; // Data to be sent in the request body
		console.log(data);

		try {
			const response = await fetch(
				'http://localhost:3001/reset-password/:id/:token',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': 'http://localhost:3001',
					},
					body: JSON.stringify(data),
				}
			);

			if (response.ok) {
				const data = await response.json();
				console.log('Password resetted successfully');
				/* 	setTimeout(() => {
					navigate('/login');
				}, 2000); */
				setButtonInactive(true);
				setIsLoading(false);
			} else {
				console.error('Failed to send password reset password');
				setIsLoading(false);
			}
		} catch (error) {
			console.error(
				'An error occurred while sending the password reset password',
				error
			);
			setIsLoading(false);
		}
	};

	const validateConfirmPassword = (passwordToVerify) => {
		setPasswordError('');
		let valid = validatePassword(password, setPasswordError);

		if (!valid) {
			return;
		}

		if (passwordToVerify === confirmPassword) {
			setTopMessage({ message: 'The password matched!!!!', className: 'true' });
			setButtonInactive(true);
			sendResetPassword(password);
		} else {
			setPasswordError("The password doesn't match!!!!");
		}
	};

	const handleClick = (button) => {
		if (button === 'reset') {
			validateConfirmPassword(password);
		}
	};
	return (
		<div className={'mainContainer'}>
			<AnimatePresence>
				{(validURL && (
					<motion.div className="form-container" transition={{ duration: 1 }}>
						<FormTitle title="Change Password"></FormTitle>
						<br />
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
							value={password}
							placeholder="Enter your password here"
							onChange={(ev) => setPassword(ev.target.value)}
							error={passwordError}
						></FormInput>
						<br />

						<FormInput
							value={confirmPassword}
							placeholder="Confirm your password here"
							onChange={(ev) => setConfirmPassword(ev.target.value)}
							error={passwordError}
						></FormInput>

						<br />
						<FormButton
							disabled={buttonInactive}
							onClick={() => {
								handleClick('reset');
							}}
							value="Reset"
						></FormButton>
					</motion.div>
				)) || (
					<motion.div>
						<FormTitle title="Invalid URL!"></FormTitle>{' '}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ChangePasswordForm;
