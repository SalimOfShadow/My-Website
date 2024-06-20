import React from 'react';

const FormButton = (props) => {
	return (
		<div className={'inputContainer'}>
			<input
				className={'inputButton'}
				type="button"
				disabled={props.disabled}
				onClick={props.onClick}
				value={props.value}
			/>
		</div>
	);
};
export default FormButton;
