import React, { useState } from 'react';
import { motion, AnimatePresence, easeIn, easeInOut } from 'framer-motion';
import { isLogged } from '../../utils/authenticateUser';
import { logout } from '../../utils/logout';
const ProtectedComponent = (props) => {
	isLogged();
	return (
		<AnimatePresence>
			<div style={{ color: 'red' }}>This route is protected!</div>
			<button
				onClick={() => {
					logout();
				}}
			>
				Logout
			</button>
		</AnimatePresence>
	);
};

export default ProtectedComponent;
