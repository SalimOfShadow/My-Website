import React from 'react';
import FormTitle from '../components/form-components/FormTitle';
import { useParams } from 'react-router-dom';
const UserVerified = (props) => {
	const { id, token } = useParams();
	async function verifyUser(id, token) {
		try {
			const response = await fetch(
				`http://localhost:3001/user-verification/${id}/${token}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': 'http://localhost:3000',
					},
					credentials: 'include',
				}
			);

			if (response.ok) {
				const data = await response.json();
				const message = data.message;
				console.log(message);

				return;
			} else {
				const data = await response.json();
				const message = data.message;
				console.log(message);
			}
		} catch (error) {
			console.error('Error: ', error);
		}
	}
	setTimeout(() => {
		verifyUser(id, token);
	}, 1500);
	return (
		<div>
			<FormTitle title="Your account has been verified,please login!"></FormTitle>
		</div>
	);
};
export default UserVerified;
