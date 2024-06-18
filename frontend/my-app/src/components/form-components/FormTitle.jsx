import React from 'react';
const FormTitle = (props) => {
	return (
		<div className="titleContainer" style={{ color: props.color }}>
			{props.title}
		</div>
	);
};
export default FormTitle;
