import React, { useEffect, useState } from 'react';
import { isLogged } from '../utils/isLogged';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const [logged, setLogged] = useState(null); // Use null to indicate the loading state
	async function checkLogin() {
		const response = await isLogged();
		console.log(response);
		setLogged(response);
	}
	useEffect(() => {
		checkLogin();
	}, []);

	if (logged === null) {
		// While checking the login status
		return (
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					width: '100px',
					height: '100px',
				}}
			>
				Loading...
			</div>
		);
	}

	if (!logged) {
		console.log('You are not logged in');
		setTimeout(() => {
			navigate('/');
		}, 1000);
		return (
			<div className="mainContainer">
				You need to be logged in to view this page.
			</div>
		); // Redirect to login page if not logged in
	}

	return <div className="mainContainer">{children}</div>;
};

export default ProtectedRoute;
