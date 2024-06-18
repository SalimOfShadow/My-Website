import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [registeredPrompt, setRegisteredPrompt] = useState('');
	const [buttonInactive, setButtonInactive] = useState(false);

	const validateCredentials = () => {
		setRegisteredPrompt();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
		function validateUsername() {
			if (!username) {
				setUsernameError('Please choose a username');
				return false;
			}
			if (username.length < 4) {
				setUsernameError('Your username must contain at least 4 characters');
				return false;
			}

			if (username.length >= 20) {
				setUsernameError('Your username must not exceed 20 characters');
				return false;
			}

			if (!/^[a-zA-Z0-9_]+$/.test(username)) {
				setUsernameError('Your username contains invalid characters');
				return false;
			}
			setUsernameError('');
			return true;
		}
		function validateEmail() {
			if (!email) {
				setEmailError('Please enter your email');
				return false;
			}
			if (!emailRegex.test(email)) {
				setEmailError('Please enter a valid email');
				return false;
			}
			setEmailError('');
			return true;
		}
		function validatePassword() {
			if (!password) {
				setPasswordError('Please enter your password');
				return false;
			}

			if (password.length < 8) {
				setPasswordError('Your password must be at least 8 characters long');
				return false;
			}

			if (password.length >= 40) {
				setPasswordError('Your password must not exceed 40 characters');
				return false;
			}
			if (password.search(/[A-Z]/) < 0) {
				setPasswordError(
					'Your password must contain at least one upper case letter'
				);
				return false;
			}
			if (password.search(/[a-z]/) < 0) {
				setPasswordError(
					'Your password must contain at least one lower case letter'
				);
				return false;
			}
			if (password.search(/[0-9]/) < 0) {
				setPasswordError('Your password must contain at least one number');
				return false;
			}
			if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
				setPasswordError(
					'Your password must contain at least one special character'
				);
				return false;
			}
			setPasswordError('');
			return true;
		}
		// TODO - Find out why for some reasons if i don't also call these three functions before the if statement,only one at the time will fire...Which is okeish,but it's not what i want
		validateUsername();
		validateEmail();
		validatePassword();
		if (validateUsername() && validateEmail() && validatePassword()) {
			return true;
		}
	};

	const submitFormData = async () => {
		try {
			const response = await fetch('http://localhost:3001/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					cors: 'no-cors',
				},
				body: JSON.stringify({ username, email, password }),
			});
			if (response.ok) {
				const data = await response.json();
				console.log('Submission successful:', data);
				setRegisteredPrompt(
					"You've successfully registered your account! Login to proceed."
				);
				setTimeout(() => {
					navigate('/Login');
				}, 4000);
			}
			if (response.status === 409) {
				const errorMessage = await response.json();
				if (errorMessage.error.split(' ')[1] === 'username') {
					//If the error complains about an username conflict
					setUsernameError(errorMessage.error);
					throw new Error(errorMessage.error);
					//If the error complains about an email conflict
				} else if (errorMessage.error.split(' ')[1] === 'email') {
					setEmailError(errorMessage.error);
					throw new Error(errorMessage.error);
				}
			}
		} catch (error) {
			console.error('An error occurred while subsmitting the form:', error);
		}
	};
	async function searchUser(username, email) {
		try {
			const response = await fetch(
				`http://localhost:3001/api/users?username=${encodeURIComponent(
					username
				)}&email=${encodeURIComponent(email)}`
			);
			if (!response.ok) {
				if (response.status === 409) {
					const message = await response.json();
					if (message.username && message.email) {
						setUsernameError('Found an user with the same username');
						setEmailError('Found an user with the same email');
						return;
					}
					if (message.username) {
						setUsernameError('Found an user with the same username');
						return;
					}
					if (message.email) {
						setEmailError('Found an user with the same email');

						return;
					}
					setPasswordError(message.username);
				}
				throw new Error('Failed to fetch user data');
			}
			if (response.status === 201) {
				console.log('Submitting form data ');
				submitFormData();
				return;
			}
		} catch (error) {
			console.error(error);
			return null;
		}
		setButtonInactive(false);
	}
	const onButtonClick = (button) => {
		if (button === 'register') {
			if (validateCredentials()) {
				setButtonInactive(true);
				submitFormData();
			}
		}
		if (button === 'login') {
			navigate('/Login');
		}
	};

	return (
		<div className={'mainContainer'}>
			<div className={'titleContainer'}>
				<div>Register</div>
			</div>
			<p className="topMessage true">{registeredPrompt}</p>
			<br />
			<div className={'inputContainer'}>
				<input
					value={username}
					placeholder="Enter your username here"
					onChange={(ev) => setUsername(ev.target.value)}
					className={'inputBox'}
				/>
				{usernameError && <label className="errorLabel">{usernameError}</label>}
			</div>
			<br />
			<div className={'inputContainer'}>
				<input
					value={email}
					placeholder="Enter your email here"
					onChange={(ev) => setEmail(ev.target.value)}
					className={'inputBox'}
				/>
				{emailError && <label className="errorLabel">{emailError}</label>}
			</div>
			<br />
			<div className={'inputContainer'}>
				<input
					value={password}
					type="password"
					placeholder="Enter your password here"
					onChange={(ev) => setPassword(ev.target.value)}
					className={'inputBox'}
				/>
				{passwordError && <label className="errorLabel">{passwordError}</label>}
			</div>

			<br />
			<div className={'inputContainer'}>
				<input
					className={'inputButton'}
					type="button"
					disable={buttonInactive}
					onClick={() => {
						onButtonClick('register');
					}}
					value={'Register'}
				/>
			</div>
			<div className={'inputContainer'}>
				<input
					className={'inputButton'}
					type="button"
					onClick={() => {
						onButtonClick('Back to login');
					}}
					value={'Login'}
				/>
			</div>
		</div>
	);
};

export default RegisterForm;
