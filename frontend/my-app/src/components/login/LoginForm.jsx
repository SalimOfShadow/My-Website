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
	const [formType, setFormType] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [topMessage, setTopMessage] = useState('');
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setTopMessage({
			message: '',
			className: '',
		});
	}, [isLoading]);

	const logUser = async (email, password) => {
		setIsLoading(true);
		const userData = {
			email: validator.normalizeEmail(email),
			password,
		};
		try {
			const response = await fetch('http://localhost:3001/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': 'http://localhost:3000',
				},
				body: JSON.stringify(userData),
				credentials: 'include',
			});
			if (response.ok) {
				await handleResponse(response, 'success', setTopMessage);
				setIsLoading(false);
				setButtonDisabled(true);
				setTimeout(() => {
					navigate('/');
				}, 2000);
				return;
			} else {
				await handleResponse(response, 'failure', setTopMessage);
				setIsLoading(false);
				setTimeout(() => {
					setButtonDisabled(false);
				}, 1000);
				return;
			}
		} catch (err) {
			console.error(err);
			setIsLoading(false);
			setTimeout(() => {
				setTopMessage({
					message: 'Failed to login, please try again later!',
					className: 'false',
				});
			}, 400);
			setTimeout(() => {
				setButtonDisabled(false);
			}, 1000);
			return;
		}
	};

	const handleClick = (button) => {
		if (button === 'login' && validateCredentials()) {
			setButtonDisabled(true);
			logUser(email, password);
		}
		if (button === 'register') {
			navigate('/register');
			return;
		}
	};

	const validateCredentials = () => {
		validateEmail(email, setEmailError);
		validatePassword(password, setPasswordError);
		// TODO - Find out why for some reasons if i don't also call these three functions before the if statement,only one at the time will fire...Which is okeish,but it's not what i want
		if (
			validateEmail(email, setEmailError) &&
			validatePassword(password, setPasswordError)
		) {
			return true;
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
					<FormTitle title="Login"></FormTitle>
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
					{/* TODO - TURN THIS INTO A MOTION COMPONENT TO ENHANCE THE FADE IN */}
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
						value={password}
						placeholder="Enter your password here"
						onChange={(ev) => setPassword(ev.target.value)}
						error={passwordError}
					></FormInput>
					<div
						className="forgot-password"
						onClick={() => {
							if (!buttonDisabled) navigate('/Forgot');
						}}
					>
						<p className="forgot-text">Forgot your password?</p>
					</div>
					<br />
					<FormButton
						disabled={buttonDisabled}
						onClick={() => {
							handleClick('login');
						}}
						value="Login"
					></FormButton>
					<FormButton
						disabled={buttonDisabled}
						onClick={() => {
							setIsLoading(true);
							setTimeout(() => {
								setIsLoading(false);
							}, 1000);
						}}
						value="Register"
					></FormButton>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default RegisterForm;
