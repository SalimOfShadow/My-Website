import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { AnimatePresence, motion } from 'framer-motion';

// Importing Components

import FormTitle from '../form-components/FormTitle';
import Spinner from '../spinner/Spinner';
import FormInput from '../form-components/FormInput';
import FormButton from '../form-components/FormButton';

// Importing utilities

import {
	validateUsername,
	validateEmail,
	validatePassword,
} from '../../utils/validateCredentials';

import { handleResponse } from '../../utils/handleResponses';

const RegisterForm = (props) => {
	const navigate = useNavigate();

	// Declaring States
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [topMessage, setTopMessage] = useState('');
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// Adding effects

	useEffect(() => {
		setTopMessage({
			message: '',
			className: '',
		});
	}, [isLoading]);

	useEffect(() => {}); // TODO - Add filter: brightness(90%) when the button is inactive

	// Submitting form

	const registerUser = async () => {
		setIsLoading(true);
		const userData = {
			username,
			email: validator.normalizeEmail(email),
			password,
		};
		try {
			const response = await fetch('http://localhost:3001/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					cors: 'no-cors',
				},
				body: JSON.stringify(userData),
			});
			if (response.ok) {
				await handleResponse(response, 'success', setTopMessage);
				setIsLoading(false);
				setButtonDisabled(true);
			} else {
				if (response.status === 409) {
					handleConflicts(response);
					return;
				}
				await handleResponse(response, 'failure', setTopMessage);
				setIsLoading(false);
				setTimeout(() => {
					setButtonDisabled(false);
				}, 1000);
			}
		} catch (err) {
			console.error(err);
			setIsLoading(false);
			setTimeout(() => {
				setTopMessage({
					message: 'Failed to register, please try again later!',
					className: 'false',
				});
			}, 400);
			setTimeout(() => {
				setButtonDisabled(false);
			}, 1000);
		}
	};
	const handleConflicts = async (response) => {
		// Handles MongoDB confict error
		if (response.status === 409) {
			setIsLoading(false);
			const errorMessage = await response.json();
			if (errorMessage.error.split(' ')[1] === 'username') {
				//If the error complains about an username conflict
				setTimeout(() => {
					setUsernameError(errorMessage.error);
				}, 400);
				//If the error complains about an email conflict
			} else if (errorMessage.error.split(' ')[1] === 'email') {
				setTimeout(() => {
					setEmailError(errorMessage.error);
				}, 400);
			}
			setTimeout(() => {
				setButtonDisabled(false);
			}, 1000);
		}
	};
	const validateCredentials = () => {
		validateUsername(username, setUsernameError);
		validateEmail(email, setEmailError);
		validatePassword(password, setPasswordError);
		// TODO - Find out why for some reasons if i don't also call these three functions before the if statement,only one at the time will fire...Which is okeish,but it's not what i want
		if (
			validateEmail(email, setEmailError) &&
			validatePassword(password, setPasswordError) &&
			validateUsername(username, setUsernameError)
		) {
			return true;
		}
	};

	const handleClick = (button) => {
		if (button === 'register' && validateCredentials()) {
			setButtonDisabled(true);
			registerUser();
		}
		if (button === 'redirect') {
			navigate('/register');
			return;
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
					<FormTitle title="Register"></FormTitle>

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
						value={username}
						placeholder="Enter your username here"
						onChange={(ev) => setUsername(ev.target.value)}
						error={usernameError}
					></FormInput>
					<br />
					<FormInput
						value={email}
						placeholder="Enter your email here"
						onChange={(ev) => setEmail(ev.target.value)}
						error={emailError}
					></FormInput>
					<br />
					<FormInput
						value={password}
						placeholder="Enter your password here"
						onChange={(ev) => setPassword(ev.target.value)}
						error={passwordError}
					></FormInput>
					<br />
					<FormButton
						disabled={buttonDisabled}
						onClick={() => {
							handleClick('register');
						}}
						value="Register"
					></FormButton>
					<FormButton
						disabled={buttonDisabled}
						onClick={() => {
							setIsLoading(true);
							setTimeout(() => {
								setIsLoading(false);
							}, 1000);
						}}
						value="Back to login"
					></FormButton>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default RegisterForm;
