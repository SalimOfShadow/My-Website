import React from 'react';

const FormButton = (props) => {
	return (
		<div className={'inputContainer'}>
			<input
				className={'inputButton'}
				type="button"
				disabled={props.buttonState}
				onClick={props.onClick}
				value={props.value}
			/>
		</div>
	);
};
export default FormButton;
