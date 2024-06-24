import React from 'react';
import { motion } from 'framer-motion';
const FormInput = (props) => {
	return (
		<div className={'inputContainer'}>
			{props.error && (
				<motion.label // FIGURE OUT HOW TO IMPLEMENT THIS
					className="errorLabel"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					exit={{ opacity: 0 }}
				>
					{props.error}
				</motion.label>
			)}
			<input
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onChange}
				className={'inputBox'}
				type={props.type}
			/>
		</div>
	);
};
export default FormInput;
