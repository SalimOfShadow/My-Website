import React from 'react';
import FormTitle from '../components/form-components/FormTitle';
import ProtectedComponent from '../components/protected-route/PortectedRoute';
const ProtectedRoute = (props) => {
	return (
		<div className="mainContainer">
			<ProtectedComponent></ProtectedComponent>
		</div>
	);
};

export default ProtectedRoute;
