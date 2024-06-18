import validator from 'validator';
const validateUsername = (username, setUsernameError) => {
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
};
const validateEmail = (email, setEmailError) => {
	if (!email) {
		setEmailError('Please enter your email');
		return false;
	}
	if (!validator.isEmail(email)) {
		setEmailError('Please enter a valid email');
		return false;
	}
	setEmailError('');
	return true;
};
const validatePassword = (password, setPasswordError) => {
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
};

export { validateUsername, validateEmail, validatePassword };
