import React from 'react';
import './container.css';
import { useNavigate } from 'react-router-dom';
const Container = (props) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(props.redirectPath);
	};
	return (
		<div className={props.containerClass} onClick={handleClick}>
			{props.children}
		</div>
	);
};

export default Container;
