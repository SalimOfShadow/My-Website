import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './spinner.css';

const Spinner = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key="modal"
				initial={{ x: -300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: 300, opacity: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="spinner"></div>
			</motion.div>
		</AnimatePresence>
	);
};
export default Spinner;
