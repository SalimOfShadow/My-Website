import React from 'react';
import ResponsiveAppBar from '../navbar/Navbar';
import { motion } from 'framer-motion';
const Homepage = (props) => {
	return (
		<motion.div className="page-container">
			<ResponsiveAppBar />
		</motion.div>
	);
};

export default Homepage;
